import type { TBeer } from '~/types';

import { BeerCard } from './BeerCard';

interface BeerListProps {
  items: TBeer[];
  emptyMessage?: string;
}

const BeerList: React.FunctionComponent<BeerListProps> = ({
  items,
  emptyMessage = 'No beers found.',
}) => {
  if (!items.length) {
    return <p>{emptyMessage}</p>;
  }
  return (
    <ul>
      {items.map((beer) => (
        <li key={beer.id}>
          <BeerCard {...beer} />
        </li>
      ))}
    </ul>
  );
};

export { BeerList };
