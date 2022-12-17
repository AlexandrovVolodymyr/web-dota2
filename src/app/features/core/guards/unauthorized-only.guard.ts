import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { map, Observable, of } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedOnlyGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(this.authService.isLoggedIn)
      .pipe(
        map((isAuthenticated: boolean) => !isAuthenticated || this.router.createUrlTree(['/home']))
      );
  }

}
