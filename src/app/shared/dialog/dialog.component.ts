import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Observable, Subject } from 'rxjs';

import { User } from '../../features/core/interfaces/user.interface';

interface DialogData {
  user$: Observable<User>;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

  user: User = JSON.parse(localStorage.getItem('user')!);

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  create() {
    this.user.photo = 'https://picsum.photos/200';
  }
}
