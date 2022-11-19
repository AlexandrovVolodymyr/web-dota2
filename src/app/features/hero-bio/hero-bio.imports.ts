import { AsyncPipe, CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";

import { CoreModule } from "../core/core.module";

import { HeroInformationComponent } from "./components/hero-information/hero-information.component";
import { HeroStatsComponent } from "./components/hero-stats/hero-stats.component";
import { HeroAbilitiesComponent } from "./components/hero-abilities/hero-abilities.component";
import { HeroSliderComponent } from "./components/hero-slider/hero-slider.component";
import { TalentTreeComponent } from "./components/talent-tree/talent-tree.component";

export const heroBioImports = [HeroInformationComponent, HeroStatsComponent, HeroSliderComponent, HeroSliderComponent, CommonModule, MatSnackBarModule, MatDialogModule];
export const heroImports = [NgSwitch, NgSwitchCase, NgIf, HeroAbilitiesComponent, MatButtonModule, TalentTreeComponent];
export const heroStatsImports = [CoreModule, NgIf, AsyncPipe, NgForOf];

