import axios from 'axios';

import { BEER_API_URL } from '~/utils';

const getBeersQueryKey = (search?: string) => ['beers', search].filter(Boolean);

const getBeers = async (beer_name?: string): Promise<TBeer[]> => {
  const result = await axios.get(`${BEER_API_URL}/beers`, {
    params: {
      page: 1,
      per_page: 10,
      beer_name,
    },
  });

  return result.data;
};

const beersQuery = (beer_name?: string) => ({
  queryKey: getBeersQueryKey(beer_name),
  queryFn: async () => getBeers(beer_name),
  throwOnError: true,
});

export { beersQuery };
