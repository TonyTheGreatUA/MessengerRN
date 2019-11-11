/*eslint-disable*/

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './src/screens/MainScreen/MainScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen/CreateProfileScreen';
import rootReducer from './src/stores/reducers';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const RootStack = createStackNavigator({
  MainScreen: MainScreen,
  RegistrationScreen: RegistrationScreen,
  CreateProfileScreen: CreateProfileScreen,
});

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;
