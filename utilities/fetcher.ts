import { FetchOptions } from '../types';
import { YONKS_API } from 'react-native-dotenv';

export const fetcher = (url: string, options?: FetchOptions) => {
  if (options) return fetch(url, options).then((res) => res.json());
  return fetch(url).then((res) => res.json());
};

export const post = (url: string, options?: FetchOptions) => {
  if (options) return fetch(YONKS_API + url, options).then((res) => res.json());
  return fetch(YONKS_API + url).then((res) => res.json());
};
