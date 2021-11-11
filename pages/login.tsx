import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { ScrollView, Box, Center, Image, Heading } from 'native-base';
import { Input } from '../components/input';
import { Link } from '../components/link';
import { Button } from '../components/button';
import { PageProps } from '../types';
import { fetcher } from '../utilities/fetcher';

const Login = (props: PageProps) => {
  const { navigation } = props;

  const [text, setText] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async () => {
    try {
      setIsLoading(true);
      // ローディングを表示するために、仮に0.5秒待機する
      await new Promise((resolve) => setTimeout(resolve, 500));

      // TODO: APIリクエスト
      // const res = await fetcher('', { method: 'POST' });
      // const data = await res.json();
      // console.log(data);
      navigation.navigate('Friends');
    } catch (error) {
      console.error('エラーです');
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
        <Input text={'ユーザID'} mb={4} onChangeText={setText} value={text} />
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
            isDisabled={!(text && password)}
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
