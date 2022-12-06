import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { UtilsService } from '../../../../services/utils.service';
import { SVG } from '../../../core/constant/svgs';

@Component({
  selector: 'app-talent-tree',
  templateUrl: './talent-tree.component.html',
  styleUrls: ['./talent-tree.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentTreeComponent {
  private utilsService = inject(UtilsService);
  talentsTree = this.utilsService.getSVG(SVG.talentsTree);
}
