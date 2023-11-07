import type { UseQueryOptions, UseMutationOptions, DefaultOptions } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

const queryConfig: DefaultOptions = {
  queries: {
    // With SSR, we usually want to set some default staleTime
    // above 0 to avoid refetching immediately on the client
    staleTime: 60 * 1000,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
