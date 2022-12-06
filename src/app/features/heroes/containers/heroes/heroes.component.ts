import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BehaviorSubject, map, Observable, Subject, takeUntil } from 'rxjs';

import { heroes } from '../../heroes.imports';
import { HeroesService } from '../../services/heroes.service';
import { UtilsService } from '../../../../services/utils.service';
import { Hero, HeroAttributes } from '../../../core/interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true,
  imports: heroes,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('heroesList', [
      state('void', style({ transform: 'translateY(100%)', opacity: '0' })),
      transition('void => *', [animate('2s')])
    ])
  ]
})
export class HeroesComponent implements OnInit, OnDestroy {
  // this.heroesService.getHeroes().pipe(tap(h => console.log(h)));
  heroes$ = new BehaviorSubject<Hero[]>([]);
  private searchValue$ = new BehaviorSubject<string>('');
  searchValueTpl$: Observable<string> = this.searchValue$.asObservable();
  heroAttributes$ = new BehaviorSubject<HeroAttributes[]>([]);

  private matSnackBar = inject(MatSnackBar);
  private utilsService = inject(UtilsService);
  private unsubscribe$ = new Subject<void>();

  constructor(
    private heroesService: HeroesService,
    private afs: AngularFirestore,
    private router: Router
  ) {
  }

  get filteringHeroes$(): Observable<Hero[]> {
    return this.heroes$
      .pipe(
        map((heroes: Hero[]) => heroes.filter(hero => hero.name_loc.toLowerCase().includes(this.searchValue$.getValue()))),
        map((heroes: Hero[]) => heroes.filter(hero => {
          const attributes = this.heroAttributes$.getValue().filter(attr => attr.status);
          if (attributes.length) {
            return attributes.some(attr => attr.type === hero.primary_attr);
          }
          return hero;
        }))
      );
  }

  ngOnInit(): void {
    this.afs.collection('/heroes').get()
      // valueChanges().pipe(tap(console.log));
      .pipe(map((snapshot) => <Hero[]>snapshot.docs.map(doc => doc.data())), takeUntil(this.unsubscribe$))
      .subscribe({
        next: (heroes: Hero[]) => this.heroes$.next(heroes),
        error: (err: HttpErrorResponse) => this.matSnackBar.open(err.message, 'Close', this.utilsService.snackBarOptions())
      });
  }

  onSearch(value: string): void {
    this.searchValue$.next(value);
  }

  setAttributes(attributes: HeroAttributes[]): void {
    this.heroAttributes$.next(attributes);
  }

  openHero({ name_loc }: Hero): void {
    this.router.navigate(['/hero', name_loc.toLowerCase()]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
