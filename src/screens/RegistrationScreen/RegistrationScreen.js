/*eslint-disable*/
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Picker } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './RegistrationScreen.style';
import PhoneInput from 'react-native-phone-input';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const RegistrationScreen = ({ navigation }: Props) => {
  const handleNavigation = () => {
    navigation.navigate('CreateProfileScreen');
  };

  return (
    <View style={styles.registrationView}>
      <Text style={styles.formText}>Input your phone number </Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      ></TextInput>
      <TouchableOpacity style={styles.mainButton} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
