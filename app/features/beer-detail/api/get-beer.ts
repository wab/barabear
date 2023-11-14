import axios from 'axios';

import { BEER_API_URL } from '~/utils';

const getBeer = async (beerId?: string): Promise<TBeer[]> => {
  const result = await axios.get(`${BEER_API_URL}/beers/${beerId}`);

  return result.data;
};

const beerDetailQuery = (beerId?: string) => ({
  queryKey: ['beers', 'detail', beerId],
  queryFn: async () => getBeer(beerId),
});

export { beerDetailQuery };
