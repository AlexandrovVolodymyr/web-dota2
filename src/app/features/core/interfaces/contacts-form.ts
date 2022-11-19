import { FormControl } from '@angular/forms';

export interface ContactsForm {
  firstName: FormControl<string>;
  lastName: FormControl<string | null>;
  email: FormControl<string>;
  message: FormControl<string>;
}

export interface Contacts {
  firstName: string;
  lastName: string | null;
  email: string;
  message: string;
}
