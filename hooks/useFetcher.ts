import useSWR from 'swr';
import { YONKS_API } from 'react-native-dotenv';
import { fetcher } from '../utilities/fetcher';
import { FetchOptions } from '../types';

export const useFetcher = (path: string, options?: FetchOptions) => {
  const { data, error } = useSWR(`${YONKS_API}${path}`, (url: string) =>
    fetcher(url, options || {}),
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
