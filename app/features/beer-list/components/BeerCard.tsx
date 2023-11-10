import { NavLink } from '@remix-run/react';

import { Loader } from '~/components';
import { css, cx } from '~/styled-system/css';
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
      <NavLink
        to={`/beers/${props.id}`}
        className={({ isPending }) =>
          cx(
            button(),
            css({
              opacity: isPending ? 0.5 : 1,
              cursor: isPending ? 'not-allowed' : 'pointer',
              '& .loader': {
                visibility: isPending ? 'visible' : 'hidden',
                color: 'white',
              },
            })
          )
        }
      >
        See detail
        <Loader
          className={cx(
            'loader',
            css({
              width: '1em',
              height: '1em',
              marginLeft: 'auto',
            })
          )}
        />
      </NavLink>
    </Wrapper>
  );
};

export { BeerCard };
