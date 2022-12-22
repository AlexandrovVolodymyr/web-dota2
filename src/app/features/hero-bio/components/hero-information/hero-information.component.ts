import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

import { heroImports } from '../../hero-bio.imports';
import { Attributes } from '../../../core/enums/attributes';
import { HeroFullInformation } from '../../../core/interfaces/hero-full-information';

@Component({
  selector: 'app-hero-information',
  templateUrl: './hero-information.component.html',
  styleUrls: ['./hero-information.component.scss'],
  standalone: true,
  imports: [...heroImports],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroInformationComponent {
  @Input() hero!: HeroFullInformation;

  HeroAttributes = Attributes;
  isFullHistory = false;

  showFullHistory(): void {
    this.isFullHistory = true;
  }

  closeFullHistory(): void {
    this.isFullHistory = false;
  }
}
