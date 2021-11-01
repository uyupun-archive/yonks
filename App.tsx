import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Friends } from './pages/friends';
import { Profile } from './pages/profile';
import { Notice } from './pages/notice';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{ headerShown: false, animation: 'none' }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Friends' component={Friends} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Notice' component={Notice} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
