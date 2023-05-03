import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStore} from '../../app/store';
import Card from '../card/Card';
import {AddCryptoLink, ContainerList, LinkAddStyle} from './styles';

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
