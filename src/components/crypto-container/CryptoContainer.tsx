import React, {useEffect} from 'react';
import {FlatList, Pressable, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../card/Card';
import {AddCryptoLink, ContainerList, LinkAddStyle} from './styles';
import {RootState} from '../../app/rootReducer';
import {useUpdate} from '../../hooks/useUpdate';
import {updateAllCrypto} from '../../slices/criptoSlice';

const CryptoContainer = ({navigation}: any) => {
  const state = useSelector((state: RootState) => state.crypto.crypto);
  const {newState, onRefresh, refreshing} = useUpdate();
  const dispatch = useDispatch();
  () => {
    if (newState.length <= 0) {
      return;
    }
    return dispatch(updateAllCrypto(newState));
  };
  console.log('Desde cryptocontainer:', state);
  return (
    <ContainerList>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
