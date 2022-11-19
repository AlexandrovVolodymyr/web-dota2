import { FormControl } from '@angular/forms';

export interface Login {
  email: string;
  password: string;
}

export interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface Registration {
  displayName: string;
  photo: string;
  email: string;
  password: string;
}

export interface RegistrationForm {
  displayName: FormControl<string>;
  photo: FormControl<string | null>;
  email: FormControl<string>;
  password: FormControl<string>;
}
