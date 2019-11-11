//@flow
/*eslint-disable*/

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import useContacts from './useContacts';
import styles from './ContactScreen.style';

const ContactScreen = () => {
  const { dataSource, isLoading } = useContacts();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={dataSource}
        style={styles.container}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity>
              <View style={styles.userCard}>
                <View style={styles.photoView}>
                  <Image style={styles.userPhoto} source={{ uri: item.picture.thumbnail }} />
                </View>
                <View style={styles.nameView}>
                  <Text style={styles.nameText}>{`${item.name.first} ${item.name.last}`}</Text>
                  <Text style={{ color: '#6982c2' }}>online</Text>
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
