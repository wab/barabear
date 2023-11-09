import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { BeerList, getBeers, useFetchBeers } from '~/features/beer-list';

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

  if (!data) return null;

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8',
      }}
    >
      <h1>🍺 Welcome to barabear</h1>

      <BeerList items={data} />
    </div>
  );
}
