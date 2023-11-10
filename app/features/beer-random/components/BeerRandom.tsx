import { Link } from '@remix-run/react';
import { useInterval } from 'ahooks';
import { motion } from 'framer-motion';

import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

import { useFetchRadomBeer } from '../api/get-random-beer';

const StyledLink = styled(Link, {
  base: {
    display: 'block',
    py: 8,
  },
});

const BeerRandom: React.FunctionComponent<{
  id: number;
}> = (props) => {
  const { data, refetch } = useFetchRadomBeer(props.id);

  useInterval(() => {
    refetch();
  }, 10000);

  if (!data) return null;

  const beer = data[0];
  return (
    <motion.div
      key={beer.id}
      variants={{
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <StyledLink to={`/beers/${beer.id}`}>
        <p className={css({ textStyle: 'md', textTransform: 'uppercase', fontWeight: 'bold' })}>
          {beer.name}
        </p>
        <p className={css({ textStyle: 'sm', fontFamily: 'Agbalumo', color: 'selectiveYellow' })}>
          {beer.tagline}
        </p>
      </StyledLink>
    </motion.div>
  );
};

export { BeerRandom };
