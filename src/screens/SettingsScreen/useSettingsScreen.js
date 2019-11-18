import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { saveCreationData } from '../../stores/creationFormInfo/actions';

const useSettingsScreen = () => {
  const userPhoneNumber = useSelector(state => state.registrationFormInfo.phoneNumber);
  const userFirstName = useSelector(state => state.creationFormInfo.name);
  const userLastName = useSelector(state => state.creationFormInfo.surname);

  const [userInfo, setUserInfo] = useState({
    name: userFirstName,
    surname: userLastName,
    phone: userPhoneNumber,
  });

  const [isEditClicked, setIsEditClicked] = useState(false);

  const dispatch = useDispatch();

  const userData = { userFirstName, userLastName, userPhoneNumber };

  const handleTextInput = (key: string) => {
    return (val: string) => setUserInfo({ ...userData, [key]: val });
  };

  const handleEditPressed = () => {
    setIsEditClicked(!isEditClicked);
    if (isEditClicked) {
      dispatch(saveCreationData(userFirstName, userLastName, userPhoneNumber));
    }
  };

  return {
    userPhoneNumber,
    userFirstName,
    userLastName,
    handleTextInput,
    handleEditPressed,
    isEditClicked,
  };
};

export default useSettingsScreen;
