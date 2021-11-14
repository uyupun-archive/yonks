import { storage } from '../storage';

export const getRequestHeaders = async () => {
  try {
    const token = await storage.load({ key: 'token' });

    return {
      authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } catch (error) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }
};
