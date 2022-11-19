import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule, NgForOf, NgIf } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";

import { CoreModule } from "../core/core.module";

import { HomeComponent } from "./containers/home/home.component";
import { TwitchAuthComponent } from "./components/twitch-auth/twitch-auth.component";
import { TwitchUserComponent } from "./components/twitch-user/twitch-user.component";
import { TwitchTopGamesComponent } from "./components/twitch-top-games/twitch-top-games.component";

export const homeImports = [HomeComponent, TwitchAuthComponent, TwitchUserComponent, TwitchTopGamesComponent, CommonModule, MatSnackBarModule, CoreModule];
export const twitchUserImports = [ReactiveFormsModule, NgForOf, NgIf];
export const twitchAuthImports = [ReactiveFormsModule, MatIconModule, MatRippleModule];
