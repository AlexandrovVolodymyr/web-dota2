import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Router } from "@angular/router";

import { Subject, takeUntil } from "rxjs";

import { AuthService } from "../../../auth/services/auth.service";
import { UserService } from "../../../../services/user.service";
import { TwitchService } from "../../../../services/twitch.service";
import { ProfileComponent } from "../../../profile/containers/profile/profile.component";
import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnDestroy {
  @ViewChild('profileContainer', { read: ViewContainerRef }) profileContainer!: ViewContainerRef;
  componentRef: ComponentRef<ProfileComponent> | undefined;
  @Input() user: User | undefined;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private twitchService: TwitchService,
    private router: Router,
  ) {
  }

  openProfileBar(): void {
    this.profileContainer.clear();
    this.componentRef = this.profileContainer.createComponent(ProfileComponent);
    this.componentRef.instance.profileContainer = this.profileContainer;
    this.componentRef.instance.user$ = this.userService.user$;
    // this.componentRef.instance.clearContainer.subscribe(() => this.profileContainer.clear());
  }

  logout(): void {
    this.authService.logout()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          localStorage.clear();
          this.userService.setUser(null);
          this.twitchService.twitchAccessToken$.next(null);
          this.twitchService.twitchUser$.next(null);

          this.router.navigate(['/']);
        },
        error: (err) => console.warn(err)
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
