import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { UtilsService } from '../../../../services/utils.service';
import { SVG } from '../../constant/svgs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  private utilsService = inject(UtilsService);
  logo = this.utilsService.getSVG(SVG.logo);
}
