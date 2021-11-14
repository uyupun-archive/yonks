import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Alert } from 'react-native';
import { ScrollView, Box, Center, Image, Heading } from 'native-base';
import { Input } from '../components/input';
import { Link } from '../components/link';
import { Button } from '../components/button';
import { PageProps } from '../types';
import { fetcher } from '../utilities/fetcher';
import { storage } from '../storage';
import { redirectFriendsPage } from '../middleware/auth';

const Login = (props: PageProps) => {
  const { navigation } = props;

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    redirectFriendsPage(navigation);
  }, []);

  const login = async () => {
    try {
      setIsLoading(true);
      const res = await fetcher('auth/login', {
        method: 'POST',
        body: JSON.stringify({ user_id: userId, password }),
      });
      storage.save({ key: 'token', data: res.token });
      navigation.navigate('Friends');
    } catch (error: any) {
      if (error?.status === 401) {
        Alert.alert('', 'ユーザIDまたは、パスワードが間違っています。', [{ text: 'OK' }]);
      } else {
        Alert.alert('', '通信エラーが発生しました。', [{ text: 'OK' }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box flex={1} bg={'white'} safeArea>
      <ScrollView _contentContainerStyle={{ px: 8 }}>
        <Center mb={4}>
          <Image
            source={logo}
            alt={'yonks logo'}
            w={'100%'}
            h={120}
            resizeMode={'contain'}
            mt={'15%'}
            mb={8}
          />
          <Heading mb={6}>ログイン</Heading>
        </Center>
        <Input text={'ユーザID'} mb={4} onChangeText={setUserId} value={userId} />
        <Input
          type={'password'}
          text={'パスワード'}
          mb={8}
          onChangeText={setPassword}
          value={password}
        />
        <Center>
          <Button
            text={'ログイン'}
            mb={8}
            isDisabled={!(userId && password)}
            isLoading={isLoading}
            onPress={() => login()}
          />
          <Link text={'新規登録する'} onPress={() => navigation.navigate('Register')} />
        </Center>
        <StatusBar style='auto' />
      </ScrollView>
    </Box>
  );
};

export { Login };
