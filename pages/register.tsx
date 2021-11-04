import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { ScrollView, Box, Center, Button, Text, Input, Image, Heading } from 'native-base';
import { PageProps } from '../types';
import { fetcher } from '../utilities/fetcher';

const Register = (props: PageProps) => {
  const { navigation } = props;

  const [text, setText] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const register = async () => {
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
            h={120}
            resizeMode={'contain'}
            mt={'15%'}
            mb={8}
          />
          <Heading mb={6}>新規登録</Heading>
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
              fontWeight: 'bold',
            }}
            w={'50%'}
            mb={8}
            isDisabled={!(text && password)}
            _disabled={{
              backgroundColor: 'orange.300',
            }}
            onPress={() => register()}
          >
            新規登録
          </Button>
          <Button
            variant={'link'}
            colorScheme={'blue'}
            _text={{
              fontSize: 'md',
              fontWeight: 'normal',
              underline: true,
            }}
            onPress={() => navigation.navigate('Login')}
          >
            ログインする
          </Button>
        </Center>
        <StatusBar style='auto' />
      </ScrollView>
    </Box>
  );
};

export { Register };
