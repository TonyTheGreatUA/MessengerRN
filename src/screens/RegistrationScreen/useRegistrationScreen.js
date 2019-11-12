//@flow
import { useState, useCallback } from 'react';

const useRegistrationScreen = () => {
  const [inputData, setInputData] = useState({
    phoneNumber: '',
  });

  const handleTextChanged = useCallback(
    (name: string) => {
      return (val: string) => setInputData({ ...inputData, [name]: val });
    },
    [inputData],
  );

  return { handleTextChanged, inputData };
};

export default useRegistrationScreen;
