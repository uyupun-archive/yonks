import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { ScrollView, Box, Center, Button, Image, Heading } from 'native-base';
import { Input } from '../components/input';
import { PageProps } from '../types';
import { fetcher } from '../utilities/fetcher';

const Login = (props: PageProps) => {
  const { navigation } = props;

  const [text, setText] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    try {
      // TODO: APIリクエスト
      // const res = await fetcher('', { method: 'POST' });
      // const data = await res.json();
      // console.log(data);
      navigation.navigate('Friends');
    } catch (error) {
      console.error('エラーです');
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
            colorScheme={'orange'}
            _text={{
              color: 'white',
              fontSize: 'md',
              fontWeight: 'bold',
            }}
            w={'50%'}
            mb={8}
            isDisabled={!(text && password)}
            _disabled={{
              backgroundColor: 'orange.300',
            }}
            onPress={() => login()}
          >
            ログイン
          </Button>
          <Button
            variant={'link'}
            colorScheme={'blue'}
            _text={{
              fontSize: 'md',
              fontWeight: 'normal',
              underline: true,
            }}
            onPress={() => navigation.navigate('Register')}
          >
            新規登録する
          </Button>
        </Center>
        <StatusBar style='auto' />
      </ScrollView>
    </Box>
  );
};

export { Login };
