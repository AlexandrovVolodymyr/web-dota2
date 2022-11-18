import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";

import { TwitchCredentials, TwitchForm } from "../../../core/interfaces/twitch.interface";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-twitch-auth',
  templateUrl: './twitch-auth.component.html',
  styleUrls: ['./twitch-auth.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatRippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitchAuthComponent {
  @Output() submitEvent = new EventEmitter<TwitchCredentials>();

  twitchForm: FormGroup = new FormGroup<TwitchForm>({
    clientId: new FormControl(environment.twitchConfig.clientId, { nonNullable: true, validators: [Validators.required] }),
    secretId: new FormControl(environment.twitchConfig.secretId, { nonNullable: true })
  });

  get clientId(): AbstractControl<string> {
    return this.twitchForm.get('clientId')!;
  }

  get secretId(): AbstractControl<string> {
    return this.twitchForm.get('secretId')!;
  }

  toggleType(password: HTMLInputElement): void {
    if (password.type === 'text') {
      password.type = 'password';
    } else {
      password.type = 'text';
    }
  }

  reset(): void {
    this.twitchForm.reset();
  }

  submit(): void {
    this.submitEvent.emit(this.twitchForm.value);
  }
}
