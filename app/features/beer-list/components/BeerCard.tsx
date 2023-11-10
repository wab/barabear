import { Link } from '@remix-run/react';

import type { TBeer } from '~/types';
import { BEER_IMAGE_PLACEHOLDER } from '~/utils';

const BeerCard: React.FunctionComponent<TBeer> = (props) => {
  return (
    <article>
      <div>
        <h2>{props.name}</h2>
        <img src={props.image_url ?? BEER_IMAGE_PLACEHOLDER} alt={props.tagline} width={28} />
        <p>ABV: {props.abv}%</p>
      </div>
      <Link to={`/beers/${props.id}`}>See detail</Link>
    </article>
  );
};

export { BeerCard };
