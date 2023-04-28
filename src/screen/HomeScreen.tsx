import React from 'react';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {CryptoContainer} from '../components';
import {ViewContent} from '../components/screen-style-component/style';
import {
  HeaderContent,
  HeaderInfo,
  Title,
} from '../components/header-home/style';

const HomeScreen = ({navigation}: any) => {
  return (
    <ViewContent>
      <HeaderContent>
        <HeaderInfo>
          <Title>CryptoTracker Pro</Title>
          <UserIcon name="user" size={60} />
        </HeaderInfo>
      </HeaderContent>
      <CryptoContainer navigation={navigation} />
    </ViewContent>
  );
};

export default HomeScreen;
