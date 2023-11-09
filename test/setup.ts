import '@testing-library/jest-dom/vitest';
import { installGlobals } from '@remix-run/node';
//import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import {
  afterEach,
  //expect
} from 'vitest';

//expect.extend(matchers);

installGlobals();

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
