import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { ScrollView, Box, Center, Heading, Text, Select } from 'native-base';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Footer } from '../components/footer';
import { PageProps } from '../types';
import { useProfileFetcher } from '../hooks/useProfileFetcher';
import { status as statusObj } from '../constants';
import { storage } from '../storage';
import { errorHandling, redirectLoginPage } from '../middleware/auth';
import { fetcher, profileFetcher } from '../utilities/fetcher';

const Profile = (props: PageProps) => {
  const { navigation } = props;
  const { data, isLoading, error } = useProfileFetcher();

  if (error) {
    errorHandling(error, navigation);
  }

  useEffect(() => {
    getUserId();
  }, []);

  useEffect(() => {
    if (!data || data.id === 0) return;
    updateProfile(data);
  }, [data]);

  const [userId, setUserId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [line, setLine] = useState<string>('');
  const [twitter, setTwitter] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [tikTok, setTikTok] = useState<string>('');
  const [isSaveLoading, setIsSaveLoading] = useState<boolean>(false);

  const updateProfile = (data: any) => {
    setName(data.name || '');
    setStatus(data.status_id ? `${data.status_id}` : '');
    setLine(data.sns_line || '');
    setTwitter(data.sns_twitter || '');
    setInstagram(data.sns_instagram || '');
    setTikTok(data.sns_tiktok || '');
  };

  const getSelectItem = () => {
    return Object.values(statusObj).map((label, index) => {
      let optionLabel = 'いそがしい';
      if (label === 'either') {
        optionLabel = 'どちらでも';
      } else if (label === 'lonely') {
        optionLabel = '人肌恋しい';
      }
      return <Select.Item key={index} label={optionLabel} value={`${index + 1}`} />;
    });
  };

  const getUserId = async () => {
    const id = await storage.load({ key: 'userId' });
    if (id) setUserId(id);
  };

  const saveProfile = async () => {
    try {
      setIsSaveLoading(true);
      await fetcher('profile', {
        method: 'PATCH',
        body: JSON.stringify({
          user_id: userId,
          name,
          status_id: Number(status),
          sns_line: line,
          sns_twitter: twitter,
          sns_instagram: instagram,
          sns_tiktok: tikTok,
        }),
      });
      const res = await profileFetcher('profile/');
      updateProfile(res);
    } catch (error: any) {
      if (error?.status === 400 || error?.status === 404) {
        Alert.alert('', 'データに不備があります。', [{ text: 'OK' }]);
      } else if (error?.status === 401) {
        redirectLoginPage(navigation);
      } else {
        Alert.alert('', '通信エラーが発生しました。', [{ text: 'OK' }]);
      }
    } finally {
      setIsSaveLoading(false);
    }
  };

  return (
    <>
      <Box flex={1} bg={'white'} safeArea>
        <Header text={'プロフィール'} />
        {isLoading ? (
          <Center pt={2} px={8}>
            <Text>ローディング中...</Text>
          </Center>
        ) : (
          <ScrollView _contentContainerStyle={{ pt: 6, px: 8 }} mb={12}>
            <Text fontSize={'md'} mb={6}>
              ユーザID: {userId}
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
              <Button
                text={'プロフィールの保存'}
                w={'70%'}
                mb={8}
                isLoading={isSaveLoading}
                onPress={() => saveProfile()}
              />
            </Center>
            <StatusBar style='auto' />
          </ScrollView>
        )}
        <Footer active={'profile'} navigation={navigation} />
      </Box>
    </>
  );
};

export { Profile };
