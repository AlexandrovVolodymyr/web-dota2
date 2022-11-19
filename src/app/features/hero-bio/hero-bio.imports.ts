import { AsyncPipe, CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";

import { CoreModule } from "../core/core.module";

import { HeroBioComponent } from "./containers/hero-bio/hero-bio.component";
import { HeroInformationComponent } from "./components/hero-information/hero-information.component";
import { HeroStatsComponent } from "./components/hero-stats/hero-stats.component";
import { HeroAbilitiesComponent } from "./components/hero-abilities/hero-abilities.component";
import { HeroSliderComponent } from "./components/hero-slider/hero-slider.component";
import { TalentTreeComponent } from "./components/talent-tree/talent-tree.component";

export const heroBioImports = [HeroBioComponent, HeroInformationComponent, HeroStatsComponent, HeroAbilitiesComponent, HeroSliderComponent, TalentTreeComponent, HeroSliderComponent, CommonModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatIconModule, CoreModule];
export const heroImports = [NgSwitch, NgSwitchCase, NgIf, HeroAbilitiesComponent, MatButtonModule, TalentTreeComponent];
export const heroStatsImports = [CoreModule, NgIf, AsyncPipe, NgForOf];

