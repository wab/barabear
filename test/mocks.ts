import { HttpResponse, http, delay } from 'msw';

import { BEER_API_URL } from '~/utils';

import { beerFactory } from './factory';

export const getBeersHandler = (length: number) => [
  http.get(`${BEER_API_URL}/beers`, async ({ request, params, cookies }) => {
    await delay(500);
    return HttpResponse.json(Array.from({ length }, (_, i) => beerFactory(i + 1)));
  }),
];

export const getBeerHandler = (...factoryParams: Parameters<typeof beerFactory>) => [
  http.get(`${BEER_API_URL}/beers`, ({ request, params, cookies }) => {
    return HttpResponse.json([beerFactory(...factoryParams)]);
  }),
];

export const getRandomBeerHandler = (...factoryParams: Parameters<typeof beerFactory>) => [
  http.get(`${BEER_API_URL}/beers/random`, async ({ request, params, cookies }) => {
    await delay(500);
    return HttpResponse.json([beerFactory(...factoryParams)]);
  }),
];
