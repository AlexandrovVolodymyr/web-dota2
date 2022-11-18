import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { map, Observable, of } from "rxjs";

import { AuthService } from "../../auth/services/auth.service";
import { UserService } from "../../../services/user.service";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    return of(this.authService.isLoggedIn)
      .pipe(
        map(isAuthenticated => {
          if (!isAuthenticated) {
            return this.router.createUrlTree(['/']);
          }

          const user: User = JSON.parse(localStorage.getItem('user')!);
          this.userService.setUser(user);

          return true;
        })
      )
  }

}
