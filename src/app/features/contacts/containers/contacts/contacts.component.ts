import { ChangeDetectionStrategy, Component } from '@angular/core';

import { contacts } from "./contacts.imports";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports: contacts,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
}
