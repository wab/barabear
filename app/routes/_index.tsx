import * as React from 'react';

import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { PageTitle } from '~/components/PageTitle';
import { getBeers, getBeersQueryKey, BeerSearch } from '~/features/beer-search';

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

  return (
    <HydrationBoundary state={dehydratedState}>
      <PageTitle>welcome to barabear</PageTitle>
      <BeerSearch />
    </HydrationBoundary>
  );
}
