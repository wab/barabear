import '@testing-library/jest-dom/vitest';
import { installGlobals } from '@remix-run/node';
//import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import {
  afterEach,
  //expect
} from 'vitest';

import { server } from './utils';

beforeAll(() => {
  // Start the interception.
  server.listen();
});

//expect.extend(matchers);

installGlobals();

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});
