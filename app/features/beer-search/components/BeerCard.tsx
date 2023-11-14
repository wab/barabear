import { NavLink } from '@remix-run/react';

import { Loader } from '~/components/Loader';
import { css, cx } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';
import { button } from '~/styled-system/recipes';
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
    minHeight: 180,
  },
});
const Picture = styled('picture', {
  base: {
    width: '50%',
    height: 240,
    overflow: 'hidden',
    py: 4,
    display: 'none',

    md: {
      display: 'block',
    },

    '& img': {
      aspectRatio: '11 / 20',
      width: '100%',
      objectFit: 'cover',
    },
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
        <Picture>
          <img src={props.image_url ?? BEER_IMAGE_PLACEHOLDER} alt={props.tagline} width={200} />
        </Picture>
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
              color: 'prussianBlue',
            })
          )}
        />
      </NavLink>
    </Wrapper>
  );
};

export { BeerCard };
