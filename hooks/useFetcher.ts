import useSWR from 'swr';
import { fetcher } from '../utilities/fetcher';
import { FetchOptions } from '../types';

export const useFetcher = (path: string, options?: FetchOptions) => {
  const { data, error } = useSWR(
    path,
    (path: string) =>
      fetcher(
        path,
        options || { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } },
      ),
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // 10回まで再取得する
        if (retryCount >= 10) return;

        // 5秒間隔で再取得する
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    },
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
