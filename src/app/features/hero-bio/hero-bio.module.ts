import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";

import { HeroBioRoutingModule } from './hero-bio-routing.module';
import { CoreModule } from "../core/core.module";

import { HeroBioComponent } from './containers/hero-bio/hero-bio.component';
import { HeroInformationComponent } from './components/hero-information/hero-information.component';
import { HeroStatsComponent } from './components/hero-stats/hero-stats.component';
import { HeroAbilitiesComponent } from './components/hero-abilities/hero-abilities.component';
import { TalentTreeComponent } from './components/talent-tree/talent-tree.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { HeroesService } from "../heroes/services/heroes.service";

@NgModule({
  declarations: [
    HeroBioComponent,
    HeroInformationComponent,
    HeroStatsComponent,
    HeroAbilitiesComponent,
    TalentTreeComponent,
    HeroSliderComponent
  ],
  imports: [
    CommonModule,
    HeroBioRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    CoreModule
  ],
  providers: [HeroesService]
})
export class HeroBioModule {
}
