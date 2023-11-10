import * as React from 'react';

import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { useDebounce } from 'ahooks';

import { Input } from '~/components';
import { getBeers, getBeersQueryKey } from '~/features/beer-list';
import { BeerSearch } from '~/features/beer-search';
import { css } from '~/styled-system/css';

export const meta: MetaFunction = () => {
  return [{ title: 'barabear' }, { name: 'description', content: 'Welcome to barabear' }];
};

export async function loader() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getBeersQueryKey({ page: 1, per_page: 10 }),
    queryFn: () => getBeers({ page: 1, per_page: 10 }),
  });

  return json({ dehydratedState: dehydrate(queryClient) });
}

export default function Index() {
  const { dehydratedState } = useLoaderData<typeof loader>();

  const [search, setSearch] = React.useState('');
  const debouncedValue = useDebounce(search, { wait: 300 });
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearch(term);
  };

  return (
    <HydrationBoundary state={dehydratedState}>
      <h1 className={css({ marginBottom: '16px', textStyle: 'title' })}>welcome to barabear</h1>
      <Input
        type="search"
        value={search}
        onChange={onSearchChange}
        placeholder="Search for a beer"
        className={css({ marginBottom: 8 })}
      />
      <BeerSearch value={debouncedValue === '' ? undefined : debouncedValue} />
    </HydrationBoundary>
  );
}
