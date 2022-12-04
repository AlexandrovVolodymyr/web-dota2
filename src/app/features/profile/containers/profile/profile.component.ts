import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

import { profileImports } from '../../profile.imports';
import { UserService } from '../../../../services/user.service';
import { LayoutService } from '../../../../services/layout.service';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { User } from '../../../core/interfaces/user.interface';

// void - not part of the dom: created -> DOM, DOM -> removed from the DOM
// * (default) -
// custom -

export type ProfileMode = 'on' | 'off';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: profileImports,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @ViewChild('displayNameRef', { read: ElementRef }) displayNameRef!: ElementRef;

  user$: Observable<User | null> = inject(UserService).user$;
  mode: ProfileMode = 'off';
  loading = false;

  private modalRef = inject(MatDialog);
  private userService = inject(UserService);
  private layoutService = inject(LayoutService);
  private afs = inject(AngularFirestore);

  closeProfile(): void {
    this.layoutService.setProfileMode('off');
  }

  openModal(): void {
    this.modalRef.open(DialogComponent);
  }

  changeMode(mode: ProfileMode = 'off') {
    this.mode = mode;
  }

  updateName(displayName: string): void {
    if (displayName) {
      this.loading = true;
      this.afs.collection('users').doc(this.userService.getUser()?.uid).set({
        ...this.userService.getUser(),
        displayName: displayName
      }).then(_ => {
        this.userService.setUser({ ...this.userService.getUser()!, displayName });
        localStorage.setItem('user', JSON.stringify(this.userService.getUser()!));
        this.changeMode('off');
        this.loading = false;
      }).catch(er => alert(er));
    } else {
      this.changeMode('off');
    }
  }
}
