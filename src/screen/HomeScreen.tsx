import React, {useEffect} from 'react';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {HeaderContent, HeaderInfo, Title, ViewContent} from '../../styles';
import {CryptoContainer} from '../components';
import {useDispatch} from 'react-redux';
import {fetchCryptos} from '../slices/criptoSlice';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);
  return (
    <ViewContent>
      <HeaderContent>
        <HeaderInfo>
          <Title>CryptoTracker Pro</Title>
          <UserIcon name="user" size={60} style={{color: 'white'}} />
        </HeaderInfo>
      </HeaderContent>
      <CryptoContainer navigation={navigation} />
    </ViewContent>
  );
};

export default HomeScreen;
