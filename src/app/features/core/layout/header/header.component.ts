import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
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
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('header', { static: true }) header!: ElementRef;
  @Input() user: User | undefined;
  
  private layoutService = inject(LayoutService);
  profile$: Observable<'on' | 'off'> = this.layoutService.profile$;

  private observer!: ResizeObserver;
  private ngZone = inject(NgZone);
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private twitchService = inject(TwitchService);
  private router = inject(Router);
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      this.ngZone.run(() => {
        this.layoutService.setHeaderOptions({ width: entries[0].borderBoxSize[0].inlineSize });
        this.layoutService.setLayoutType(this.layoutService.getHeaderOptions().width);
      });
    });

    this.observer.observe(this.header.nativeElement);
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
    this.observer.unobserve(this.header.nativeElement);
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
