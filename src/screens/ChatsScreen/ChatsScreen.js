//@flow
import React from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './ChatsScreen.style';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import useContacts from '../ContactsScreen/useContacts';
import useChatScreen from '../ChatScreen/useChatScreen';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const ChatsScreen = ({ navigation }: Props) => {
  const { filteredData, searchFilterFunction } = useContacts();

  const openChatPage = user => {
    return navigation.navigate('ChatScreen', {
      name: user.name.first,
      surname: user.name.last,
      image: user.picture.thumbnail,
      age: user.dob.age,
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
        data={filteredData}
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
                  <Text style={styles.messageText}>{}</Text>
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
