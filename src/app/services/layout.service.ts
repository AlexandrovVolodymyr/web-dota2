import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { LayoutType } from '../features/core/types/layout-type';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private profileMode$: BehaviorSubject<'on' | 'off'> = new BehaviorSubject<'on' | 'off'>('off');
  profile$: Observable<'on' | 'off'> = this.profileMode$.asObservable();

  headerOptions$ = new BehaviorSubject({ width: NaN });
  layoutType$ = new BehaviorSubject<LayoutType>('desktop');
  private sidebarMode$ = new BehaviorSubject<boolean>(false);
  sidebar$ = this.sidebarMode$.asObservable();

  setProfileMode(mode: 'on' | 'off'): void {
    this.profileMode$.next(mode);
  }

  getProfileMode(): 'on' | 'off' {
    return this.profileMode$.getValue();
  }

  setHeaderOptions(options: { width: number }): void {
    this.headerOptions$.next({ ...this.getHeaderOptions(), ...options });
  }

  getHeaderOptions(): { width: number } {
    return this.headerOptions$.getValue();
  }

  setLayoutType(width: number): void {
    if (width < 1200) {
      this.layoutType$.next('mobile');
    } else {
      this.layoutType$.next('desktop');
    }
  }

  getLayoutType(): LayoutType {
    return this.layoutType$.getValue();
  }

  setSidebarMode$(mode: boolean): void {
    this.sidebarMode$.next(mode);
  }

  getSidebarMode$(): boolean {
    return this.sidebarMode$.getValue();
  }
}
