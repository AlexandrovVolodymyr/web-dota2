import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { dialogImports } from '../../features/profile/profile.imports';
import { User } from '../../features/core/interfaces/user.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [...dialogImports],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  user: User = JSON.parse(localStorage.getItem('user')!);

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }
}
