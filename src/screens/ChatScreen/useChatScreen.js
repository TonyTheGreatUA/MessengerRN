//@flow
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import { storeUserData } from '../../stores/userDataInfo/actions';

const msgAnswer = [
  { message: 'Cool' },
  { message: 'Nice' },
  { message: 'Interesting' },
  { message: 'Something new' },
];

const useChatScreen = (email: string) => {
  const [textInput, setTextInput] = useState('');
  const userFirstName = useSelector(state => state.creationFormInfo.name);
  const dispatch = useDispatch();
  const messageData = useSelector(state => state.userDataInfo.userData);

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextInput(val);
  }, []);

  const currentData = messageData.filter(item => item.email === email)[0];

  const onAddMessage = () => {
    let newMessages = messageData.map(item => {
      return item.email === email
        ? {
            ...item,
            messages: [...item.messages, { userMessage: textInput, name: userFirstName }],
          }
        : item;
    });

    setTimeout(() => {
      newMessages = messageData.map(item => {
        return item.email === email
          ? {
              ...item,
              messages: [
                ...item.messages,
                { userMessage: textInput, name: userFirstName },
                { message: msgAnswer[Math.floor(Math.random() * 3)].message },
              ],
            }
          : item;
      });
      dispatch(storeUserData(newMessages));
    }, 2000);
    dispatch(storeUserData(newMessages));
    setTextInput('');
  };
  return { messageData, handleTextInput, onAddMessage, textInput, userFirstName, currentData };
};

export default useChatScreen;
