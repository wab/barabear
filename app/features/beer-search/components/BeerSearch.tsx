import * as React from 'react';

import { BeerList, useFetchBeers } from '~/features/beer-list';

interface BeerSearchProps {
  value?: string;
}
const BeerSearch: React.FunctionComponent<BeerSearchProps> = ({ value }) => {
  const { data } = useFetchBeers({
    enabled: Boolean(value),
    queryParams: {
      beer_name: value,
    },
  });

  if (!data) return null;

  return <BeerList items={data} />;
};

export { BeerSearch };
