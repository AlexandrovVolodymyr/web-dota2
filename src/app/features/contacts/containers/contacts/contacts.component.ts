import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { contacts } from '../../contacts.imports';
import { UtilsService } from '../../../../services/utils.service';
import { Contacts } from '../../../core/interfaces/contacts-form';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports: contacts,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  private matSnackBar = inject(MatSnackBar);
  private utilsService = inject(UtilsService);

  send({ firstName, lastName, email, message }: Contacts): void {
    emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, {
      from_name: email,
      to_name: `${firstName} ${lastName}`,
      message
    }, environment.emailjs.publicKey)
      .then(
        (result: EmailJSResponseStatus) => this.matSnackBar.open(`${result.text} Your message has been sent`, 'Close', this.utilsService.snackBarOptions(4000)),
        (error: string) => this.matSnackBar.open(error, 'Close', this.utilsService.snackBarOptions(4000))
      );
  }
}
