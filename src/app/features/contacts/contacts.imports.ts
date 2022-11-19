import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { FormHeaderModule } from "../../shared/form-header/form-header.module";
import { FormActionsModule } from "../../shared/form-actions/form-actions.module";

import { ContactsFormComponent } from "./components/contacts-form/contacts-form.component";

export const contacts = [ContactsFormComponent, CommonModule];
export const contactsFormImports = [ReactiveFormsModule, FormHeaderModule, FormActionsModule];
