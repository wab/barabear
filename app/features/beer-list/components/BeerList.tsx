import { styled } from '~/styled-system/jsx';
import type { TBeer } from '~/types';

import { BeerCard } from './BeerCard';

const List = styled('ul', {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: 8,
  },
});

const Item = styled('li', {
  base: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
  },
});

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
    <List>
      {items.map((beer) => (
        <Item key={beer.id}>
          <BeerCard {...beer} />
        </Item>
      ))}
    </List>
  );
};

export { BeerList };
