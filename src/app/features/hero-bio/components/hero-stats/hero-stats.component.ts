import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { heroStatsImports } from '../../hero-bio.imports';
import { HeroesService } from '../../../heroes/services/heroes.service';
import { HeroFullInformation } from '../../../core/interfaces/hero-full-information';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss'],
  standalone: true,
  imports: [...heroStatsImports],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroStatsComponent {
  @Input() hero!: HeroFullInformation;

  roles$: Observable<string[]> = inject(HeroesService).heroRolesList();
}
