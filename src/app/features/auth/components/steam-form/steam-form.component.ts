import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface LoginForm {
  name: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'app-steam-form',
  templateUrl: './steam-form.component.html',
  styleUrls: ['./steam-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SteamFormComponent {
  steamForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    name: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  submit(): void {
  }

  reset(): void {
    this.steamForm.reset();
  }

}
