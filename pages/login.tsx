import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { ScrollView, Box, Center, Button, Text, Input, Image } from 'native-base';
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
    <Box flex={1} px={8} bg={'white'} safeArea>
      <ScrollView>
        <Center mb={4}>
          <Image
            source={logo}
            alt={'yonks logo'}
            w={'100%'}
            h={130}
            resizeMode={'contain'}
            mt={'20%'}
            mb={12}
          />
        </Center>
        <Box mb={4}>
          <Text fontSize={'md'} mb={1}>
            ユーザID
          </Text>
          <Input
            size='lg'
            _focus={{
              borderColor: 'orange.500',
            }}
            onChangeText={setText}
            value={text}
          />
        </Box>
        <Box mb={8}>
          <Text fontSize={'md'} mb={1}>
            パスワード
          </Text>
          <Input
            type={'password'}
            size='lg'
            _focus={{
              borderColor: 'orange.500',
            }}
            onChangeText={setPassword}
            value={password}
          />
        </Box>
        <Center>
          <Button
            colorScheme={'orange'}
            _text={{
              color: 'white',
              fontSize: 'md',
            }}
            w={'50%'}
            mb={8}
            isDisabled={!(text && password)}
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
