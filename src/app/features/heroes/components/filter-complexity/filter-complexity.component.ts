import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-filter-complexity',
  templateUrl: './filter-complexity.component.html',
  styleUrls: ['./filter-complexity.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComplexityComponent {
}
