import * as React from 'react';

import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getBeers } from '~/features/beer-list';
import { BeerSearch } from '~/features/beer-search';

export const meta: MetaFunction = () => {
  return [{ title: 'barabear' }, { name: 'description', content: 'Welcome to barabear' }];
};

export async function loader() {
  const initialData = await getBeers();
  return json({ initialData });
}

export default function Index() {
  const { initialData } = useLoaderData<typeof loader>();

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8',
      }}
    >
      <h1>🍺 Welcome to barabear</h1>

      <BeerSearch placeholderData={initialData} />
    </div>
  );
}
