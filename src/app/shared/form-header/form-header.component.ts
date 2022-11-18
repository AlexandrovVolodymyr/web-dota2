import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormHeaderComponent {
  @Output() closeEvent = new EventEmitter<void>();
  @Input() title?: string;
  @Input() isCloseIcon: boolean = true;

  close(): void {
    this.closeEvent.emit();
  }
}
