import { json, type MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getBeers, useFetchBeers } from '~/features/beer-list';

export const meta: MetaFunction = () => {
  return [{ title: 'barabear' }, { name: 'description', content: 'Welcome to barabear' }];
};

export async function loader() {
  const posts = await getBeers();
  return json({ posts });
}

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  const { data } = useFetchBeers({
    initialData: posts,
  });
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
