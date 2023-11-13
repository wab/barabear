import * as React from 'react';

import { Loader } from '~/components/Loader';

import { useFetchBeers } from '../api/get-beers';

import { BeerList } from './BeerList';
import { EmptyResultMessage } from './EmptyResultMessage';

interface BeerSearchProps {
  value?: string;
}
const BeerSearchResult: React.FunctionComponent<BeerSearchProps> = ({ value }) => {
  const { data, status, isRefetching } = useFetchBeers({
    enabled: Boolean(value),
    queryParams: {
      beer_name: value,
    },
  });

  if (status === 'error') return <div>oops</div>;
  if (isRefetching) return <Loader />;

  if (!data || data.length === 0) return <EmptyResultMessage />;

  return <BeerList items={data} />;
};

export { BeerSearchResult };
