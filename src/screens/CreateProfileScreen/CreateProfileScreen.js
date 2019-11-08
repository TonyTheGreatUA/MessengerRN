/*eslint-disable*/
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const CreateProfileScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default CreateProfileScreen;
