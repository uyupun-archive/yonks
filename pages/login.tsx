import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { PageProps } from '../types';
import { color } from '../constants';
import { post } from '../utilities/fetcher';

const Login = (props: PageProps) => {
  const { navigation } = props;

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    try {
      await post('auth/login', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, password }),
      });
      navigation.navigate('Friends');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.label}>ユーザID</Text>
      <TextInput style={styles.input} onChangeText={setUserId} value={userId} />
      <Text style={styles.label}>パスワード</Text>
      <TextInput secureTextEntry style={styles.input} onChangeText={setPassword} value={password} />
      <TouchableOpacity
        onPress={() => login()}
        style={userId && password ? styles.button : styles.buttonDisabled}
        disabled={!(userId && password)}
      >
        <Text>ログイン</Text>
      </TouchableOpacity>
      <Button title={'新規登録する'} onPress={() => navigation.navigate('Register')} />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

const inputWidth = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 130,
    marginTop: 72,
    marginBottom: 64,
  },
  label: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  input: {
    width: inputWidth,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 4,
    marginBottom: 20,
  },
  button: {
    backgroundColor: color.orange,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 5,
    marginBottom: 12,
  },
  buttonDisabled: {
    backgroundColor: color.lightOrange,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 5,
    marginBottom: 12,
  },
});

export { Login };
