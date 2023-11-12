import * as React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  type RenderOptions,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';

const Providers: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: Providers, ...options });
}

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.getAllByLabelText(/loading/i)]);

export * from '@testing-library/react';
export { userEvent };
export { customRender as render };

export const server = setupServer();
