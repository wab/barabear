import { Link } from '@remix-run/react';
import { useInterval } from 'ahooks';

import { BEER_IMAGE_PLACEHOLDER } from '~/utils';

import { useFetchRadomBeer } from '../api/get-random-beer';

const BeerRandomCard: React.FunctionComponent<{
  id: number;
}> = (props) => {
  const { data, refetch } = useFetchRadomBeer(props.id);

  useInterval(() => {
    refetch();
  }, 10000);

  if (!data) return null;

  const beer = data[0];
  return (
    <Link to={`/beers/${beer.id}`}>
      <article>
        <img src={beer.image_url ?? BEER_IMAGE_PLACEHOLDER} alt={beer.tagline} width={100} />
      </article>
    </Link>
  );
};

export { BeerRandomCard };
