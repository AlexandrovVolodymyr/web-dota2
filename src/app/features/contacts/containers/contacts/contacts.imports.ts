import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { FormHeaderModule } from "../../../../shared/form-header/form-header.module";
import { FormActionsModule } from "../../../../shared/form-actions/form-actions.module";

import { ContactsComponent } from "./contacts.component";
import { ContactsFormComponent } from "../../components/contacts-form/contacts-form.component";

export const contacts = [
  ContactsComponent,
  ContactsFormComponent,
  CommonModule,
  FormActionsModule,
  FormHeaderModule,
  ReactiveFormsModule
];
