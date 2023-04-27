import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStore} from '../../app/store';
import Card from '../card/Card';
import {AddCryptoLink, ContainerList, LinkAddStyle} from './styles';
import {Pressable} from 'react-native';

const CryptoContainer = ({navigation}) => {
  const state = useSelector((state: AppStore) => state.crypto);
  return (
    <ContainerList>
      <FlatList
        data={state.crypto}
        renderItem={({item}) => <Card {...item} />}
      />
      <AddCryptoLink>
        <Pressable onPress={() => navigation.navigate('AddScreen')}>
          <LinkAddStyle>+ Add a Cryptocurrency</LinkAddStyle>
        </Pressable>
      </AddCryptoLink>
    </ContainerList>
  );
};

export default CryptoContainer;