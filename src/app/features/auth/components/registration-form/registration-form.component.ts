import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { registrationFormImports } from "../../auth.imports";
import { FormActions } from "../../../core/interfaces/form-actions.interface";
import { Registration, RegistrationForm } from "../../../core/interfaces/auth.interface";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  standalone: true,
  imports: registrationFormImports,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent {
  @Output() switchEvent = new EventEmitter<void>();
  @Output() closeRegistrationEvent = new EventEmitter<void>();
  @Output() registrationEvent = new EventEmitter<Registration>();
  registrationForm: FormGroup = new FormGroup<RegistrationForm>({
    displayName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    photo: new FormControl(''),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
  });
  properties: FormActions = {
    resetBtnText: 'Reset',
    actionBtnText: 'Create account',
    color: 'primary',
    switcherText: 'Already have account?',
    switcherLink: 'Login',
    switcher: true
  };
  avatar: string | undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    private matSnackBar: MatSnackBar
  ) {
  }

  get email(): AbstractControl<string> {
    return this.registrationForm.get('email')!;
  }

  get password(): AbstractControl<string> {
    return this.registrationForm.get('password')!;
  }

  get displayName(): AbstractControl<string> {
    return this.registrationForm.get('displayName')!;
  }

  get photo(): AbstractControl<string> {
    return this.registrationForm.get('photo')!;
  }

  close(): void {
    this.closeRegistrationEvent.emit();
  }

  registration(): void {
    const payload = { ...this.registrationForm.value, photo: this.avatar };
    this.registrationEvent.emit(payload);
  }

  reset(): void {
    this.registrationForm.reset();
    this.avatar = '';
  }

  switchForm(): void {
    this.switchEvent.emit();
  }

  onChange({ target }: Event): void {
    const reader = new FileReader();
    reader.readAsBinaryString((target as HTMLInputElement).files![0]);
    reader.onload = (event: ProgressEvent<FileReader>) => {
      this.avatar = 'data:image/jpg;base64, ' + btoa(event!.target!.result!.toString());
      this.cdr.detectChanges();
    }
    reader.onerror = (error: ProgressEvent<FileReader>) => {
      this.matSnackBar.open(error.toString());
    }
  }

  resetAvatar(): void {
    this.registrationForm.get('photo')?.reset();
    this.avatar = '';
  }
}
