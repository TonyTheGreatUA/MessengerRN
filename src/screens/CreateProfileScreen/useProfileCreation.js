//@flow
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { RequestStatus } from '../../utils/RequestStatus';
import { saveCreationData, validateCreationData } from '../../stores/creationFormInfo/actions';

const useProfileCreation = () => {
  const [inputData, setInputData] = useState({
    name: '',
    surname: '',
  });
  const [avatar, setAvatar] = useState('');
  const [isPhotoAdded, setIsPhotoAdded] = useState(false);

  const dispatch = useDispatch();
  const isError = useSelector(
    state => state.registrationFormInfo.requestStatus === RequestStatus.Failure,
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

  const handleTextChanged = useCallback(
    (name: string) => {
      return (val: string) => setInputData({ ...inputData, [name]: val });
    },
    [inputData],
  );
  const handleRegistration = useCallback(() => {
    dispatch(saveCreationData(inputData.name, inputData.surname));
  }, [dispatch, inputData.name, inputData.surname]);

  const handleSubmit = useCallback(() => {
    handleRegistration();

    dispatch(validateCreationData(inputData));
  }, [dispatch, handleRegistration, inputData]);

  return { isPhotoAdded, avatar, handleChoosePhoto, handleSubmit, handleTextChanged };
};

export default useProfileCreation;
