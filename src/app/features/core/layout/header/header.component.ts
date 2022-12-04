import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Observable, Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../../../services/user.service';
import { TwitchService } from '../../../../services/twitch.service';
import { LayoutService } from '../../../../services/layout.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleProfile', [
      state('void', style({ opacity: '0', transform: 'translateX(100%)' })),
      transition(':enter, :leave', [
        animate('0.3s')
      ])
    ]),
  ]
})
export class HeaderComponent implements OnDestroy {
  @Input() user: User | undefined;

  profile$: Observable<'on' | 'off'> = this.layoutService.profile$;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private twitchService: TwitchService,
    private router: Router,
    private layoutService: LayoutService
  ) {
  }

  openProfileBar(): void {
    this.layoutService.setProfileMode('on');
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
