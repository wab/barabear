import { createRemixStub } from '@remix-run/testing';

import { getRandomBeerHandler } from '~/test/mocks';
import { render, screen, server } from '~/test/utils';

import { BeerRandom } from '../BeerRandom';

const setup = async (id: number) => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: () => <BeerRandom id={12} />,
    },
  ]);

  server.use(...getRandomBeerHandler(id));
  render(<RemixStub />);
};

describe('BeerRandom', () => {
  it('should display random beer title and links', async () => {
    const id = 55;
    await setup(id);

    const beerTitle = await screen.findByText(`Beer ${id}`);
    const link = await screen.findByRole('link');

    expect(beerTitle).toBeVisible();
    expect(link).toBeVisible();
  });
});
