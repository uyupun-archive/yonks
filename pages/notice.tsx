import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Box, Center } from 'native-base';
import { PageProps } from '../types';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { useFetcher } from '../hooks/useFetcher';

interface Data {
  content: string;
}

const data: Data[] = new Array(10).fill({
  content:
    '山田太郎さんとマッチしました\n山田太郎さんの連絡先:\nTwitter: @hogehogeunko\nLINE: @hogehogeunko',
});

const Notice = (props: PageProps) => {
  const { navigation } = props;
  // TODO: APIリクエスト
  // const { data, isLoading, isError } = useFetcher('');

  const getNoticeList = (data: Data[]) => {
    return data?.map((item, index: number) => {
      return (
        <Box
          key={index}
          borderColor='gray.300'
          borderBottomWidth={data.length === index + 1 ? 0 : 1}
          py={2}
        >
          {item.content}
        </Box>
      );
    });
  };

  return (
    <>
      <Box flex={1} bg={'white'} safeArea>
        <Header text={'通知'} />
        <ScrollView _contentContainerStyle={{ px: 8 }} mb={12}>
          {getNoticeList(data)}
          <StatusBar style='auto' />
        </ScrollView>
        <Footer active={'notice'} navigation={navigation} />
      </Box>
    </>
  );
};

export { Notice };
