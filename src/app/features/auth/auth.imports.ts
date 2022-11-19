import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormHeaderModule } from '../../shared/form-header/form-header.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormActionsComponent } from '../../shared/form-actions/form-actions.component';

export const authImports = [CommonModule, LoginFormComponent, RegistrationFormComponent, MatSnackBarModule];
export const loginFormImports = [FormHeaderModule, ReactiveFormsModule, FormActionsComponent];
export const registrationFormImports = [FormHeaderModule, ReactiveFormsModule, NgIf, FormActionsComponent];
