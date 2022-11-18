import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { FormActions } from "../../features/core/interfaces/form-actions.interface";

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
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

  switch(event: MouseEvent) {
    event.preventDefault();
    this.switchEvent.emit();
  }
}
