import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { color } from '../constants';
import { PageProps } from '../types';

interface FooterProps {
  active: 'friends' | 'notice' | 'profile';
  navigation: PageProps['navigation'];
}

const Footer = (props: FooterProps) => {
  const { active, navigation } = props;

  return (
    <View style={styles.footer}>
      <Ionicons
        name={'people'}
        size={24}
        color={active === 'friends' ? color.orange : color.lightOrange}
        onPress={() => {
          if (active === 'friends') return;
          navigation.navigate('Friends');
        }}
      />
      <FontAwesome
        name={'bell'}
        size={24}
        color={active === 'notice' ? color.orange : color.lightOrange}
        onPress={() => {
          if (active === 'notice') return;
          navigation.navigate('Notice');
        }}
      />
      <Ionicons
        name={'person'}
        size={24}
        color={active === 'profile' ? color.orange : color.lightOrange}
        onPress={() => {
          if (active === 'profile') return;
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: `${color.white}`,
    borderTopColor: `${color.gray}`,
    borderTopWidth: 1,
  },
});

export { Footer };
