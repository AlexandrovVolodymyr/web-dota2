import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BehaviorSubject, Observable, Subject, switchMap, takeUntil } from 'rxjs';

import { authImports } from '../../auth.imports';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../../../services/user.service';
import { UtilsService } from '../../../../services/utils.service';
import { Login, Registration } from '../../../core/interfaces/auth.interface';
import { User } from '../../../core/interfaces/user.interface';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;
import FirebaseError = firebase.FirebaseError;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: authImports,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('void', style({ transform: 'translateY(-100%)', opacity: '0' })),
      transition(':enter, :leave', [ // * <=> void
        animate('0.6s')
      ]),
    ])
  ]
})
export class AuthComponent implements OnDestroy {
  isShowLoginForm$ = new BehaviorSubject(true);

  user$: Observable<User | null> = this.userService.user$;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private userService: UserService,
    private utilsService: UtilsService
  ) {
  }

  closeForm(): void {
  }

  login({ email, password }: Login): void {
    this.authService.signIn(email, password)
      .pipe(
        switchMap(({ user }: UserCredential) => this.afs.collection('/users').doc(user?.uid).get()),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (doc: DocumentSnapshot<unknown>) => {
          if (doc.exists) {
            localStorage.setItem('user', JSON.stringify(doc.data()));
            this.userService.setUser(doc.data() as User);
            this.matSnackBar.open('You have been authorized!', 'Close', this.utilsService.snackBarOptions());
            this.router.navigate(['/home']);
          }
        },
        error: (err: FirebaseError) => this.matSnackBar.open(err.message, 'Close', this.utilsService.snackBarOptions())
      });

  }

  createUser({ email, password, displayName, photo }: Registration): void {
    this.authService.signUp(email, password)
      .pipe(
        switchMap(({ user }: UserCredential) => this.authService.setUserData(user, displayName, photo)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: () => {
          this.isShowLoginForm$.next(true);
          this.matSnackBar.open('Account created successfully!', 'Close', this.utilsService.snackBarOptions());
        },
        error: (err: FirebaseError) => this.matSnackBar.open(err.message, 'Close', this.utilsService.snackBarOptions())
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
