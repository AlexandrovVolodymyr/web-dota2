import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HeroesFiltersComponent } from './containers/heroes-filters/heroes-filters.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

export const heroes = [HeroComponent, HeroesFiltersComponent, CommonModule, MatSnackBarModule, LoaderComponent];
