/*eslint-disable*/
import React, { useState } from 'react';
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
  const newBack = avatar ? { backgroundImage: uri(avatar) } : null;
  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      setAvatar(response.uri);
    });
  };
  return (
    <View>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <View style={[styles.imageView, newBack]}>
          <Text style={styles.imageText}>test</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateProfileScreen;
