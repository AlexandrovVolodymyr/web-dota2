import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { catchError, from, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  init(): Observable<any> {
    return from(this.icons)
      .pipe(
        map(({
          name,
          path
        }: { name: string, path: string }) => this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(path))),
        catchError((err: string) => of(err)),
      );
  }

  private get icons(): { name: string, path: string }[] {
    return [
      { name: 'logo', path: '../assets/img/icons/logo.svg' },
      { name: 'talents', path: '../assets/img/icons/talents.svg' },
      { name: 'twitch-logo', path: '../assets/img/icons/twitch-logo.svg' }
    ];
  }
}
