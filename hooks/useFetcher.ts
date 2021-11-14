import useSWR from 'swr';
import { fetcher } from '../utilities/fetcher';

export const useFetcher = (path: string) => {
  const { data, error } = useSWR(path, fetcher, {
    onErrorRetry: (error) => {
      if (error) return;
    },
  });

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
