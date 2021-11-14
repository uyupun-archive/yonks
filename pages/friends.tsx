import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { ScrollView, Box, HStack, Center, Heading, Text } from 'native-base';
import { PageProps } from '../types';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Badge } from '../components/badge';
import { useFetcher } from '../hooks/useFetcher';
import { status as constantStatus } from '../constants';

const Friends = (props: PageProps) => {
  const { navigation } = props;
  const { data, isLoading, isError } = useFetcher('friends');

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

  const getFriends = (data: any) => {
    return data.map((item: any, index: number) => {
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
            {item.user.name}（{item.user.user_id}）
          </Text>
          <Badge status={constantStatus[`${item.user.status.id}` as keyof typeof constantStatus]} />
        </HStack>
      );
    });
  };

  return (
    <Box flex={1} bg={'white'} safeArea>
      <Header text={'友だち'} />
      {isLoading ? (
        <Center pt={2} px={8}>
          <Text>ローディング中...</Text>
        </Center>
      ) : (
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
      )}
      <Footer active={'friends'} navigation={navigation} />
    </Box>
  );
};

export { Friends };
