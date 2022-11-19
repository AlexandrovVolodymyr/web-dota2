import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../features/core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData$ = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userData$.asObservable();

  setUser(user: User | null): void {
    this.userData$.next(user);
  }

  getUser(): User | null {
    return this.userData$.getValue();
  }
}
