import React from 'react';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {ViewContent} from '../components/screen-style-component/style';
import {
  HeaderContent,
  HeaderInfo,
  Title,
} from '../components/header-home/style';
import {CryptoContainer} from '../components/crypto-container';
import {useTheme} from 'styled-components';

const HomeScreen = ({navigation}: any) => {
  const theme = useTheme();
  return (
    <ViewContent>
      <HeaderContent>
        <HeaderInfo>
          <Title>CryptoTracker Pro</Title>
          <UserIcon name="user" size={60} color={theme.background} />
        </HeaderInfo>
      </HeaderContent>
      <CryptoContainer navigation={navigation} />
    </ViewContent>
  );
};

export default HomeScreen;
