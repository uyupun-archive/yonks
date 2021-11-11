import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { ScrollView, Box, Center, Heading, Text, Select } from 'native-base';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Footer } from '../components/footer';
import { PageProps } from '../types';
import { useFetcher } from '../hooks/useFetcher';
import { status as statusObj } from '../constants';

const data = {
  userId: 'takashi0602',
};

const Profile = (props: PageProps) => {
  const { navigation } = props;
  // TODO: APIリクエスト
  // const { data, isLoading, isError } = useFetcher('');

  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [line, setLine] = useState<string>('');
  const [twitter, setTwitter] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [tikTok, setTikTok] = useState<string>('');

  const getSelectItem = () => {
    return Object.values(statusObj).map((label, index) => {
      return <Select.Item key={index} label={label} value={`${index + 1}`} />;
    });
  };

  return (
    <>
      <Box flex={1} bg={'white'} safeArea>
        <Center borderColor='gray.300' borderBottomWidth={1} pt={1} pb={2}>
          <Heading size='sm'>プロフィール</Heading>
        </Center>
        <ScrollView _contentContainerStyle={{ pt: 6, px: 8 }} mb={12}>
          <Text fontSize={'md'} mb={6}>
            ユーザID: {data.userId}
          </Text>
          <Input text={'名前'} value={name} onChangeText={setName} mb={4} />
          <Box mb={8}>
            <Text fontSize={'md'} mb={1}>
              ステータス
            </Text>
            <Select
              h={'40px'}
              selectedValue={status}
              accessibilityLabel={'選択してください'}
              placeholder={'選択してください'}
              _item={{
                _pressed: {
                  bg: 'orange.300',
                },
              }}
              _selectedItem={{
                bg: 'orange.100',
              }}
              onValueChange={(value) => setStatus(value)}
            >
              {getSelectItem()}
            </Select>
          </Box>
          <Heading size='sm' mb={4}>
            メッセージングアプリ
          </Heading>
          <Input text={'LINE'} value={line} onChangeText={setLine} mb={4} />
          <Input text={'Twitter'} value={twitter} onChangeText={setTwitter} mb={4} />
          <Input text={'Instagram'} value={instagram} onChangeText={setInstagram} mb={4} />
          <Input text={'TikTok'} value={tikTok} onChangeText={setTikTok} mb={8} />
          <Center>
            <Button text={'プロフィールの保存'} w={'70%'} mb={8} />
          </Center>
          <StatusBar style='auto' />
        </ScrollView>
        <Footer active={'profile'} navigation={navigation} />
      </Box>
    </>
  );
};

export { Profile };
