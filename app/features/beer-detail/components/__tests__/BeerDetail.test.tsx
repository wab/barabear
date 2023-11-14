import { createRemixStub } from '@remix-run/testing';

import { beerFactory } from '~/test/factory';
import { render, screen } from '~/test/utils';

import { BeerDetail } from '../BeerDetail';

const setup = async (item: TBeer) => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: () => <BeerDetail {...item} />,
    },
  ]);
  return render(<RemixStub />);
};

describe('BeerDetail', () => {
  it('should correctly display beer details', async () => {
    await setup(beerFactory(32));

    const beerTitle = await screen.findByRole('heading', { name: 'Beer 32' });
    const beerTagline = await screen.findByRole('heading', { name: 'Tagline 32' });
    const beerImage = await screen.findByRole('img', { name: 'Beer 32' });
    const beerDescription = await screen.findByText('Description 32');

    expect(beerTitle).toBeVisible();
    expect(beerTagline).toBeVisible();
    expect(beerImage).toBeVisible();
    expect(beerDescription).toBeVisible();
  });
});
