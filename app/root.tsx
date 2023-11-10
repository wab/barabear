import * as React from 'react';

import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';

import { MainLayout, Navigation } from './components';
import { BeerRandomSection } from './features/beer-random';
import styles from './index.css';

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
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
