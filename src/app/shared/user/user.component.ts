import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';

import { User } from "../../features/core/interfaces/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Output() logoutEvent = new EventEmitter<void>();
  @Output() openProfileEvent = new EventEmitter<void>();
  @Input() user: User | undefined;

  logout(): void {
    this.logoutEvent.emit();
  }

  openProfile(): void {
    this.openProfileEvent.emit();
  }
}
