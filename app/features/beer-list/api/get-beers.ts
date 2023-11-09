import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { ExtractFnReturnType, QueryConfig } from '~/lib/react-query';
import type { TBeer } from '~/types';

type TGetBeersParams = {
  page: number;
  per_page: number;
};

const initialParams: TGetBeersParams = {
  page: 1,
  per_page: 14,
};

const getBeers = async (params: TGetBeersParams = initialParams): Promise<TBeer[]> => {
  const result = await axios.get(`https://api.punkapi.com/v2/beers`, {
    params,
  });

  return result.data;
};

type QueryFnType = typeof getBeers;

interface TUseFetchBeers extends QueryConfig<QueryFnType> {
  queryParams?: TGetBeersParams;
}

const useFetchBeers = ({ queryParams, ...config }: TUseFetchBeers) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['beers', queryParams],
    queryFn: () => getBeers(queryParams),
  });
};

export { getBeers, useFetchBeers };
