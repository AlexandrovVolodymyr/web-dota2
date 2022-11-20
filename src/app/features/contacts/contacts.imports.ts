import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { FormActionsComponent } from '../../shared/form-actions/form-actions.component';
import { FormHeaderComponent } from '../../shared/form-header/form-header.component';

export const contacts = [ContactsFormComponent, CommonModule];
export const contactsFormImports = [FormHeaderComponent, ReactiveFormsModule, FormActionsComponent];
