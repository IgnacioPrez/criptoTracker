import React from 'react';
import {FlatList, Pressable, RefreshControl} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../card/Card';
import {AddCryptoLink, ContainerList, LinkAddStyle} from './styles';
import {RootState} from '../../app/rootReducer';
import {useUpdate} from '../../hooks/useUpdate';

const CryptoContainer = ({navigation}: any) => {
  const stateCrypto = useSelector((state: RootState) => state.crypto.crypto);
  const {onRefresh, refreshing} = useUpdate();

  return (
    <ContainerList>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={stateCrypto}
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
