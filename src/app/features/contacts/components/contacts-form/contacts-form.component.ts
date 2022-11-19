import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

import { contactsFormImports } from "../../contacts.imports";
import { FormActions } from "../../../core/interfaces/form-actions.interface";
import { ContactsForm } from "../../../core/interfaces/contacts-form";

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss'],
  standalone: true,
  imports: contactsFormImports,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsFormComponent {
  contactsForm: FormGroup = new FormGroup<ContactsForm>({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(30)] }),
    lastName: new FormControl('', [Validators.maxLength(30)]),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(300)] })
  });

  properties: FormActions = {
    resetBtnText: 'Reset',
    actionBtnText: 'Send Email',
    color: 'primary',
    switcher: false
  };

  get firstName(): AbstractControl<string> {
    return this.contactsForm.get('firstName')!;
  }

  get lastName(): AbstractControl<string> {
    return this.contactsForm.get('lastName')!;
  }

  get email(): AbstractControl<string> {
    return this.contactsForm.get('email')!;
  }

  get message(): AbstractControl<string> {
    return this.contactsForm.get('message')!;
  }

  reset(): void {
    this.contactsForm.reset();
  }

  send(): void {
    this.contactsForm.markAllAsTouched();
  }
}
