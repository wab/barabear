import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { ExtractFnReturnType, QueryConfig } from '~/lib/react-query';
import type { TBeer } from '~/types';
import { BEER_API_URL } from '~/utils';

const getBeersQueryKey = (params?: TGetBeersParams) => ['beers', params].filter(Boolean);

type TGetBeersParams = {
  page?: number;
  per_page?: number;
  beer_name?: string;
};

const getBeers = async (params?: TGetBeersParams): Promise<TBeer[]> => {
  const result = await axios.get(`${BEER_API_URL}/beers`, {
    params: {
      page: params?.page ?? 1,
      per_page: params?.per_page ?? 10,
      beer_name: params?.beer_name ?? undefined,
    },
  });

  return result.data;
};

type QueryFnType = typeof getBeers;

type TUseFetchBeers = QueryConfig<QueryFnType> & {
  queryParams?: TGetBeersParams;
};

const useFetchBeers = ({ queryParams, ...config }: TUseFetchBeers) => {
  const params = {
    page: queryParams?.page ?? 1,
    per_page: queryParams?.per_page ?? 10,
    beer_name: queryParams?.beer_name ?? undefined,
  };

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: getBeersQueryKey(params),
    queryFn: () => getBeers(params),
    ...config,
  });
};

export { getBeers, useFetchBeers, getBeersQueryKey };
