import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';

import { getBeer, BeerDetail } from '~/features/beer-detail';

export async function loader({ params }: LoaderFunctionArgs) {
  const beer = await getBeer(params.beerId ?? '');
  if (!beer) throw new Response('', { status: 404 });
  return json(beer[0]);
}

export default function BeerDetailPage() {
  const beer = useLoaderData<typeof loader>();
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      variants={{
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BeerDetail {...beer} />;
    </motion.div>
  );
}
