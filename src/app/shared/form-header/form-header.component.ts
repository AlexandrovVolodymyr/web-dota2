import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

import { UtilsService } from '../../services/utils.service';
import { SVG } from '../../features/core/constant/svgs';

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

  private utilsService = inject(UtilsService);
  logo = this.utilsService.getSVG(SVG.logo);

  close(): void {
    this.closeEvent.emit();
  }
}
