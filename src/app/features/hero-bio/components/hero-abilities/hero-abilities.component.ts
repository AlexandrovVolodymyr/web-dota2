import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-abilities',
  templateUrl: './hero-abilities.component.html',
  styleUrls: ['./hero-abilities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroAbilitiesComponent {
  @Output() showEvent = new EventEmitter<void>();
  @Input() abilities: any;

  show(): void {
    this.showEvent.emit();
  }
}
