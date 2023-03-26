import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Observable } from 'rxjs';

import { LayoutService } from '../../../../services/layout.service';
import { LayoutType } from '../../types/layout-type';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleProfile', [
      state('void', style({ opacity: '0', transform: 'translateX(-100%)' })),
      transition(':enter, :leave', [
        animate('0.3s')
      ])
    ]),
  ]
})
export class NavigationComponent {
  private layoutService = inject(LayoutService);
  sidebar$: Observable<boolean> = this.layoutService.sidebar$;

  get layoutType(): Observable<LayoutType> {
    return this.layoutService.layoutType$;
  }

  setSidebarMode(mode: boolean) {
    this.layoutService.setSidebarMode$(mode);
  }
}
