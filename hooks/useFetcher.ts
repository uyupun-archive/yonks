import useSWR from 'swr';
import { fetcher } from '../utilities/fetcher';

export const useFetcher = (path: string) => {
  const { data, error } = useSWR(path, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
