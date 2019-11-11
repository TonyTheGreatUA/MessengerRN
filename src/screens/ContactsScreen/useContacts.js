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
  return { dataSource, isLoading };
};

export default useContacts;
