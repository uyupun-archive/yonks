import { storage } from '../storage';
import { PageProps } from '../types';

export const redirectFriendsPage = async (navigation: PageProps['navigation']) => {
  const token = await storage.load({ key: 'token' });
  if (token) navigation.navigate('Friends');
};
