import { FetchOptions } from '../types';
import { YONKS_API } from 'react-native-dotenv';
import { getRequestHeaders } from './getRequestHeaders';
import { storage } from '../storage';

export interface ResponseError extends Error {
  status?: number;
}

export const fetcher = async (path: string, options?: FetchOptions) => {
  const error: ResponseError = new Error('通信エラーが発生しました。');

  const headers = await getRequestHeaders();
  const newOptions = options ? options : {};
  newOptions.headers = headers;

  const res = await fetch(YONKS_API + path, newOptions);
  if (!res.ok) {
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export const profileFetcher = async (path: string) => {
  const error: ResponseError = new Error('通信エラーが発生しました。');

  const userId = await storage.load({ key: 'userId' });
  const headers = await getRequestHeaders();
  const options = {
    headers: headers,
  } as FetchOptions;

  console.log(`${YONKS_API}profile/${userId}`);
  console.log(options);

  const res = await fetch(`${YONKS_API}${path}${userId}`, options);
  if (!res.ok) {
    error.status = res.status;
    throw error;
  }

  return res.json();
};
