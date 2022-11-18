import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";

import { TwitchUser } from "../../../core/interfaces/twitch.interface";

@Component({
  selector: 'app-twitch-user',
  templateUrl: './twitch-user.component.html',
  styleUrls: ['./twitch-user.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitchUserComponent implements OnInit {
  @Output() updateEvent = new EventEmitter<string>();
  @Input() twitchUser: TwitchUser | undefined;

  twitchUserForm!: FormGroup;

  ngOnInit(): void {
    this.twitchUserForm = new FormGroup({
      login: new FormControl({ value: this.twitchUser?.login, disabled: true }),
      display_name: new FormControl(this.twitchUser?.display_name),
      description: new FormControl(this.twitchUser?.description, [Validators.maxLength(300)])
    });
  }

  update(): void {
    this.updateEvent.emit(this.twitchUserForm.value.description);
  }
}
