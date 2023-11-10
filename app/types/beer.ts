type TBeer = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  ebc: number;
  food_pairing: string[];
  brewers_tips: string;
};

export type { TBeer };
