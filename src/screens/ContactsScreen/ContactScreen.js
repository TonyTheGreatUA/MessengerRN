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
  const { isLoading, searchFilterFunction, filteredData } = useContacts();

  const openChatPage = user => {
    return navigation.navigate('ChatScreen', {
      name: user.name.first,
      surname: user.name.last,
      image: user.picture.thumbnail,
      age: user.dob.age,
      dialogue: user.messages,
    });
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
