import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private profileMode$: BehaviorSubject<'on' | 'off'> = new BehaviorSubject<'on' | 'off'>('off');
  profile$: Observable<'on' | 'off'> = this.profileMode$.asObservable();

  setProfileMode(mode: 'on' | 'off') {
    this.profileMode$.next(mode);
  }

  getProfileMode() {
    return this.profileMode$.getValue();
  }
}
