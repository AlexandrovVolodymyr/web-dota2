import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";

import { BehaviorSubject, Observable, Subject, switchMap, takeUntil } from "rxjs";

import { homeImports } from "../../home.imports";
import { TwitchService } from "../../../../services/twitch.service";
import { UtilsService } from "../../../../services/utils.service";
import {
  TwitchApiResponse,
  TwitchCredentials,
  TwitchTopGames,
  TwitchUser
} from "../../../core/interfaces/twitch.interface";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: homeImports,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  twitchService = inject(TwitchService);
  matSnackBar = inject(MatSnackBar);
  utilsService = inject(UtilsService);

  twitchUser$: Observable<TwitchUser | null> = this.twitchService.twitchUserData$;
  twitchTopGames$: BehaviorSubject<TwitchTopGames[]> = new BehaviorSubject<TwitchTopGames[]>([]);

  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    const twitchToken = JSON.parse(localStorage.getItem('twitchAccessToken')!);

    if (twitchToken) {
      this.twitchService.isValidToken(twitchToken)
        .pipe(
          switchMap(() => {
            const twitchUser: TwitchUser = JSON.parse(localStorage.getItem('twitchUser')!);
            this.twitchService.twitchUser$.next(twitchUser);

            return this.twitchService.getTopGames({ client_id: environment.twitchConfig.clientId, access_token: twitchToken });
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe({
          next: ({ data }: TwitchApiResponse<TwitchTopGames[]>) => this.twitchTopGames$.next(data),
          error: (err: HttpErrorResponse) => this.handleError(err)
        });
    }

    if (document.location.hash && document.location.hash != '') {
      const parsedHash = new URLSearchParams(window.location.hash.slice(1));
      if (parsedHash.get('access_token')) {
        const access_token = parsedHash.get('access_token')!;
        const client_id = environment.twitchConfig.clientId;

        this.twitchService.twitchAccessToken$.next(access_token);
        localStorage.setItem('twitchAccessToken', JSON.stringify(access_token));

        this.matSnackBar.open('Twitch authorization successful', 'Close', this.utilsService.snackBarOptions());

        // getUser
        this.twitchService.getUser({ client_id, access_token })
          .pipe(
            switchMap((user: TwitchUser) => {
              this.twitchService.twitchUser$.next(user);
              localStorage.setItem('twitchUser', JSON.stringify(user));

              return this.twitchService.getTopGames({ client_id, access_token });
            }),
            takeUntil(this.unsubscribe$)
          )
          .subscribe({
            next: ({ data }: TwitchApiResponse<TwitchTopGames[]>) => this.twitchTopGames$.next(data),
            error: (err: HttpErrorResponse) => this.handleError(err)
          });
      }
    } else if (document.location.search && document.location.search != '') {
      const parsedParams = new URLSearchParams(window.location.search);
      if (parsedParams.get('error_description')) {
        this.matSnackBar.open(parsedParams.get('error') + ' - ' + parsedParams.get('error_description'), 'Close', this.utilsService.snackBarOptions(10000))
      }
    }
  }

  loginToTwitch({ clientId }: TwitchCredentials): void {
    window.open(`${environment.twitchConfig.url}/authorize?client_id=${clientId}&response_type=token&redirect_uri=${environment.twitchConfig.redirect_uri}&scope=user%3Aedit%20user%3Aread%3Aemail+analytics%3Aread%3Agames`, '_self');
  }

  updateUser(description: string): void {
    this.twitchService.updateUser(description, environment.twitchConfig.clientId, JSON.parse(localStorage.getItem('twitchAccessToken')!))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (user: TwitchUser) => {
          this.twitchService.twitchUser$.next(user);
          localStorage.setItem('twitchUser', JSON.stringify(user));

          this.matSnackBar.open('Twitch profile has been updated', 'Close', this.utilsService.snackBarOptions());
        },
        error: (err: HttpErrorResponse) => this.handleError(err)
      });
  }

  openGame(game: string): void {
    window.open(`https://www.twitch.tv/directory/game/${game}`, '_blank');
  }

  private handleError(err: HttpErrorResponse): void {
    localStorage.removeItem('twitchUser');
    this.twitchService.twitchAccessToken$.next(null);
    localStorage.removeItem('twitchAccessToken');
    this.twitchService.twitchUser$.next(null);

    this.matSnackBar.open(err.message, 'Close', this.utilsService.snackBarOptions(10000));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
