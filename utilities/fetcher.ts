import { FetchOptions } from '../types';

export const fetcher = (url: string, options: FetchOptions) => {
  if (options) return fetch(url, options).then((res) => res.json());
  return fetch(url).then((res) => res.json());
};
