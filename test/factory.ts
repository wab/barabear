import type { TBeer } from '~/types';

export const beerFactory = (id: number): TBeer => ({
  id,
  name: `Beer ${id}`,
  tagline: `Tagline ${id}`,
  description: `Description ${id}`,
  image_url: `https://via.placeholder.com/150?text=${id}`,
  abv: id,
  ibu: id,
  ebc: id,
  food_pairing: [`Food ${id}`],
});
