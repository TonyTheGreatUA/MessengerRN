//@flow
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './CreateProfile.style';
import useProfileCreation from './useProfileCreation';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const CreateProfileScreen = ({ navigation }: Props) => {
  const handleNavigation = () => {
    navigation.navigate('RootTab');
  };

  const { isPhotoAdded, handleChoosePhoto } = useProfileCreation();

  return (
    <View style={styles.mainView}>
      <Text style={styles.descrText}>Set up your photo, first and last name</Text>
      <View style={styles.registrationView}>
        <View style={styles.leftItem}>
          <TouchableOpacity onPress={handleChoosePhoto}>
            {isPhotoAdded ? (
              <View style={styles.imageView} />
            ) : (
              <View style={styles.imageView}>
                <Image source={require('../../../assets/camera.png')} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.rightItem}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Surname" />
        </View>
      </View>
      <TouchableOpacity style={styles.mainButton} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateProfileScreen;
