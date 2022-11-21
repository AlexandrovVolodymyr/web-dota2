import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TwitchAuthComponent } from './components/twitch-auth/twitch-auth.component';
import { TwitchUserComponent } from './components/twitch-user/twitch-user.component';
import { TwitchTopGamesComponent } from './components/twitch-top-games/twitch-top-games.component';
import { TwitchStreamsComponent } from './components/twitch-streams/twitch-streams.component';

export const homeImports = [TwitchAuthComponent, TwitchUserComponent, TwitchTopGamesComponent, TwitchStreamsComponent, CommonModule, MatSnackBarModule];
export const twitchUserImports = [ReactiveFormsModule, NgForOf, NgIf];
export const twitchAuthImports = [ReactiveFormsModule, MatIconModule, MatRippleModule];
