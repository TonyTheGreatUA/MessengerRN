/*eslint-disable*/

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './src/screens/MainScreen/MainScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen/CreateProfileScreen';

const RootStack = createStackNavigator({
  MainScreen: MainScreen,
  RegistrationScreen: RegistrationScreen,
  CreateProfileScreen: CreateProfileScreen,
});

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};
export default App;
