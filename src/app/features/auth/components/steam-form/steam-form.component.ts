import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface LoginForm {
  name: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'app-steam-form',
  templateUrl: './steam-form.component.html',
  styleUrls: ['./steam-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SteamFormComponent implements OnInit {
  steamForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    name: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  ngOnInit(): void {
  }

  submit(): void {
  }

  reset(): void {
    this.steamForm.reset();
  }

}
