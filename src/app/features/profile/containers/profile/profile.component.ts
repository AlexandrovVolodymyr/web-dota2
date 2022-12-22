import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

import { profileImports } from '../../profile.imports';
import { UserService } from '../../../../services/user.service';
import { LayoutService } from '../../../../services/layout.service';
import { UtilsService } from '../../../../services/utils.service';
import { User } from '../../../core/interfaces/user.interface';

type ProfileMode = 'on' | 'off';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [...profileImports],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @ViewChild('displayNameRef', { read: ElementRef }) displayNameRef!: ElementRef;

  private userService = inject(UserService);
  user$: Observable<User | null> = inject(UserService).user$;
  mode: ProfileMode = 'off';
  loading = false;

  private layoutService = inject(LayoutService);
  private afs = inject(AngularFirestore);
  private cdr = inject(ChangeDetectorRef);
  private matSnackBar = inject(MatSnackBar);
  private utilsService = inject(UtilsService);

  closeProfile(): void {
    this.layoutService.setProfileMode('off');
  }

  changeMode(mode: ProfileMode = 'off'): void {
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
        this.matSnackBar.open('Your name has been updated', 'Close', this.utilsService.snackBarOptions());
      }).catch(er => {
        this.matSnackBar.open(er, 'Close', this.utilsService.snackBarOptions());
        this.loading = false;
      });
    } else {
      this.changeMode('off');
    }
  }

  updatePhoto({ target }: Event): void {
    this.loading = true;
    const reader = new FileReader();
    reader.readAsBinaryString((target as HTMLInputElement).files![0]);
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const photo = 'data:image/jpg;base64, ' + btoa(event!.target!.result!.toString());
      this.afs.collection('users').doc(this.userService.getUser()?.uid).set({
        ...this.userService.getUser(),
        photo: photo
      }).then(_ => {
        this.userService.setUser({ ...this.userService.getUser()!, photo });
        localStorage.setItem('user', JSON.stringify(this.userService.getUser()!));
        this.loading = false;
        this.matSnackBar.open('Your name has been updated', 'Close', this.utilsService.snackBarOptions());
        this.cdr.detectChanges();
      }).catch(er => {
        this.loading = false;
        this.matSnackBar.open(er, 'Close', this.utilsService.snackBarOptions());
        this.cdr.detectChanges();
      });
    };
    reader.onerror = (error: ProgressEvent<FileReader>) => {
      this.matSnackBar.open(error.toString(), 'Close', this.utilsService.snackBarOptions());
      this.loading = false;
      this.cdr.detectChanges();
    };
  }
}
