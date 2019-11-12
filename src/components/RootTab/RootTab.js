/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import ContactScreen from '../../screens/ContactsScreen';
import ChatsScreen from '../../screens/ChatsScreen';
import SettingsScreen from '../../screens/SettingsScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const RootTab = createBottomTabNavigator(
  {
    ContactScreen: {
      screen: ContactScreen,
      showLabel: false,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ tintColor: '#6982c2' }}
            source={require('../../../assets/contacts.png')}
          />
        ),
      }),
    },
    ChatsScreen: {
      screen: ChatsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ tintColor: '#6982c2' }} source={require('../../../assets/chat.png')} />
        ),
      }),
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ tintColor: '#6982c2' }}
            source={require('../../../assets/settings.png')}
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default RootTab;
