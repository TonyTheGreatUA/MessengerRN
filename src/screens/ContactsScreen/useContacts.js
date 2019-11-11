/*eslint-disable*/
import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './ContactScreen.style';

const useContacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=20&inc=name,picture')
      .then(res => res.json())
      .then(res => {
        setDataSource(res.results);
        setIsLoading(false);
      });
  }, []);

  const searchFilterFunction = text => {
    const newData = dataSource.filter(item => {
      const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setDataSource(newData);
  };

  return { dataSource, isLoading, searchFilterFunction };
};

export default useContacts;
