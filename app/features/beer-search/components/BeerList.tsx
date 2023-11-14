import { AnimatePresence, motion } from 'framer-motion';

import { styled } from '~/styled-system/jsx';

import { BeerCard } from './BeerCard';

const List = styled('ul', {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: 8,
  },
});

const Item = styled(motion.li, {
  base: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
  },
});

interface BeerListProps {
  items: TBeer[];
  emptyMessage?: string;
}

const BeerList: React.FunctionComponent<BeerListProps> = ({ items }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <List>
        {items.map((beer) => (
          <Item
            key={beer.id}
            initial={{ y: '10%', opacity: 0, rotate: 3 }}
            animate={{ y: '0', opacity: 1, rotate: 0 }}
            exit={{ y: '-20%', opacity: 0 }}
          >
            <BeerCard {...beer} />
          </Item>
        ))}
      </List>
    </AnimatePresence>
  );
};

export { BeerList };
