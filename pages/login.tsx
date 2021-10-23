import { StatusBar } from 'expo-status-bar';
import React from 'react';
import logo from '../assets/logo.png';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { PageProps } from '../types';

const Login = (props: PageProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text>Login page</Text>
      <Image source={logo} style={styles.logo} />
      <Button title={'ログイン画面へ'} onPress={() => navigation.navigate('Login')} />
      <Button title={'新規登録画面へ'} onPress={() => navigation.navigate('Register')} />
      <Button title={'フレンド画面へ'} onPress={() => navigation.navigate('Friends')} />
      <Button title={'プロフィール画面へ'} onPress={() => navigation.navigate('Profile')} />
      <Button title={'通知画面へ'} onPress={() => navigation.navigate('Notice')} />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 250,
    height: 130,
  }
});

export { Login };
