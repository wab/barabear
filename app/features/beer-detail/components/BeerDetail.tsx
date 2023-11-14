import { NavLink } from '@remix-run/react';

import { PageTitle } from '~/components/PageTitle';
import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';
import { BEER_IMAGE_PLACEHOLDER } from '~/utils';

const Wrapper = styled('article', {
  base: {
    textStyle: 'body',
    lg: { display: 'grid', gridTemplateColumns: '20% 1fr', gap: 8 },

    '& dl': {
      marginTop: 4,
      paddingTop: 4,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 2,
    },
    '& dt': {
      fontSize: 'lg',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    '& dd': {
      fontSize: 'lg',
      fontStyle: 'italic',
      marginBottom: 2,
    },
  },
});

const Picture = styled('picture', {
  base: {
    display: 'block',
    p: 4,
    width: '30%',
    lg: { width: '100%' },

    '& img': {
      aspectRatio: '8 / 20',
      width: '100%',
      objectFit: 'contain',
    },
  },
});

const BeerDetail: React.FunctionComponent<TBeer> = (props) => {
  return (
    <Wrapper>
      <Picture>
        <img
          src={props.image_url ?? BEER_IMAGE_PLACEHOLDER}
          alt={props.name}
          width={120}
          className={css({
            width: '120px',
            display: 'block',
            lg: { mx: 'auto' },
          })}
        />
      </Picture>

      <div>
        <PageTitle>{props.name}</PageTitle>
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

        <NavLink to="/" className={css({ my: 8, display: 'inline-block', fontWeight: 'bold' })}>
          👈 back to the list
        </NavLink>
        <p className={css({ textStyle: 'lg', maxWidth: '480px', marginBottom: 4 })}>
          {props.description}
        </p>
        <p
          className={css({
            textStyle: 'lg',
            maxWidth: '480px',
            padding: 8,
            borderRadius: 'md',
            bgct: 'white/80',
            border: '2px dashed',
            borderColor: 'prussianBlue',
          })}
        >
          <span className={css({ color: 'utOrange', fontSize: 'xl' })}>🗒️</span>{' '}
          {props.brewers_tips}
        </p>
        <dl>
          <dt>abv</dt>
          <dd>👉 {props.abv}</dd>
          <dt>ibu</dt>
          <dd>👉 {props.ibu}</dd>
          <dt>ebc</dt>
          <dd>👉 {props.ebc}</dd>
        </dl>
      </div>
    </Wrapper>
  );
};

export { BeerDetail };
