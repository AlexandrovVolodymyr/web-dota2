import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from "@angular/common";

import { TwitchTopGames } from "../../../core/interfaces/twitch.interface";
import { CoreModule } from "../../../core/core.module";

@Component({
  selector: 'app-twitch-top-games',
  templateUrl: './twitch-top-games.component.html',
  styleUrls: ['./twitch-top-games.component.scss'],
  standalone: true,
  imports: [CoreModule, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitchTopGamesComponent {
  @Output() openGameEvent = new EventEmitter<string>();
  @Input() topGames!: TwitchTopGames[] | null;

  openGame(game: TwitchTopGames): void {
    this.openGameEvent.emit(game.name);
  }
}
