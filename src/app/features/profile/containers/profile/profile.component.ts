import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { profileImports } from '../../profile.imports';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../core/interfaces/user.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleBar', [
      state('void', style({ opacity: '0', transform: 'translateX(100%)' })),
      transition(':enter, :leave', [
        animate('0.3s')
      ])
    ])
  ]
})
export class ProfileComponent {
  @ViewChild('displayNameRef', { read: ElementRef }) displayNameRef!: ElementRef;
  @Input() profileContainer!: ViewContainerRef;

  user$: Observable<User | null> = inject(UserService).user$;
  mode: ProfileMode = 'off';
  loading = false;

  private modalRef = inject(MatDialog);
  private userService = inject(UserService);

  // private afs = inject(AngularFirestore);

  constructor(private afs: AngularFirestore) {
  }

  closeProfile(): void {
    this.profileContainer.clear();
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
