import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { TwitchApiResponse, TwitchTopGames, TwitchUser } from '../features/core/interfaces/twitch.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  twitchAccessToken$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  twitchUser$: BehaviorSubject<TwitchUser | null> = new BehaviorSubject<TwitchUser | null>(null);
  twitchUserData$: Observable<TwitchUser | null> = this.twitchUser$.asObservable();

  constructor(private http: HttpClient) {
  }

  isValidToken(twitchToken: string) {
    return this.http.get(`${environment.twitchConfig.url}/validate`, {
      headers: {
        'Authorization': 'OAuth ' + twitchToken
      }
    });
  }

  getTopGames({
                client_id,
                access_token
              }: { client_id: string, access_token: string }): Observable<TwitchApiResponse<TwitchTopGames[]>> {
    return this.http.get<TwitchApiResponse<TwitchTopGames[]>>(`${environment.twitchConfig.helix}/games/top?&first=15`, {
      'headers': {
        'Client-ID': client_id,
        'Authorization': 'Bearer ' + access_token
      }
    });
  }

  getUser({ client_id, access_token }: { client_id: string, access_token: string }): Observable<TwitchUser> {
    return this.http.get(`${environment.twitchConfig.helix}/users`, {
      'headers': {
        'Client-ID': client_id,
        'Authorization': 'Bearer ' + access_token
      }
    }).pipe(map((user: any) => user.data[0]));
  }

  updateUser(description: string, client_id: string, access_token: string): Observable<TwitchUser> {
    return this.http.put(`${environment.twitchConfig.helix}/users`, { description }, {
      'headers': {
        'Client-ID': client_id,
        'Authorization': 'Bearer ' + access_token
      }
    }).pipe(map((user: any) => user.data[0]));
  }
}
