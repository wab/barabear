import { createRemixStub } from '@remix-run/testing';

import { beerFactory } from '~/test/factory';
import { render, screen } from '~/test/utils';
import type { TBeer } from '~/types';

import { BeerList } from '../BeerList';

const setup = async (items: TBeer[], emptyMessage?: string) => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: () => <BeerList items={items} emptyMessage={emptyMessage} />,
    },
  ]);

  return render(<RemixStub />);
};

describe('BeerList', () => {
  it('should display a list with correct length', async () => {
    await setup([beerFactory(1), beerFactory(2)]);

    const list = screen.getAllByRole('listitem');

    expect(list).toHaveLength(2);
  });

  it('should display an empty message when there is no items', async () => {
    await setup([], 'message');

    const list = screen.queryByRole('listitem');
    const message = await screen.findByText('message');

    expect(list).not.toBeInTheDocument();
    expect(message).toBeVisible();
  });
});
