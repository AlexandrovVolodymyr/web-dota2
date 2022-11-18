import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { animate, group, query, style, transition, trigger } from "@angular/animations";

import { Observable, Subject, takeUntil } from "rxjs";

import { UserService } from "./services/user.service";
import { User } from "./features/core/interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ]),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
        ])
      ])
    ])
  ],
})
export class AppComponent implements OnDestroy {
  readonly user$: Observable<User | null> = this.userService.user$;
  backgroundImage: string | undefined;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const afterRedirects = event.urlAfterRedirects;
        switch (afterRedirects) {
          case '/':
            this.backgroundImage = 'assets/img/main2.png';
            break;
          default:
            this.backgroundImage = 'assets/img/main6.jpg';
        }
      }
    });
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state'];
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
