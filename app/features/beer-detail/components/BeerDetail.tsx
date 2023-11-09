import type { TBeer } from '~/types';

const BeerDetail: React.FunctionComponent<TBeer> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.tagline}</h2>
      <img src={props.image_url} alt={props.name} width="100" />
      <p>{props.description}</p>
    </div>
  );
};

export { BeerDetail };