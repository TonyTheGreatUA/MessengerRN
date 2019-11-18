//@flow
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { RequestStatus } from '../../utils/RequestStatus';
import { saveCreationData, validateCreationData } from '../../stores/creationFormInfo/actions';

const useProfileCreation = () => {
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [avatar, setAvatar] = useState('');
  const [isPhotoAdded, setIsPhotoAdded] = useState(false);

  const dispatch = useDispatch();
  const isErrorC = useSelector(
    state => state.creationFormInfo.requestStatus === RequestStatus.Failure,
  );

  const handleChoosePhoto = useCallback(() => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      setAvatar(response.uri);
      setIsPhotoAdded(true);
    });
  }, []);

  const handleTextChanged = (name: string) => {
    return (val: string) => setInputData({ ...inputData, [name]: val });
  };
  const handleRegistration = () => {
    dispatch(saveCreationData(inputData.firstName, inputData.lastName, inputData.phone));
  };

  const handleSubmit = () => {
    handleRegistration();

    dispatch(validateCreationData(inputData));
  };

  return {
    isPhotoAdded,
    avatar,
    handleChoosePhoto,
    handleSubmit,
    handleTextChanged,
    isErrorC,
    inputData,
  };
};

export default useProfileCreation;
