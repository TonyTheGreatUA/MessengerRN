import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../../screens/MainScreen';
import RegistrationScreen from '../../screens/RegistrationScreen';
import CreateProfileScreen from '../../screens/CreateProfileScreen';
import ChatScreen from '../../screens/ChatScreen';
import ContactScreen from '../../screens/ContactsScreen';
import RootTab from '../RootTab';

const RootStack = createStackNavigator({
  MainScreen: MainScreen,
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: () => ({
      title: 'Your Phone',
      headerBackTitle: 'Back',
    }),
  },
  CreateProfileScreen: {
    screen: CreateProfileScreen,
    navigationOptions: () => ({
      title: 'Your Name',
    }),
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: () => ({
      title: 'Contacts',
      headerLeft: null,
      gesturesEnabled: false,
    }),
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: () => ({
      title: 'Chat',
    }),
  },
  RootTab: {
    screen: RootTab,
    navigationOptions: ({ navigation }) => ({
      title: 'MessengerRN',
      headerLeft: null,
      gesturesEnabled: false,
    }),
  },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
