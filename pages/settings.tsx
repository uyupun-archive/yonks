import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { ScrollView, Box, Center, Pressable, Text, Icon, Image, Heading, Link } from 'native-base';
import { Footer } from '../components/footer';
import { PageProps } from '../types';
import { fetcher } from '../utilities/fetcher';

const Settings = (props: PageProps) => {
  const { navigation } = props;

  return (
    <Box flex={1} bg={'white'} safeArea>
      <Center borderColor='gray.300' borderBottomWidth={1} pt={1} pb={2}>
        <Heading size='sm'>設定</Heading>
      </Center>
      <ScrollView>
        <Pressable
          py={2}
          px={8}
          _pressed={{
            backgroundColor: 'gray.200',
          }}
          onPress={() => {
            navigation.navigate('Login');
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
