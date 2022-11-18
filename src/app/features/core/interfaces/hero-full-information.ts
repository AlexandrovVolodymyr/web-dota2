export interface HeroFullInformation {
  id: number;
  name: string;
  order_id: number;
  name_loc: string;
  bio_loc: string;
  hype_loc: string;
  npe_desc_loc: string;
  str_base: number;
  str_gain: number;
  agi_base: number;
  agi_gain: number;
  int_base: number;
  int_gain: number;
  primary_attr: number;
  complexity: number;
  attack_capability: number;
  roles: string[]; // TODO: rewrite as type
  icon: string;
  video: string;
  damage_min: number;
  damage_max: number;
  attack_rate: number;
  attack_range: number;
  projectile_speed: number;
  armor: number;
  magic_resistance: number;
  movement_speed: number;
  turn_rate: number;
  sight_range_day: number;
  sight_range_night: number;
  max_health: number;
  health_regen: number;
  max_mana: number;
  mana_regen: number;
  abilities: any[]; // TODO: add type
  talents: any[] // TODO: add type
}
