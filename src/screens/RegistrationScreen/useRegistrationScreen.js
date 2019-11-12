/*eslint-disable*/
import React, { useState } from 'react';

const useRegistrationScreen = (
  saveRegistrationData: (phoneNumber: string) => any,
  validateRegistrationData: (inputData: []) => any,
) => {
  const [inputData, setInputData] = useState({
    phoneNumber: '',
  });

  const handleTextChanged = (name: string) => {
    return (val: string) => setInputData({ ...inputData, [name]: val });
  };

  const handleButtonSubmit = () => {
    saveRegistrationData(phoneNumber);
    validateRegistrationData(inputData);
  };
  return { handleTextChanged, handleButtonSubmit, inputData };
};

export default useRegistrationScreen;
