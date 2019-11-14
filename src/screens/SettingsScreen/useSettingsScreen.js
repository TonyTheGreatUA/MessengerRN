import { useSelector } from 'react-redux';

const useSettingsScreen = () => {
  const userPhoneNumber = useSelector(state => state.registrationFormInfo.phoneNumber);
  const userFirstName = useSelector(state => state.creationFormInfo.name);
  const userLastName = useSelector(state => state.creationFormInfo.surname);
  return { userPhoneNumber, userFirstName, userLastName };
};

export default useSettingsScreen;
