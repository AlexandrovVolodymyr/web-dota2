import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { HeroesFiltersComponent } from "./containers/heroes-filters/heroes-filters.component";

export const heroes = [HeroComponent, HeroesFiltersComponent, CommonModule];
