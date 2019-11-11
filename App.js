/*eslint-disable*/

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

import useContacts from './src/screens/ContactsScreen/useContacts';
import rootReducer from './src/stores/reducers';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
    screen: ContactScreen,
    navigationOptions: () => ({
      title: `Contacts`,
      headerLeft: null,
      gesturesEnabled: false,
    }),
  },
});

const RootTab = createBottomTabNavigator({
  ContactScreen: ContactScreen,
  ChatsScreen: ChatsScreen,
  SettingsScreen: SettingsScreen,
});

const AppContainer = createAppContainer(RootStack);
const TabContainer = createAppContainer(RootTab);

const App: () => React$Node = () => {
  const { isLoading } = useContacts();
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;
