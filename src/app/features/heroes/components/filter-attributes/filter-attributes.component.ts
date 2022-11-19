import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

import { HeroAttributes } from '../../../core/interfaces/hero.interface';
import { Attributes } from '../../../core/enums/attributes';

@Component({
  selector: 'app-filter-attributes',
  templateUrl: './filter-attributes.component.html',
  styleUrls: ['./filter-attributes.component.scss'],
  standalone: true,
  imports: [NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterAttributesComponent {
  @Output() attributeEvent = new EventEmitter<HeroAttributes[]>();
  attributes: HeroAttributes[] = [
    { name: 'hero_agility.png', status: false, type: Attributes.AGILITY },
    { name: 'hero_intelligence.png', status: false, type: Attributes.INTELLIGENCE },
    { name: 'hero_strength.png', status: false, type: Attributes.STRENGTH }
  ];

  setAttribute(attribute: HeroAttributes): void {
    this.attributes.forEach(item => {
      if (item.name === attribute.name) {
        item.status = !item.status;
      }
    });

    this.attributeEvent.emit(this.attributes);
  }
}
