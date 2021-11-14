import * as React from 'react';
import { HStack, Pressable, Center, Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { PageProps } from '../types';

interface FooterProps {
  active: 'friends' | 'notice' | 'profile' | 'settings';
  navigation: PageProps['navigation'];
}

const Footer = (props: FooterProps) => {
  const { active, navigation } = props;

  return (
    <HStack
      w={'100%'}
      space={4}
      bg={'white'}
      py={3}
      borderColor='gray.300'
      borderTopWidth={1}
      alignItems='center'
      position='absolute'
      bottom={0}
      safeAreaBottom
    >
      <Pressable
        flex={1}
        opacity={active === 'friends' ? 1 : 0.5}
        onPress={() => {
          if (active === 'friends') return;
          navigation.navigate('Friends');
        }}
      >
        <Center>
          <Icon as={<Ionicons name={'people'} />} color={'orange.500'} size={6} />
        </Center>
      </Pressable>
      <Pressable
        flex={1}
        opacity={active === 'profile' ? 1 : 0.5}
        onPress={() => {
          if (active === 'profile') return;
          navigation.navigate('Profile');
        }}
      >
        <Center>
          <Icon as={<Ionicons name={'person'} />} color={'orange.500'} size={6} />
        </Center>
      </Pressable>
      <Pressable
        flex={1}
        opacity={active === 'notice' ? 1 : 0.5}
        onPress={() => {
          if (active === 'notice') return;
          navigation.navigate('Notice');
        }}
      >
        <Center>
          <Icon as={<FontAwesome name={'bell'} />} color={'orange.500'} size={6} />
        </Center>
      </Pressable>
      <Pressable
        flex={1}
        opacity={active === 'settings' ? 1 : 0.5}
        onPress={() => {
          if (active === 'settings') return;
          navigation.navigate('Settings');
        }}
      >
        <Center>
          <Icon as={<Ionicons name={'settings-sharp'} />} color={'orange.500'} size={6} />
        </Center>
      </Pressable>
    </HStack>
  );
};

export { Footer };
