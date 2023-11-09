import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getBeer, BeerDetail } from '~/features/beer-detail';

export async function loader({ params }: LoaderFunctionArgs) {
  const beer = await getBeer(params.beerId ?? '');
  if (!beer) throw new Response('', { status: 404 });
  return json(beer[0]);
}

export default function BeerDetailPage() {
  const beer = useLoaderData<typeof loader>();

  return (
    <div>
      <Link to="/">👈 Back</Link>
      <BeerDetail {...beer} />
    </div>
  );
}
