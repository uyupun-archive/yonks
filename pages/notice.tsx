import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Box, Center, Text } from 'native-base';
import { PageProps } from '../types';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { useFetcher } from '../hooks/useFetcher';
import { errorHandling } from '../middleware/auth';

interface Data {
  content: string;
}

const Notice = (props: PageProps) => {
  const { navigation } = props;
  const { data, isLoading, error } = useFetcher('notifications');

  if (error) {
    errorHandling(error, navigation);
  }

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
    <Box flex={1} bg={'white'} safeArea>
      <Header text={'通知'} />
      {isLoading ? (
        <Center pt={2} px={8}>
          <Text>ローディング中...</Text>
        </Center>
      ) : (
        <ScrollView _contentContainerStyle={{ px: 8 }} mb={12}>
          {getNoticeList(data)}
          <StatusBar style='auto' />
        </ScrollView>
      )}
      <Footer active={'notice'} navigation={navigation} />
    </Box>
  );
};

export { Notice };
