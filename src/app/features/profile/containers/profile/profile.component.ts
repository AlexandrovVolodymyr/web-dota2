import { ChangeDetectionStrategy, Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

import { Observable } from "rxjs";

import { User } from "../../../core/interfaces/user.interface";

// void - not part of the dom: created -> DOM, DOM -> removed from the DOm
// * (default) -
// custom -

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleBar', [
      state('void', style({ opacity: '0', transform: 'translateX(100%)' })),
      transition('void <=> *', [
        animate('0.3s')
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  @Input() profileContainer!: ViewContainerRef;
  @Input() user$!: Observable<User | null>;

  closeProfile(): void {
    this.profileContainer.clear();
  }

  ngOnInit(): void {
  }

}
