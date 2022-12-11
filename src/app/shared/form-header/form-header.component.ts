import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss'],
  standalone: true,
  imports: [MatIconModule, NgIf],
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
