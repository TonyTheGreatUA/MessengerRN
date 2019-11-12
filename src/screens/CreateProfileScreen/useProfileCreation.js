//@flow
import { useState, useCallback } from 'react';
import ImagePicker from 'react-native-image-picker';

const useProfileCreation = () => {
  const [avatar, setAvatar] = useState(null);
  const [isPhotoAdded, setIsPhotoAdded] = useState(false);

  const handleChoosePhoto = useCallback(() => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      setAvatar(response.uri);
      setIsPhotoAdded(true);
    });
  }, []);

  return { isPhotoAdded, avatar, handleChoosePhoto };
};

export default useProfileCreation;
