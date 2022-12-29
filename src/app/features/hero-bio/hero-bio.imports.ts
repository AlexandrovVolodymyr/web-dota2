import { AsyncPipe, CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { CoreModule } from '../core/core.module';

import { HeroInformationComponent } from './components/hero-information/hero-information.component';
import { HeroStatsComponent } from './components/hero-stats/hero-stats.component';
import { HeroAbilitiesComponent } from './components/hero-abilities/hero-abilities.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { TalentsTreeComponent } from './components/talents-tree/talents-tree.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { HeroAbilityComponent } from './components/hero-ability/hero-ability.component';

export const heroBioImports = [HeroInformationComponent, HeroStatsComponent, HeroSliderComponent, HeroSliderComponent, CommonModule, MatSnackBarModule, MatDialogModule, LoaderComponent];
export const heroImports = [NgSwitch, NgSwitchCase, NgIf, HeroAbilitiesComponent, MatButtonModule, TalentsTreeComponent];
export const heroStatsImports = [CoreModule, NgIf, AsyncPipe, NgForOf];
export const heroAbilitiesImports = [HeroAbilityComponent, NgForOf, MatIconModule, MatButtonModule, NgIf];

