import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";

import { UtilsService } from "../../../services/utils.service";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  http = inject(HttpClient);
  utilsService = inject(UtilsService);

  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>('https://dota2-heroes.p.rapidapi.com/heroes/english', {
      headers: {
        'X-RapidAPI-Key': 'ab87d9893dmshf2bfd6b1d0f0c94p1346f2jsn6ab55e8984c7',
        'X-RapidAPI-Host': 'dota2-heroes.p.rapidapi.com'
      }
    });
  }

  heroRolesList(): Observable<string[]> {
    return of(this.utilsService.heroRoles());
  }
}
