/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import { storeUserData } from '../../stores/userDataInfo/actions';
import { Animated, Dimensions } from 'react-native';
const msgAnswer = [
  { message: 'Cool' },
  { message: 'Nice' },
  { message: 'Interesting' },
  { message: 'Something new' },
];

const { width } = Dimensions.get('window');
const PADDING = 16;
const SEARCH_FULL_WIDTH = width - PADDING * 2;
const SEARCH_SHRINK_WIDTH = width - PADDING - 90;

const useChatScreen = (email: string) => {
  const [textInput, setTextInput] = useState('');
  const userFirstName = useSelector(state => state.creationFormInfo.name);
  const dispatch = useDispatch();
  const messageData = useSelector(state => state.userDataInfo.userData);

  const [inputLength, setInputLength] = useState(new Animated.Value(SEARCH_FULL_WIDTH));
  const [cancelPosition, setCancelPosition] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [searchBarFocused, setSearchBarFocused] = useState(false);

  const onInputFocus = useCallback(() => {
    Animated.parallel([
      Animated.timing(inputLength, { toValue: SEARCH_SHRINK_WIDTH, duration: 250 }),
      Animated.timing(cancelPosition, { toValue: 16, duration: 400 }),
      Animated.timing(opacity, { toValue: 1, duration: 250 }),
    ]).start();
  }, [cancelPosition, inputLength, opacity]);

  const onInputBlur = useCallback(() => {
    Animated.parallel([
      Animated.timing(inputLength, { toValue: SEARCH_FULL_WIDTH, duration: 250 }),
      Animated.timing(cancelPosition, { toValue: 0, duration: 250 }),
      Animated.timing(opacity, { toValue: 0, duration: 250 }),
    ]).start();
  }, [cancelPosition, inputLength, opacity]);

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextInput(val);
  }, []);

  const currentData = messageData.filter(item => item.email === email)[0];

  const onAddMessage = useCallback(() => {
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
  }, [dispatch, email, messageData, textInput, userFirstName]);

  return {
    searchBarFocused,
    onInputBlur,
    onInputFocus,
    messageData,
    handleTextInput,
    onAddMessage,
    textInput,
    userFirstName,
    currentData,
    opacity,
    cancelPosition,
    inputLength,
  };
};

export default useChatScreen;
