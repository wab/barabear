import { createRemixStub } from '@remix-run/testing';

import { beerFactory } from '~/test/factory';
import { render, screen } from '~/test/utils';
import type { TBeer } from '~/types';

import { BeerCard } from '../BeerCard';

const setup = async (item: TBeer) => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: () => <BeerCard {...item} />,
    },
  ]);
  return render(<RemixStub />);
};

describe('BeerCard', () => {
  it('should display beer title', async () => {
    await setup(beerFactory(1));

    const beerTitle = await screen.findByRole('heading', { name: 'Beer 1' });

    expect(beerTitle).toBeVisible();
  });

  it('should display beer link', async () => {
    await setup(beerFactory(10));

    const link = await screen.findByRole('link');

    expect(link).toBeVisible();
  });
});
