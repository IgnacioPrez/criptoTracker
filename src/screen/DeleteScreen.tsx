import React, {useEffect, useState} from 'react';
import {cryptoData} from '../model/crypto.model';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteCrypto} from '../slices/criptoSlice';
import {
  CardDecription,
  ContainerDeleteScreen,
  DeleteContainerBtn,
  FirstInfoDelete,
  HeaderDelete,
  ImageAndInfo,
  ImageDelete,
  TextDescription,
  TitleText,
} from '../components/delete-screen-components/style';
import {formatter} from '../utilities/functions.utils';
import {Loader} from '../components/loader';
import {SEARCH_URL, IMAGE_URL} from '@env';

const DeleteScreen = (props: any) => {
  const {cryptoId} = props.route.params;
  const [crypto, setCrypto] = useState<cryptoData>();
  const Dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${SEARCH_URL}/${cryptoId}/metrics?fields=id,name,slug,symbol,market_data`,
    )
      .then(response => response.json())
      .then(({data}) => setCrypto(data))
      .catch(error => console.error(error));
  }, []);

  const actionDelete = (id: string) => {
    Dispatch(deleteCrypto(id));
    props.navigation.navigate('HomeScreen');
  };
  return (
    <ContainerDeleteScreen>
      {!crypto ? (
        <Loader />
      ) : (
        <>
          <HeaderDelete>
            <TitleText>
              Are you sure you want to remove {crypto.name} from your list ?
            </TitleText>
          </HeaderDelete>
          <CardDecription>
            <ImageAndInfo>
              <ImageDelete
                source={{
                  uri: `${IMAGE_URL}${crypto.id}/64.png?v=`,
                }}
              />
              <FirstInfoDelete>
                <TextDescription>name: {crypto.name}</TextDescription>
                <TextDescription>
                  Price in USD :{' '}
                  {formatter.format(crypto.market_data.price_usd)}
                </TextDescription>
              </FirstInfoDelete>
            </ImageAndInfo>
            <DeleteContainerBtn>
              <Button
                title="Delete"
                color="#3aa856"
                onPress={() => actionDelete(crypto.id)}
              />
              <Button
                title="Cancel"
                color="red"
                onPress={() => props.navigation.navigate('HomeScreen')}
              />
            </DeleteContainerBtn>
          </CardDecription>
        </>
      )}
    </ContainerDeleteScreen>
  );
};

export default DeleteScreen;
