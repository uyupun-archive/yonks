import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { PageProps } from '../types';
import { Footer } from '../components/footer';
import { useFetcher } from '../hooks/useFetcher';
import { color, status } from '../constants';

interface Data {
  userId: string;
  name: string;
  status: '1' | '2' | '3';
}

const Friends = (props: PageProps) => {
  const { navigation } = props;
  // TODO: APIリクエスト
  const { data, isLoading, isError } = useFetcher('friends');

  const [searchText, setSearchText] = useState<string>('');

  const search = () => {
    console.log(searchText);
  };

  const getFriends = (data: any) => {
    console.log(data);
    return data?.map((item: any, index: number) => {
      let badgeStyle: 'badgeRed' | 'badgeGreen' | 'badgeBlue' = 'badgeRed';
      if (item.user.status.id !== 1) {
        badgeStyle = item.user.status.id === 2 ? 'badgeGreen' : 'badgeBlue';
      }

      return (
        <View key={index} style={styles.friend}>
          <Text>
            {item.user.name}（{item.user.user_id}）
          </Text>
          <Text style={styles[badgeStyle]}>{item.user.status.name}</Text>
        </View>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <SafeAreaView style={styles.loadingContainer}>
          <Text>ローディング中...</Text>
        </SafeAreaView>
      ) : (
        <>
          <SafeAreaView style={styles.container}>
            <Text style={styles.header}>友だち</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.searchArea}>
                <TextInput style={styles.input} onChangeText={setSearchText} value={searchText} />
                <TouchableOpacity
                  onPress={() => search()}
                  style={searchText ? styles.button : styles.buttonDisabled}
                  disabled={!searchText}
                >
                  <Text>友だち追加</Text>
                </TouchableOpacity>
              </View>
              {getFriends(data)}
              <StatusBar style='auto' />
            </ScrollView>
          </SafeAreaView>
          <Footer active={'friends'} navigation={navigation} />
        </>
      )}
    </>
  );
};

const scrollViewHeight = Dimensions.get('window').height - 100;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
  searchArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  input: {
    width: '60%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 4,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: color.orange,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: color.lightOrange,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  friend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  badgeRed: {
    backgroundColor: color.red,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  badgeGreen: {
    backgroundColor: color.green,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  badgeBlue: {
    backgroundColor: color.blue,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
});

export { Friends };
