import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";

import { map, Observable, Subject, switchMap, takeUntil, tap } from "rxjs";

import { UtilsService } from "../../../../services/utils.service";
import { HeroFullInformation } from "../../../core/interfaces/hero-full-information";
import { Hero } from "../../../core/interfaces/hero.interface";

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroBioComponent implements OnInit, OnDestroy {
  hero$: Observable<HeroFullInformation | undefined> = this.activatedRoute.params
    .pipe(
      map(({ name }: Params) => name),
      switchMap((name: string) => {
        return this.afs.collection('/heroes_biography',).get()
          .pipe(map((snapshot) => {
            return {
              name,
              heroes: snapshot.docs.map(doc => <HeroFullInformation>doc.data())
            }
          }))
      }),
      map(({ name, heroes }) => heroes.find((item: HeroFullInformation) => item.name_loc.toLowerCase() === name)),
      tap(console.log)
    );
  heroes: Hero[] | undefined;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    this.afs.collection('/heroes').get()
      .pipe(
        map((snapshot) => <Hero[]>snapshot.docs.map(doc => doc.data())),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (heroes: Hero[]) => this.heroes = heroes,
        error: (err: HttpErrorResponse) => this.matSnackBar.open(err.message, 'Close',  this.utilsService.snackBarOptions())
      })
  }

  prev(hero: HeroFullInformation): void {
    const prev = this.heroes!.find(item => hero.id === item.id + 1)
    this.router.navigate(['hero', prev!.name_loc.toLowerCase()]);
  }

  next(hero: HeroFullInformation): void {
    const next = this.heroes!.find(item => hero.id === item.id - 1);
    this.router.navigate(['hero', next!.name_loc.toLowerCase()]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
