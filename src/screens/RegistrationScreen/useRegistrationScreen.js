//@flow
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RequestStatus } from '../../utils/RequestStatus';
import {
  saveRegistrationData,
  validateRegistrationData,
} from '../../stores/registrationFormInfo/actions';

const useRegistrationScreen = () => {
  const [inputData, setInputData] = useState({
    phoneNumber: '',
  });

  const dispatch = useDispatch();
  const isError = useSelector(
    state => state.registrationFormInfo.requestStatus === RequestStatus.Failure,
  );

  const handleTextChanged = useCallback(
    (name: string) => {
      return (val: string) => setInputData({ ...inputData, [name]: val });
    },
    [inputData],
  );
  const handleRegistration = useCallback(() => {
    dispatch(saveRegistrationData(inputData.phoneNumber));
  }, [dispatch, inputData.phoneNumber]);

  const handleSubmit = useCallback(() => {
    handleRegistration();

    dispatch(validateRegistrationData(inputData));
  }, [dispatch, handleRegistration, inputData]);

  return { handleTextChanged, inputData, handleSubmit, isError };
};

export default useRegistrationScreen;
