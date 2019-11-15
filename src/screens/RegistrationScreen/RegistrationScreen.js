//@flow
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './RegistrationScreen.style';
import useRegistrationScreen from './useRegistrationScreen';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const RegistrationScreen = ({ navigation }: Props) => {
  const { handleSubmit, isError, inputData, handleTextChanged } = useRegistrationScreen();
  const hasError = isError ? styles.inputError : styles.inputDefault;

  const handleNavigation = () => {
    if (inputData.phoneNumber.length > 9 && inputData.phoneNumber.length < 14) {
      return navigation.navigate('CreateProfileScreen');
    }
  };
  const onButtonClick = () => {
    handleNavigation();
    handleSubmit();
  };
  return (
    <View style={styles.registrationView}>
      <Image style={styles.imageSize} source={require('../../../assets/phoneform.png')} />
      <Text style={styles.formText}>Input your phone number </Text>
      <TextInput
        style={[styles.input, hasError]}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        onChangeText={handleTextChanged('phoneNumber')}
      />
      <TouchableOpacity
        disabled={inputData.phoneNumber.length < 9}
        style={styles.mainButton}
        onPress={onButtonClick}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
