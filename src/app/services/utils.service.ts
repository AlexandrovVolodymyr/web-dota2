import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  skeleton$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  heroRoles(): string[] {
    return ['Carry', 'Support', 'Nuker', 'Disabler', 'Jungler', 'Durable', 'Escape', 'Pusher', 'Initiator'];
  }

  snackBarOptions(duration: number = 4000): { duration: number, panelClass: string } {
    return { duration, panelClass: 'snackbar' };
  }
}
