//@flow
/*eslint-disable*/
import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './ContactScreen.style';

const useContacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=50&inc=name,picture,dob,login')
      .then(res => res.json())
      .then(res => {
        setDataSource(res.results);
        setFilteredData(res.results);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const newData: any = dataSource.filter(
      obj =>
        obj.name.first.toLowerCase().includes(searchInput.toLowerCase()) ||
        obj.name.last.toLowerCase().includes(searchInput.toLowerCase()) ||
        obj.login.md5.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredData(newData);
  }, [searchInput]);

  const searchFilterFunction = () => {
    return (val: string) => setSearchInput(val);
  };

  return { dataSource, isLoading, searchFilterFunction, filteredData };
};

export default useContacts;
