import { json, type MetaFunction } from '@remix-run/node';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { PageTitle } from '~/components/PageTitle';
import { BeerSearch, beersQuery } from '~/features/beer-search';

export const meta: MetaFunction = () => {
  return [{ title: 'barabear' }, { name: 'description', content: 'Welcome to barabear' }];
};

export async function loader() {
  const queryClient = new QueryClient();

  const query = beersQuery();

  await queryClient.ensureQueryData(query);

  return json({
    dehydratedState: dehydrate(queryClient),
  });
}

export default function Index() {
  return (
    <>
      <PageTitle>welcome to barabear</PageTitle>
      <BeerSearch />
    </>
  );
}
