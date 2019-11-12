//@flow
import { useState } from 'react';

const useRegistrationScreen = () => {
  const [inputData, setInputData] = useState({
    phoneNumber: '',
  });

  const handleTextChanged = (name: string) => {
    return (val: string) => setInputData({ ...inputData, [name]: val });
  };

  return { handleTextChanged, inputData };
};

export default useRegistrationScreen;
