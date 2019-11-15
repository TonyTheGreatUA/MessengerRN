//@flow
import React from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './ChatsScreen.style';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import useContacts from '../ContactsScreen/useContacts';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const ChatsScreen = (props: Props) => {
  const { searchFilterFunction, userData } = useContacts();

  const openChatPage = item => {
    return props.navigation.navigate('ChatScreen', {
      name: item.name.first,
      surname: item.name.last,
      image: item.picture.thumbnail,
      age: item.dob.age,
      dialogue: item.messages,
      email: item.email,
    });
  };

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
            <TouchableOpacity
              onPress={() => {
                openChatPage(item);
              }}
            >
              <View style={styles.userCard}>
                <View style={styles.photoView}>
                  <Image style={styles.userPhoto} source={{ uri: item.picture.thumbnail }} />
                </View>
                <View style={styles.nameView}>
                  <Text style={styles.nameText}>{`${item.name.first} ${item.name.last}`}</Text>
                  <Text style={styles.messageText}>
                    {item.messages[item.messages.length - 1].message}
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

export default ChatsScreen;
