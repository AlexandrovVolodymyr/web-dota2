import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(this.authService.isLoggedIn)
      .pipe(
        map((isAuthenticated: boolean) => !isAuthenticated || this.router.createUrlTree(['/home']))
      );
  }

}
