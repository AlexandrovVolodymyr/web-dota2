import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { FormActions } from '../../features/core/interfaces/form-actions.interface';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormActionsComponent {
  @Output() resetEvent = new EventEmitter<void>();
  @Output() actionEvent = new EventEmitter<void>();
  @Output() switchEvent = new EventEmitter<void>();
  @Input() properties!: FormActions;
  @Input() disabled!: boolean;
  @Input() switcher = true;

  resetHandler(): void {
    this.resetEvent.emit();
  }

  actionHandler(): void {
    this.actionEvent.emit();
  }

  switch(event: MouseEvent): void {
    event.preventDefault();
    this.switchEvent.emit();
  }
}
