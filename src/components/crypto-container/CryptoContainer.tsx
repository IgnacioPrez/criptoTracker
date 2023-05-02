import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStore} from '../../app/store';
import Card from '../card/Card';
import {AddCryptoLink, ContainerList, LinkAddStyle} from './styles';

const CryptoContainer = ({navigation}: any) => {
  const state = useSelector((state: AppStore) => state.crypto);
  return (
    <ContainerList>
      <FlatList
        data={state.crypto}
        renderItem={({item}) => (
          <Card
            item={item}
            redirect={() => {
              navigation.navigate('DeleteScreen', {
                cryptoId: item.id,
              });
            }}
          />
        )}
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
