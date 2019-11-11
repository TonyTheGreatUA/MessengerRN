/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './CreateProfile.style';
import ImagePicker from 'react-native-image-picker';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const CreateProfileScreen = ({ navigation }: Props) => {
  const [avatar, setAvatar] = useState(null);
  const [isPhotoAdded, setIsPhotoAdded] = useState(false);

  const handleNavigation = () => {
    navigation.navigate('ContactScreen');
  };

  const handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      setAvatar(response.uri);
      setIsPhotoAdded(true);
    });
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.descrText}>Set up your photo, first and last name</Text>
      <View style={styles.registrationView}>
        <View style={styles.leftItem}>
          <TouchableOpacity onPress={handleChoosePhoto}>
            {isPhotoAdded ? (
              <View style={[styles.imageView, { backgroundImage: uri(avatar) }]}></View>
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
