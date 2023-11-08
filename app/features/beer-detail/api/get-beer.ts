import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { ExtractFnReturnType, QueryConfig } from '~/lib/react-query';
import type { TBeer } from '~/types';

const getBeer = async (beerId: string): Promise<TBeer[]> => {
  const result = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`);

  return result.data;
};

type QueryFnType = typeof getBeer;

const useFetchBeer = (beerId: string, config?: QueryConfig<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['beers', beerId],
    queryFn: () => getBeer(beerId),
  });
};

export { getBeer, useFetchBeer };
