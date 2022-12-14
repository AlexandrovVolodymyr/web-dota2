import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

import { map, Observable, Subject, switchMap, takeUntil } from 'rxjs';

import { heroBioImports } from '../../hero-bio.imports';
import { UtilsService } from '../../../../services/utils.service';
import { HeroFullInformation } from '../../../core/interfaces/hero-full-information';
import { Hero } from '../../../core/interfaces/hero.interface';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.scss'],
  standalone: true,
  imports: heroBioImports,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroBioComponent implements OnInit, OnDestroy {
  heroes: Hero[] | undefined;
  private activatedRoute = inject(ActivatedRoute);
  private afs = inject(AngularFirestore);

  hero$: Observable<HeroFullInformation | undefined> = this.activatedRoute.params
    .pipe(
      map(({ name }: Params) => name),
      switchMap((name: string) => {
        return this.afs.collection('/heroes_biography',).get()
          .pipe(map((snapshot) => {
            return { name, heroes: snapshot.docs.map(doc => <HeroFullInformation>doc.data()) };
          }));
      }),
      map(({ name, heroes }) => heroes.find((item: HeroFullInformation) => item.name_loc.toLowerCase() === name)),
    );
  loading = false;

  private router = inject(Router);
  private matSnackBar = inject(MatSnackBar);
  private utilsService = inject(UtilsService);
  private cdr = inject(ChangeDetectorRef);
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.afs.collection('/heroes').get()
      .pipe(
        map((snapshot) => <Hero[]>snapshot.docs.map(doc => doc.data())),
        map((heroes: Hero[]) => heroes.sort((a, b) => a.id - b.id)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (heroes: Hero[]) => this.heroes = heroes,
        error: (err: HttpErrorResponse) => this.matSnackBar.open(err.message, 'Close', this.utilsService.snackBarOptions())
      });
  }

  prev(hero: HeroFullInformation): void {
    this.findClosestHero(hero, 'prev');
  }

  next(hero: HeroFullInformation): void {
    this.findClosestHero(hero, 'next');
  }

  private findClosestHero(hero: HeroFullInformation, turn: 'prev' | 'next'): void {
    this.loading = true;
    const heroesID = this.heroes!.map((hero: Hero) => hero.id).filter((id: number) => id !== hero.id);
    const closestHeroId = turn === 'prev' ? Math.max(...heroesID.filter((num: number) => num <= hero.id)) : Math.min(...heroesID.filter((num: number) => num >= hero.id));
    const closestHero = this.heroes![closestHeroId - 1];

    this.router.navigate(['hero', closestHero.name_loc.toLowerCase()]).then(() => this.loading = false);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
