//@flow

import { useState, useEffect, useCallback } from 'react';

const useContacts = (messageData: any) => {
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
  }, [messageData]);
  const addMessages = () => {};
  useEffect(() => {
    const newData: any = dataSource.filter(
      obj =>
        obj.name.first.toLowerCase().includes(searchInput.toLowerCase()) ||
        obj.name.last.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredData(newData);
  }, [dataSource, searchInput]);

  const searchFilterFunction = useCallback(() => {
    return (val: string) => setSearchInput(val);
  }, []);

  return { dataSource, isLoading, searchFilterFunction, filteredData };
};

export default useContacts;
