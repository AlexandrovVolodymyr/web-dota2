import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-talent-tree',
  templateUrl: './talent-tree.component.html',
  styleUrls: ['./talent-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentTreeComponent {
}
