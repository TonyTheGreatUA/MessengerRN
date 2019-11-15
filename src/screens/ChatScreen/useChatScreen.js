//@flow
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';
import { storeUserData } from '../../stores/userDataInfo/actions';
const msgAnswer = [
  { message: 'Cool' },
  { message: 'Nice' },
  { message: 'Interesting' },
  { message: 'Something new' },
];
const useChatScreen = (dialogue: any) => {
  const [textInput, setTextInput] = useState('');
  const userFirstName = useSelector(state => state.creationFormInfo.name);
  const dispatch = useDispatch();
  const messageData = useSelector(state => state.userDataInfo.userData);

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextInput(val);
  }, []);

  useEffect(() => {
    dispatch(storeUserData(dialogue));
  }, [dialogue, dispatch]);

  const onAddMessage = () => {
    dispatch(storeUserData([...messageData, { userMessage: textInput, name: userFirstName }]));
    setTimeout(() => {
      dispatch(
        storeUserData([
          ...messageData,
          { userMessage: textInput, name: userFirstName },
          { message: msgAnswer[Math.floor(Math.random() * 3)].message },
        ]),
      );
    }, 2000);

    setTextInput('');
  };
  return { messageData, handleTextInput, onAddMessage, textInput, userFirstName };
};

export default useChatScreen;
