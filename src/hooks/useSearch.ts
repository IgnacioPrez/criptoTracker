import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchCrypto} from '../slices/criptoSlice';
import {Alert} from 'react-native';

export const useSearch = () => {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleTextChange = (text: string) => {
    setSearch(text);
  };

  const showAlert = (message: string) => Alert.alert(message);

  const handleButtonPress = async () => {
    if (!search.length) {
      showAlert('Enter a valid cryptocurrency');
      return;
    }
    dispatch(fetchCrypto(search));
    setSearch('');
  };
  return {
    handleButtonPress,
    handleTextChange,
    search,
    setSearch,
    focus,
    setFocus,
  };
};
