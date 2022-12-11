import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-talents-tree',
  templateUrl: './talents-tree.component.html',
  styleUrls: ['./talents-tree.component.scss'],
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsTreeComponent {
}
