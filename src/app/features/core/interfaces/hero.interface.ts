import { Attributes } from '../enums/attributes';

export interface Hero {
  attribute_img: string;
  complexity: number;
  id: number;
  image: string;
  name: string;
  name_english_loc: string;
  name_loc: string;
  primary_attr: number;
}

export interface HeroAttributes {
  name: string;
  type: Attributes;
  status: boolean;
}
