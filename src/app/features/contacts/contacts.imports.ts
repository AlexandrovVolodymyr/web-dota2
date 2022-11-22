import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { FormActionsComponent } from '../../shared/form-actions/form-actions.component';
import { FormHeaderComponent } from '../../shared/form-header/form-header.component';

export const contacts = [ContactsFormComponent, CommonModule, MatIconModule];
export const contactsFormImports = [FormHeaderComponent, ReactiveFormsModule, FormActionsComponent, MatSnackBarModule];
