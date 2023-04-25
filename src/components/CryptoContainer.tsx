import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStore} from '../app/store';
import Card from './Card';
const CryptoContainer = () => {
  const state = useSelector((state: AppStore) => state.crypto);
  return (
    <ContainerList>
      <FlatList data={state} renderItem={({item}) => <Card {...item} />} />
      <AddCryptoLink>
        <LinkAddStyle>+ Add a Cryptocurrency</LinkAddStyle>
      </AddCryptoLink>
    </ContainerList>
  );
};

export default CryptoContainer;

export const ContainerList = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddCryptoLink = styled.View`
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
`;

const LinkAddStyle = styled.Text`
  color: #4682b4;
`;
