import { createRemixStub } from '@remix-run/testing';

import { getBeersHandler } from '~/test/mocks';
import { render, screen, server, waitForLoadingToFinish } from '~/test/utils';

import { EMPTY_RESULT_MESSAGE } from '../../utils';
import { BeerSearch } from '../BeerSearch';

const setup = async (count: number) => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: () => <BeerSearch />,
    },
  ]);

  server.use(...getBeersHandler(count));
  render(<RemixStub />);

  return waitForLoadingToFinish();
};

describe('BeerSearch', () => {
  it('should display a list a result', async () => {
    const count = 3;
    await setup(count);

    const list = await screen.findAllByRole('listitem');

    expect(list).toHaveLength(count);
  });

  it('should display an empty message when there is no result', async () => {
    await setup(0);

    const list = screen.queryByRole('listitem');
    const message = await screen.findByRole('alert');

    expect(list).not.toBeInTheDocument();
    expect(message).toBeVisible();
    expect(message).toHaveTextContent(EMPTY_RESULT_MESSAGE);
  });
});
