import * as React from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';

import { Loader } from '~/components/Loader';

import { beersQuery } from '../api/get-beers';

import { BeerList } from './BeerList';
import { EmptyResultMessage } from './EmptyResultMessage';

interface BeerSearchProps {
  value?: string;
  initialData?: TBeer[];
}
const BeerSearchResult: React.FunctionComponent<BeerSearchProps> = ({ value }) => {
  const { data, status, isRefetching } = useSuspenseQuery(beersQuery(value));

  if (status === 'error') return <div>oops</div>;
  if (isRefetching) return <Loader />;

  if (!data || data.length === 0) return <EmptyResultMessage />;

  return <BeerList items={data} />;
};

export { BeerSearchResult };
