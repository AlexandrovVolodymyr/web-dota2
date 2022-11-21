import { FormControl } from '@angular/forms';

export interface TwitchForm {
  clientId: FormControl<string>;
  secretId: FormControl<string>;
}

export interface TwitchCredentials {
  clientId: string;
  secretId?: string;
}

export interface TwitchUser {
  broadcaster_type: string;
  created_at: string;
  description: string;
  display_name: string;
  id: string;
  login: string;
  offline_image_url: string;
  profile_image_url: string;
  type: string;
  view_count: number;
}

export interface TwitchApiResponse<T> {
  data: T;
  pagination: { cursor: string };
}

export interface TwitchTopGames {
  id: string;
  name: string;
  box_art_url: string;
}

export interface TwitchStream {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string,
  thumbnail_url: string;
  tag_ids: string[];
  is_mature: boolean;
}

export type CombinedTwitchApiResponse = [TwitchApiResponse<TwitchStream[]>, TwitchApiResponse<TwitchTopGames[]>];
