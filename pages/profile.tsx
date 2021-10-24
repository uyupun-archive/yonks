import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, ScrollView, Dimensions } from 'react-native';
import { PageProps } from '../types';
import { Footer } from '../components/footer';
import { useFetcher } from '../hooks/useFetcher';
import { color } from '../constants';
import RNPickerSelect from 'react-native-picker-select';

const Profile = (props: PageProps) => {
  const { navigation } = props;
  // TODO: APIリクエスト
  // const { data, isLoading, isError } = useFetcher('');
  const data = {
    userId: 'takashi0602',
  };

  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [line, setLine] = useState<string>('');
  const [twitter, setTwitter] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [tikTok, setTikTok] = useState<string>('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>プロフィール</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.userId}>ユーザID: {data.userId}</Text>
          <Text style={styles.label}>名前</Text>
          <TextInput style={styles.input} onChangeText={setName} value={name} />
          <Text style={styles.label}>ステータス</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setStatus(value)}
            items={[
              { label: 'いそがしい', value: '1' },
              { label: 'どっちでも', value: '2' },
              { label: '人肌恋しい', value: '3' },
            ]}
            placeholder={{ label: '選択してください', value: '' }}
          />
          <Text style={styles.messagingApp}>メッセージングアプリ</Text>
          <Text style={styles.label}>LINE</Text>
          <TextInput style={styles.input} onChangeText={setLine} value={line} />
          <Text style={styles.label}>Twitter</Text>
          <TextInput style={styles.input} onChangeText={setTwitter} value={twitter} />
          <Text style={styles.label}>Instagram</Text>
          <TextInput style={styles.input} onChangeText={setInstagram} value={instagram} />
          <Text style={styles.label}>TikTok</Text>
          <TextInput style={styles.lastInput} onChangeText={setTikTok} value={tikTok} />
          <StatusBar style='auto' />
        </ScrollView>
      </SafeAreaView>
      <Footer active={'profile'} navigation={navigation} />
    </>
  );
};

const inputWidth = Dimensions.get('window').width - 40;
const scrollViewHeight = Dimensions.get('window').height - 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    height: scrollViewHeight,
  },
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 12,
    borderBottomColor: color.gray,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  userId: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  messagingApp: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    width: inputWidth,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: 'center',
  },
  lastInput: {
    width: inputWidth,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 4,
    marginBottom: 74,
    alignSelf: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: inputWidth,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputAndroid: {
    width: inputWidth,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export { Profile };
