/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

const replyMsg = ['Hello', 'Good Day', 'Cool', 'Awesome'];

const useChatScreen = () => {
  const [messageData, setMessageData] = useState([]);
  const [textInput, setTextInput] = useState('');
  const userFirstName = useSelector(state => state.creationFormInfo.name);

  const makeRemoteRequest = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        setMessageData(res);
      });
  }, [messageData]);

  useEffect(() => {
    makeRemoteRequest();
  }, []);

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextInput(val);
  }, []);

  const onAddMessage = () => {
    setMessageData([
      ...messageData,
      { id: messageData.id + 1, userMessage: textInput, name: userFirstName },
    ]);
    setTextInput('');
  };
  return { messageData, handleTextInput, onAddMessage, textInput, userFirstName };
};

export default useChatScreen;
