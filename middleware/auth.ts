import { Alert } from 'react-native';
import { storage } from '../storage';
import { PageProps } from '../types';

export const redirectFriendsPage = async (navigation: PageProps['navigation']) => {
  const token = await storage.load({ key: 'token' });
  if (token) navigation.navigate('Friends');
};

export const redirectLoginPage = async (navigation: PageProps['navigation']) => {
  storage.remove({ key: 'token' });
  storage.remove({ key: 'userId' });
  navigation.navigate('Login');
};

export const errorHandling = (error: any, navigation: PageProps['navigation']) => {
  if (error?.status === 401) redirectLoginPage(navigation);
  else
    Alert.alert('', '通信エラーが発生しました。', [
      { text: 'OK', onPress: () => redirectLoginPage(navigation) },
    ]);
};
