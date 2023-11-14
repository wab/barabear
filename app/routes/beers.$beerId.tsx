import { json } from '@remix-run/node';
import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useParams } from '@remix-run/react';
import { QueryClient, useSuspenseQuery, dehydrate } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import { beerDetailQuery, BeerDetail } from '~/features/beer-detail';

export async function loader({ params }: LoaderFunctionArgs) {
  const queryClient = new QueryClient();
  const result = await queryClient.ensureQueryData(beerDetailQuery(params.beerId));

  return json({
    dehydratedState: dehydrate(queryClient),
    beer: result[0],
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data)
    return [{ title: 'barabear' }, { name: 'description', content: 'Welcome to barabear' }];
  return [
    { title: `${data.beer.name} | barabear` },
    { name: 'description', content: data.beer.tagline },
  ];
};

export default function BeerDetailPage() {
  const params = useParams<{ beerId: string }>();
  const { data: beer } = useSuspenseQuery({
    ...beerDetailQuery(params.beerId),
  });

  return (
    <motion.div
      key={params.beerId}
      variants={{
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BeerDetail {...beer[0]} />
    </motion.div>
  );
}
