import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<void>();
  @Input() color: ThemePalette = undefined;
  @Input() text: string = 'Submit';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;

  onClick(): void {
    this.clickEvent.emit();
  }
}
