import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import { useFetchBeers } from '~/features/beer-list';

export const meta: MetaFunction = () => {
  return [{ title: 'barabear' }, { name: 'description', content: 'Welcome to barabear' }];
};

export default function Index() {
  const { data } = useFetchBeers({});
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8',
      }}
    >
      <h1>🍺 Welcome to barabear</h1>
      <ul>
        {data?.map((beer) => (
          <li key={beer.id}>
            <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
