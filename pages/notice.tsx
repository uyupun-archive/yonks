import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Fragment } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { PageProps } from '../types';
import { Footer } from '../components/footer';
import { useFetcher } from '../hooks/useFetcher';
import { color } from '../constants';

interface Data {
  name: string;
  address: {
    line: string;
    twitter: string;
  };
}

const Notice = (props: PageProps) => {
  const { navigation } = props;
  // TODO: APIリクエスト
  // const { data, isLoading, isError } = useFetcher('');

  const data = [
    {
      name: '山田太郎',
      address: {
        line: 'test',
        twitter: 'test',
      },
    },
    {
      name: '山田太郎',
      address: {
        line: 'test',
        twitter: 'test',
      },
    },
    {
      name: '山田太郎',
      address: {
        line: 'test',
        twitter: 'test',
      },
    },
  ];

  const getNoticeList = (data: Data[]) => {
    return data.map((item, index: number) => {
      return (
        <View key={index} style={styles.notice}>
          <Text style={styles.text}>{item.name}さんとマッチしました。</Text>
          <Text style={styles.text}>{item.name}さんの連絡先</Text>
          {item.address.line && <Text style={styles.text}>LINE: {item.address.line}</Text>}
          {item.address.twitter && <Text style={styles.text}>Twitter: {item.address.twitter}</Text>}
        </View>
      );
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>通知</Text>
        <ScrollView>
          {getNoticeList(data)}
          <StatusBar style='auto' />
        </ScrollView>
      </SafeAreaView>
      <Footer active={'notice'} navigation={navigation} />
    </>
  );
};

const noticeWidth = Dimensions.get('window').width - 40;
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
  notice: {
    width: noticeWidth,
    alignSelf: 'flex-start',
    paddingBottom: 10,
    borderBottomColor: color.gray,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  text: {
    marginBottom: 4,
  },
});

export { Notice };
