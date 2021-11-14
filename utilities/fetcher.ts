import { FetchOptions } from '../types';
import { YONKS_API } from 'react-native-dotenv';

export interface ResponseError extends Error {
  status?: number;
}

export const fetcher = async (path: string, options: FetchOptions) => {
  const error: ResponseError = new Error('通信エラーが発生しました。');

  const res = await fetch(YONKS_API + path, options);
  if (!res.ok) {
    error.status = res.status;
    throw error;
  }

  return res.json();
};
