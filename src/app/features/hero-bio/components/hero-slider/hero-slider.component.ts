import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeroFullInformation } from '../../../core/interfaces/hero-full-information';
import { Hero } from '../../../core/interfaces/hero.interface';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSliderComponent {
  @Output() prevEvent = new EventEmitter<void>();
  @Output() nextEvent = new EventEmitter<void>();
  @Input() hero!: HeroFullInformation;
  @Input() heroes: Hero[] | undefined;

  get hasPrev(): boolean {
    const prev = this.heroes!.find(item => this.hero?.id === item.id + 1);
    return !!prev;
  }

  prev(): void {
    this.prevEvent.emit();
  }

  next(): void {
    this.nextEvent.emit();
  }
}
