import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { LayoutService } from '../../../../services/layout.service';
import { LayoutType } from '../../types/layout-type';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  private layoutService = inject(LayoutService);

  get layoutType(): Observable<LayoutType> {
    return this.layoutService.layoutType$;
  }
}
