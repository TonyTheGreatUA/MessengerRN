//@flow
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import styles from './ChatScreen.style';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const ChatScreen = ({ navigation }: Props) => {
  const name = navigation.getParam('name');
  const surname = navigation.getParam('surname');
  const image = navigation.getParam('image');
  const online = navigation.getParam('age');
  console.log(online);
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

      <View style={styles.lowerBlock}>
        <View style={styles.separator} />
        <View style={styles.sendMessage}>
          <TextInput style={styles.search} placeholder={'Write a message...'} />
          <TouchableOpacity style={styles.send}>
            <Image style={styles.sendButton} source={require('../../../assets/send.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
