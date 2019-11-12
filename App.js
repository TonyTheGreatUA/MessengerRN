/*eslint-disable*/

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from './src/screens/MainScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import ContactScreen from './src/screens/ContactsScreen';
import ChatsScreen from './src/screens/ChatsScreen/ChatsScreen';
import SettingsScreen from './src/screens/SettingsScreen/SettingsScreen';
import ChatScreen from './src/screens/ChatScreen/ChatScreen';
import useContacts from './src/screens/ContactsScreen/useContacts';
import rootReducer from './src/stores/reducers';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const RootTab = createBottomTabNavigator(
  {
    ContactScreen: {
      screen: ContactScreen,
      showLabel: false,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ tintColor: '#6982c2' }} source={require('./assets/contacts.png')} />
        ),
      }),
    },
    ChatsScreen: {
      screen: ChatsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ tintColor: '#6982c2' }} source={require('./assets/chat.png')} />
        ),
      }),
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ tintColor: '#6982c2' }} source={require('./assets/settings.png')} />
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

const RootStack = createStackNavigator({
  MainScreen: MainScreen,
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: () => ({
      title: `Your Phone`,
      headerBackTitle: `Back`,
    }),
  },
  CreateProfileScreen: {
    screen: CreateProfileScreen,
    navigationOptions: () => ({
      title: `Your Name`,
    }),
  },
  ContactScreen: {
    screen: RootTab,
    navigationOptions: () => ({
      title: `Contacts`,
      headerLeft: null,
      gesturesEnabled: false,
    }),
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: () => ({
      title: `Chat`,
    }),
  },
});

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  const { isLoading } = useContacts();
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;
