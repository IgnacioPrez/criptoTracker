import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../card/Card';
import {AddCryptoLink, ContainerList, LinkAddStyle} from './styles';
import {RootState} from '../../app/rootReducer';

const CryptoContainer = ({navigation}: any) => {
  const state = useSelector((state: RootState) => state.crypto.crypto);

  return (
    <ContainerList>
      <FlatList
        data={state}
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
