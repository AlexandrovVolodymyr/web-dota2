import {
  ChangeDetectionStrategy,
  Component, inject,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { heroImports } from '../../hero-bio.imports';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { Attributes } from '../../../core/enums/attributes';
import { HeroFullInformation } from '../../../core/interfaces/hero-full-information';

@Component({
  selector: 'app-hero-information',
  templateUrl: './hero-information.component.html',
  styleUrls: ['./hero-information.component.scss'],
  standalone: true,
  imports: [heroImports],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroInformationComponent {
  @Input() hero!: HeroFullInformation;

  HeroAttributes = Attributes;
  isFullHistory = false;

  private dialog = inject(MatDialog);

  showAbility(): void {
    this.dialog.open(DialogComponent);
  }

  showFullHistory(): void {
    this.isFullHistory = true;
  }

  closeFullHistory(): void {
    this.isFullHistory = false;
  }
}
