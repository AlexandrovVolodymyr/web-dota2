import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";

import { CoreModule } from "../../../core/core.module";

import { HomeComponent } from "./home.component";
import { TwitchAuthComponent } from "../../components/twitch-auth/twitch-auth.component";
import { TwitchUserComponent } from "../../components/twitch-user/twitch-user.component";
import { TwitchTopGamesComponent } from "../../components/twitch-top-games/twitch-top-games.component";

export const homeImports = [HomeComponent, TwitchAuthComponent, TwitchUserComponent, TwitchTopGamesComponent, CommonModule, MatSnackBarModule, CoreModule];
