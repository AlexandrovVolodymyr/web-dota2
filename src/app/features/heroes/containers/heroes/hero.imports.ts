import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

import { HeroComponent } from "../../components/hero/hero.component";
import { HeroesFiltersComponent } from "../heroes-filters/heroes-filters.component";
import { FilterAttributesComponent } from "../../components/filter-attributes/filter-attributes.component";
import { FilterComplexityComponent } from "../../components/filter-complexity/filter-complexity.component";
import { SearchComponent } from "../../components/search/search.component";

export const heroes = [HeroComponent, HeroesFiltersComponent, FilterAttributesComponent, FilterComplexityComponent, SearchComponent, CommonModule, MatIconModule];
