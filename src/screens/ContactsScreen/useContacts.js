//@flow
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeUserData } from '../../stores/userDataInfo/actions';
const userMessages = [
  { message: 'Hey there!' },
  { message: 'How is your life?' },
  { message: 'I am fine' },
];

const useContacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const dispatch = useDispatch();

  const userData = useSelector(state => state.userDataInfo.userData);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=50&inc=name,picture,dob,login,email')
      .then(res => res.json())
      .then(res => {
        res = res.results.map(item => {
          item.messages = userMessages;
          return item;
        });
        setIsLoading(false);
        dispatch(storeUserData(res));
      });
  }, [dispatch]);

  useEffect(() => {
    const newData: any = dataSource.filter(
      obj =>
        obj.name.first.toLowerCase().includes(searchInput.toLowerCase()) ||
        obj.name.last.toLowerCase().includes(searchInput.toLowerCase()),
    );
    dispatch(storeUserData(newData));
    setFilteredData(newData);
  }, [dataSource, dispatch, searchInput]);

  const searchFilterFunction = useCallback(() => {
    return (val: string) => setSearchInput(val);
  }, []);

  return { dataSource, isLoading, searchFilterFunction, filteredData, userData };
};

export default useContacts;
