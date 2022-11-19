import { ChangeDetectionStrategy, Component } from '@angular/core';

import { contacts } from '../../contacts.imports';
import { Contacts } from '../../../core/interfaces/contacts-form';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports: contacts,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  send({ firstName, lastName, message, email }: Contacts): void {
    console.log(firstName, lastName, message, email);
  }
}
