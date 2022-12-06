import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { twitchAuthImports } from '../../home.imports';
import { TwitchCredentials, TwitchForm } from '../../../core/interfaces/twitch.interface';
import { UtilsService } from '../../../../services/utils.service';
import { SVG } from '../../../core/constant/svgs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-twitch-auth',
  templateUrl: './twitch-auth.component.html',
  styleUrls: ['./twitch-auth.component.scss'],
  standalone: true,
  imports: twitchAuthImports,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitchAuthComponent {
  @Output() submitEvent = new EventEmitter<TwitchCredentials>();

  private utilsService = inject(UtilsService);
  twitchLogo = this.utilsService.getSVG(SVG.twitchLogo);

  twitchForm: FormGroup = new FormGroup<TwitchForm>({
    clientId: new FormControl(environment.twitchConfig.clientId, {
      nonNullable: true,
      validators: [Validators.required]
    }),
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
