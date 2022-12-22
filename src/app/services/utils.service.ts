import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  heroRoles(): string[] {
    return ['Carry', 'Support', 'Nuker', 'Disabler', 'Jungler', 'Durable', 'Escape', 'Pusher', 'Initiator'];
  }

  snackBarOptions(duration: number = 4000): { duration: number, panelClass: string } {
    return { duration, panelClass: 'snackbar' };
  }
}
