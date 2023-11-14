import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { ExtractFnReturnType, QueryConfig } from '~/lib/react-query';
import { BEER_API_URL } from '~/utils';

const getRandomBeer = async (): Promise<TBeer[]> => {
  const result = await axios.get(`${BEER_API_URL}/beers/random`);

  return result.data;
};

type QueryFnType = typeof getRandomBeer;

const useFetchRadomBeer = (key: number, config?: QueryConfig<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['beer', 'random', key],
    queryFn: () => getRandomBeer(),
  });
};

export { useFetchRadomBeer };
