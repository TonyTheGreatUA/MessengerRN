import { useSelector, useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
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

  const handleTextInput = (key: string) => {
    return (val: string) => setUserInfo({ ...userInfo, [key]: val });
  };

  const handleEditPressed = useCallback(() => {
    setIsEditClicked(!isEditClicked);
    if (isEditClicked) {
      dispatch(saveCreationData(userFirstName, userLastName, userPhoneNumber));
    }
  }, [dispatch, isEditClicked, userFirstName, userLastName, userPhoneNumber]);

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
