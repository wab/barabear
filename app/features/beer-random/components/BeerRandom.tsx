import { Link } from '@remix-run/react';
import { useInterval } from 'ahooks';

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
    <StyledLink to={`/beers/${beer.id}`}>
      <p className={css({ textStyle: 'md', textTransform: 'uppercase', fontWeight: 'bold' })}>
        {beer.name}
      </p>
      <p className={css({ textStyle: 'sm', fontFamily: 'Agbalumo', color: 'selectiveYellow' })}>
        {beer.tagline}
      </p>
    </StyledLink>
  );
};

export { BeerRandom };
