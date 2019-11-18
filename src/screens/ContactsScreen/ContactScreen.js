//@flow
import React from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import useContacts from './useContacts';
import styles from './ContactScreen.style';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const ContactScreen = ({ navigation }: Props) => {
  const { isLoading, searchFilterFunction, userData } = useContacts();

  const openChatPage = item => {
    return navigation.navigate('ChatScreen', {
      name: item.name.first,
      surname: item.name.last,
      image: item.picture.large,
      age: item.dob.age,
      dialogue: item.messages,
      email: item.email,
    });
  };

  const openChat = item => {
    return () => openChatPage(item);
  };

  if (isLoading) {
    return (
      <View style={styles.loaderView}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <>
      <TextInput
        style={styles.search}
        placeholder={'Search'}
        onChangeText={searchFilterFunction()}
      />
      <FlatList
        data={userData}
        style={styles.container}
        windowSize={15}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={openChat(item)}>
              <View style={styles.userCard}>
                <View style={styles.photoView}>
                  <Image style={styles.userPhoto} source={{ uri: item.picture.large }} />
                </View>
                <View style={styles.nameView}>
                  <Text style={styles.nameText}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.onlineStatus}>
                    {item.dob.age > 30 ? 'online' : 'offline'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
          </>
        )}
        keyExtractor={(item, id) => `${id}`}
      />
    </>
  );
};

export default ContactScreen;
