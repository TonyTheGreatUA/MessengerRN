//@flow
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './MainScreen.styles';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const MainScreen = ({ navigation }: Props) => {
  const handleNavigation = () => {
    navigation.navigate('RegistrationScreen');
  };
  return (
    <View style={styles.mainView}>
      <Image style={styles.imageSize} source={require('../../../assets/mainScreenPic.jpg')} />
      <Text style={styles.mainText}>Welcome</Text>
      <Text style={styles.descrText}>The world's fastest messaging app.</Text>
      <TouchableOpacity style={styles.mainButton} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Start messaging</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
