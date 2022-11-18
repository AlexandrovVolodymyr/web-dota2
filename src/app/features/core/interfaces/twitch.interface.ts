import { FormControl } from "@angular/forms";

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
