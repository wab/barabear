import { Link } from '@remix-run/react';

import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';
import { button } from '~/styled-system/recipes';
import type { TBeer } from '~/types';
import { BEER_IMAGE_PLACEHOLDER } from '~/utils';

const Wrapper = styled('article', {
  base: {
    border: '6px solid',
    borderColor: 'white',
    borderRadius: 'lg',
    backgroundColor: 'gray.50',
    boxShadow: 'sm',
    display: 'flex',
    flexDirection: 'column',
    height: 340,
  },
});

const BeerCard: React.FunctionComponent<TBeer> = (props) => {
  return (
    <Wrapper>
      <div
        className={css({
          p: 4,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        })}
      >
        <h2
          className={css({
            fontSize: 'md',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          })}
        >
          {props.name}
        </h2>
        <img src={props.image_url ?? BEER_IMAGE_PLACEHOLDER} alt={props.tagline} width={28} />
        <p
          className={css({
            textStyle: 'sm',
            fontFamily: 'Agbalumo',
            color: 'selectiveYellow',
            textAlign: 'center',
          })}
        >
          {props.tagline}
        </p>
      </div>
      <Link to={`/beers/${props.id}`} className={button()}>
        See detail
      </Link>
    </Wrapper>
  );
};

export { BeerCard };
