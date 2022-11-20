import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormActionsComponent } from '../../shared/form-actions/form-actions.component';
import { FormHeaderComponent } from '../../shared/form-header/form-header.component';

export const authImports = [CommonModule, LoginFormComponent, RegistrationFormComponent, MatSnackBarModule];
export const loginFormImports = [FormHeaderComponent, ReactiveFormsModule, FormActionsComponent];
export const registrationFormImports = [FormHeaderComponent, ReactiveFormsModule, NgIf, FormActionsComponent];
