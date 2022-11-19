import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { FilterAttributesComponent } from '../../components/filter-attributes/filter-attributes.component';
import { SearchComponent } from '../../components/search/search.component';
import { HeroAttributes } from '../../../core/interfaces/hero.interface';

@Component({
  selector: 'app-heroes-filters',
  templateUrl: './heroes-filters.component.html',
  styleUrls: ['./heroes-filters.component.scss'],
  standalone: true,
  imports: [FilterAttributesComponent, SearchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesFiltersComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() attributeEvent = new EventEmitter<HeroAttributes[]>();

  onSearch(value: string): void {
    this.searchEvent.emit(value);
  }

  setAttribute(attributes: HeroAttributes[]): void {
    this.attributeEvent.emit(attributes);
  }
}
