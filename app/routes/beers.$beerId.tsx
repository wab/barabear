import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getBeer, useFetchBeer } from '~/features/beer-detail';

export async function loader({ params }: LoaderFunctionArgs) {
  const beer = await getBeer(params.beerId ?? '');
  if (!beer) throw new Response('', { status: 404 });
  return json(params.beerId);
}

export default function BeerDetailPage() {
  const beerId = useLoaderData<typeof loader>();

  const { data } = useFetchBeer(beerId);

  if (!data) return <div>loading...</div>;

  const beer = data[0];

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
