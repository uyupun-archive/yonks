import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { PageProps } from '../types';
import { Footer } from '../components/footer';

const Notice = (props: PageProps) => {
  const { navigation } = props;

  return (
    <>
      <View style={styles.container}>
        <Text>Notice page</Text>
        <Button title={'ログイン画面へ'} onPress={() => navigation.navigate('Login')} />
        <Button title={'新規登録画面へ'} onPress={() => navigation.navigate('Register')} />
        <Button title={'フレンド画面へ'} onPress={() => navigation.navigate('Friends')} />
        <Button title={'プロフィール画面へ'} onPress={() => navigation.navigate('Profile')} />
        <Button title={'通知画面へ'} onPress={() => navigation.navigate('Notice')} />
        <StatusBar style='auto' />
      </View>
      <Footer active={'notice'} navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Notice };
