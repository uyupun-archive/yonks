import useSWR from 'swr';
import { profileFetcher } from '../utilities/fetcher';

export const useProfileFetcher = () => {
  const { data, error } = useSWR('profile/', profileFetcher, {
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
