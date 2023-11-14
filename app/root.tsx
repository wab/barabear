import * as React from 'react';

import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';
import { useDehydratedState } from 'use-dehydrated-state';

import { MainLayout } from './components/MainLayout';
import { Navigation } from './components/Navigation';
import { BeerRandomSection } from './features/beer-random';
import styles from './index.css';
import { queryConfig } from './lib/react-query';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap',
  },
];

export default function App() {
  const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: queryConfig }));

  const dehydratedState = useDehydratedState();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={dehydratedState}>
            <MainLayout.Root>
              <MainLayout.Navbar>
                <Navigation />
              </MainLayout.Navbar>
              <MainLayout.Content>
                <AnimatePresence mode="wait" initial={false}>
                  <Outlet />
                </AnimatePresence>
              </MainLayout.Content>
              <MainLayout.Footer>
                <BeerRandomSection count={2} />
              </MainLayout.Footer>
            </MainLayout.Root>
          </HydrationBoundary>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
