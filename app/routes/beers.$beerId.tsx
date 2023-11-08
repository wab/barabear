import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getBeer } from '~/features/beer-detail';

export async function loader({ params }: LoaderFunctionArgs) {
  console.log('params', params);
  const beer = await getBeer(params.beerId ?? '');
  if (!beer) throw new Response('', { status: 404 });
  return json(beer[0]);
}

export default function BeerDetailPage() {
  const beer = useLoaderData<typeof loader>();

  return (
    <div>
      <Link to="/">👈 Back</Link>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <img src={beer.image_url} alt={beer.name} width="100" />
      <p>{beer.description}</p>
    </div>
  );
}
