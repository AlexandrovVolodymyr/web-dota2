import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { HeroFullInformation } from "../../../core/interfaces/hero-full-information";

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSliderComponent {
  @Output() prevEvent = new EventEmitter<void>();
  @Output() nextEvent = new EventEmitter<void>();
  @Input() hero: HeroFullInformation | undefined;

  prev(): void {
    this.prevEvent.emit();
  }

  next(): void {
    this.nextEvent.emit();
  }
}
