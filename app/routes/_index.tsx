import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getBeers } from '~/features/beer-list';
import { BeerSearch } from '~/features/beer-search';
import { css } from '~/styled-system/css';

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
    <div>
      <h1 className={css({ marginBottom: '16px', textStyle: 'title' })}>welcome to barabear</h1>
      <BeerSearch placeholderData={initialData} />
    </div>
  );
}
