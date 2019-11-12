//@flow
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './RegistrationScreen.style';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const RegistrationScreen = ({ navigation }: Props) => {
  const handleNavigation = () => {
    navigation.navigate('CreateProfileScreen');
  };

  return (
    <View style={styles.registrationView}>
      <Image style={styles.imageSize} source={require('../../../assets/phoneform.png')} />
      <Text style={styles.formText}>Input your phone number </Text>
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
      <TouchableOpacity style={styles.mainButton} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
