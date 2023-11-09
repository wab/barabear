import * as React from 'react';

import { useDebounce } from 'ahooks';

import { Input } from '~/components';
import { BeerList, useFetchBeers } from '~/features/beer-list';
import type { TBeer } from '~/types';

interface BeerSearchProps {
  placeholderData?: TBeer[];
}
const BeerSearch: React.FunctionComponent<BeerSearchProps> = ({ placeholderData }) => {
  const [search, setSearch] = React.useState('');
  const debouncedValue = useDebounce(search, { wait: 300 });

  const { data, isFetching } = useFetchBeers({
    placeholderData,
    enabled: Boolean(debouncedValue),
    queryParams: {
      beer_name: debouncedValue !== '' ? debouncedValue : undefined,
    },
  });

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearch(term);
  };

  if (!data) return null;

  return (
    <>
      <Input
        type="search"
        value={search}
        onChange={onSearchChange}
        placeholder="Search for a beer"
      />
      {isFetching && <p>fetching...</p>}

      <BeerList items={data} />
    </>
  );
};

export { BeerSearch };
