import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Box, Pressable, Text } from 'native-base';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { PageProps } from '../types';
import { redirectLoginPage } from '../middleware/auth';

const Settings = (props: PageProps) => {
  const { navigation } = props;

  return (
    <Box flex={1} bg={'white'} safeArea>
      <Header text={'設定'} />
      <ScrollView>
        <Pressable
          py={2}
          px={8}
          _pressed={{
            backgroundColor: 'gray.200',
          }}
          onPress={() => {
            redirectLoginPage(navigation);
          }}
        >
          <Text fontSize={'md'} color={'danger.500'}>
            ログアウト
          </Text>
        </Pressable>
        <StatusBar style='auto' />
      </ScrollView>
      <Footer active={'settings'} navigation={navigation} />
    </Box>
  );
};

export { Settings };
