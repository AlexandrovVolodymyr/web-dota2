import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Hero } from "../../../core/interfaces/hero.interface";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input() hero!: Hero;
}
