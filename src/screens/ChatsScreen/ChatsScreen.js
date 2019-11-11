/*eslint-disable*/
import React, { Component } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import styles from './ChatsScreen.style';

const ChatsScreen = () => {
  const searchFilterFunction = (text: string) => {
    const newData: any = dataSource.filter(item => {
      const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setDataSource(newData);
  };
  return (
    <>
      <TextInput
        style={styles.search}
        placeholder={'Search'}
        onChangeText={text => searchFilterFunction(text)}
      />
      <FlatList />
    </>
  );
};

export default ChatsScreen;
