import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { ScrollView, Box, HStack, Heading, Text } from 'native-base';
import { PageProps } from '../types';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Badge } from '../components/badge';
import { useFetcher } from '../hooks/useFetcher';
import { color, status as constantStatus } from '../constants';

interface Data {
  userId: string;
  name: string;
  status: '1' | '2' | '3';
}

const Friends = (props: PageProps) => {
  const { navigation } = props;
  // TODO: APIリクエスト
  // const { data, isLoading, isError } = useFetcher('');

  const data: Data[] = [
    {
      userId: 'test1',
      name: '山田太郎',
      status: '1',
    },
    {
      userId: 'test2',
      name: '山田太郎',
      status: '2',
    },
    {
      userId: 'test3',
      name: '山田太郎',
      status: '3',
    },
  ];

  const [searchText, setSearchText] = useState<string>('');
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);

  const search = async () => {
    try {
      setIsSearchLoading(true);
      // ローディングを表示するために、仮に0.5秒待機する
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(searchText);
    } catch {
      console.error('エラーです');
    } finally {
      setIsSearchLoading(false);
    }
  };

  const getFriends = (data: Data[]) => {
    return data.map((item, index) => {
      return (
        <HStack
          key={index}
          space={2}
          w={'100%'}
          alignItems={'center'}
          justifyContent={'space-between'}
          mb={data.length === index + 1 ? 0 : 4}
        >
          <Text>
            {item.name}（@{item.userId}）
          </Text>
          <Badge status={constantStatus[item.status]} />
        </HStack>
      );
    });
  };

  return (
    <Box flex={1} bg={'white'} safeArea>
      <Header text={'友だち'} />
      <ScrollView _contentContainerStyle={{ pt: 6, px: 8 }} mb={12}>
        <Box pb={4} borderColor='gray.300' borderBottomWidth={1} mb={4}>
          <Heading size='sm' mb={2}>
            友だち追加
          </Heading>
          <HStack space={2} alignItems={'center'} justifyContent={'space-between'}>
            <Input w={'70%'} value={searchText} onChangeText={setSearchText} />
            <Button
              w={'25%'}
              text={'追加'}
              isDisabled={!searchText}
              isLoading={isSearchLoading}
              onPress={() => search()}
            />
          </HStack>
        </Box>
        {getFriends(data)}
        <StatusBar style='auto' />
      </ScrollView>
      <Footer active={'friends'} navigation={navigation} />
    </Box>
  );
};

export { Friends };
