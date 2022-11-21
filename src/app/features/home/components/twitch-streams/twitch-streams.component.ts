import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

import { CoreModule } from '../../../core/core.module';
import { TwitchStream } from '../../../core/interfaces/twitch.interface';

@Component({
  selector: 'app-twitch-streams',
  templateUrl: './twitch-streams.component.html',
  styleUrls: ['./twitch-streams.component.scss'],
  standalone: true,
  imports: [NgForOf, CoreModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitchStreamsComponent {
  @Input() streams!: TwitchStream[] | null;
}
