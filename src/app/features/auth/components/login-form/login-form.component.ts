import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

import { Login, LoginForm } from "../../../core/interfaces/auth.interface";
import { FormActions } from "../../../core/interfaces/form-actions.interface";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Output() switchEvent = new EventEmitter<void>();
  @Output() closeLoginForm = new EventEmitter<void>();
  @Output() loginEvent = new EventEmitter<Login>();

  loginForm: FormGroup = new FormGroup<LoginForm>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
  });

  properties: FormActions = {
    resetBtnText: 'Reset',
    actionBtnText: 'Login',
    color: 'primary',
    switcherText: 'Don’t have an account?',
    switcherLink: 'Register',
    switcher: true
  };

  get email(): AbstractControl<string> {
    return this.loginForm.get('email')!;
  }

  get password(): AbstractControl<string> {
    return this.loginForm.get('password')!;
  }

  close(): void {
    this.closeLoginForm.emit();
  }

  login(): void {
    this.loginEvent.emit(this.loginForm.value);
  }

  reset(): void {
    this.loginForm.reset();
  }

  switchForm(): void {
    this.switchEvent.emit();
  }
}
