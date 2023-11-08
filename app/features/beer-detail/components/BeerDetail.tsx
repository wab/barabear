import { Link } from '@remix-run/react';

import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';
import type { TBeer } from '~/types';
import { BEER_IMAGE_PLACEHOLDER } from '~/utils';

const Wrapper = styled('article', {
  base: {
    textStyle: 'body',
    lg: { display: 'grid', gridTemplateColumns: '20% 1fr', gap: 8 },

    '& dl': {
      marginTop: 8,
      paddingTop: 8,
      borderTop: '6px dotted',
      borderTopColor: 'utOrange',
    },
    '& dt': {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
    '& dd': {
      fontSize: 'lg',
      fontStyle: 'italic',
      marginBottom: 2,
    },
  },
});

const BeerDetail: React.FunctionComponent<TBeer> = (props) => {
  return (
    <Wrapper>
      <div
        className={css({
          p: 8,
        })}
      >
        <img
          src={props.image_url ?? BEER_IMAGE_PLACEHOLDER}
          alt={props.name}
          width={200}
          className={css({
            width: '100px',
            display: 'block',
            lg: { mx: 'auto' },
          })}
        />
      </div>
      <div>
        <h1 className={css({ textStyle: 'title' })}>{props.name}</h1>
        <h2
          className={css({
            position: 'relative',
            fontSize: '30px',
            color: 'white',
            my: 6,
          })}
        >
          <span
            className={css({
              position: 'relative',
              display: 'inline-block',
              px: 3,

              _before: {
                content: '" "',
                display: 'block',
                height: '100%',
                width: '100%',
                marginLeft: '-3px',
                marginRight: '-3px',
                position: 'absolute',
                backgroundColor: 'utOrange',
                transform: 'rotate(2deg)',
                top: '-1px',
                left: '-1px',
                borderRadius: '20% 25% 20% 24%',
                padding: '10px 3px 3px 10px',
              },
            })}
          >
            <span
              className={css({
                position: 'relative',
              })}
            >
              {props.tagline}
            </span>
          </span>
        </h2>

        <p className={css({ textStyle: 'lg', maxWidth: '480px' })}>{props.description}</p>
        <Link
          to="/"
          className={css({ fontStyle: 'italic', marginTop: 8, display: 'inline-block' })}
        >
          👈 back to the list
        </Link>
        <dl>
          <dt>abv</dt>
          <dd>{props.abv}</dd>
          <dt>ibu</dt>
          <dd>{props.ibu}</dd>
          <dt>ebc</dt>
          <dd>{props.ebc}</dd>
        </dl>
      </div>
    </Wrapper>
  );
};

export { BeerDetail };
