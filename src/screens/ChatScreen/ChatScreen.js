//@flow
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './ChatScreen.style';
import useChatScreen from './useChatScreen';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const ChatScreen = (props: Props) => {
  const { params } = props.navigation.state;
  const name = params.name;
  const surname = params.surname;
  const image = params.image;
  const online = params.age;
  const email = params.email;

  const { handleTextInput, onAddMessage, textInput, userFirstName, currentData } = useChatScreen(
    email,
  );

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.photoView}>
          <Image style={styles.userPhoto} source={{ uri: image }} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{`${name} ${surname}`}</Text>
          <Text style={styles.onlineText}>{online > 30 ? 'online' : 'offline'}</Text>
        </View>
      </View>
      <View style={styles.separator} />

      <View style={styles.messageView}>
        <FlatList
          data={currentData.messages}
          renderItem={({ item }) => (
            <>
              {item.name === userFirstName ? (
                <View style={styles.ymessageText}>
                  <Text style={styles.senderName}>{userFirstName}</Text>
                  <Text>{item.userMessage}</Text>
                </View>
              ) : (
                <View style={styles.messageText}>
                  <Text style={styles.senderName}>{name}</Text>
                  <Text>{item.message}</Text>
                </View>
              )}
            </>
          )}
          keyExtractor={(item, id) => `${id}`}
        />
      </View>

      <View style={styles.lowerBlock}>
        <View style={styles.separator} />
        <View style={styles.sendMessage}>
          <TextInput
            style={styles.search}
            onChangeText={handleTextInput()}
            placeholder={'Write a message...'}
            value={textInput}
          />
          <TouchableOpacity onPress={onAddMessage} style={styles.send}>
            <Image style={styles.sendButton} source={require('../../../assets/send.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
