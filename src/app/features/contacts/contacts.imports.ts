import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { FormHeaderModule } from "../../shared/form-header/form-header.module";

import { ContactsFormComponent } from "./components/contacts-form/contacts-form.component";
import { FormActionsComponent } from "../../shared/form-actions/form-actions.component";

export const contacts = [ContactsFormComponent, CommonModule];
export const contactsFormImports = [ReactiveFormsModule, FormHeaderModule, FormActionsComponent];
