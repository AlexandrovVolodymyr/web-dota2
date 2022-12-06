import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private sanitizer = inject(DomSanitizer);

  heroRoles(): string[] {
    return ['Carry', 'Support', 'Nuker', 'Disabler', 'Jungler', 'Durable', 'Escape', 'Pusher', 'Initiator'];
  }

  snackBarOptions(duration: number = 4000): { duration: number, panelClass: string } {
    return { duration, panelClass: 'snackbar' };
  }

  getSVG(name: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(name);
  }
}
