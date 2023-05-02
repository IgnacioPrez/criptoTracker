import React, {useEffect, useState} from 'react';
import {ImageUrl, searchUrl} from '../services/urls';
import styled from 'styled-components/native';
import {cryptoData} from '../model/crypto.model';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteCrypto} from '../slices/criptoSlice';

const DeleteScreen = (props: any) => {
  const {cryptoId} = props.route.params;
  const [crypto, setCrypto] = useState<cryptoData>();
  const Dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${searchUrl}/${cryptoId}/metrics?fields=id,name,slug,symbol,market_data`,
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
        <TextDescription>Loading...</TextDescription>
      ) : (
        <CardDecription>
          <ImageAndInfo>
            <ImageDelete
              source={{
                uri: `${ImageUrl}${crypto.id}/64.png?v=`,
              }}
            />
            <FirstInfoDelete>
              <TextDescription>name: {crypto.name}</TextDescription>
              <TextDescription>symbol: {crypto.symbol}</TextDescription>
            </FirstInfoDelete>
          </ImageAndInfo>
          <DeleteContainerBtn>
            <Button
              title="Yes"
              color="#3aa856"
              onPress={() => actionDelete(crypto.id)}
            />
            <Button
              title="No"
              color="red"
              onPress={() => props.navigation.navigate('HomeScreen')}
            />
          </DeleteContainerBtn>
        </CardDecription>
      )}
    </ContainerDeleteScreen>
  );
};

export default DeleteScreen;

export const ContainerDeleteScreen = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardDecription = styled.View`
  width: 90%;
  height: 200px;
  display: flex;
  align-self: center;
`;

export const ImageAndInfo = styled.View`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;
export const ImageDelete = styled.Image`
  width: 75px;
  height: 75px;
`;

export const FirstInfoDelete = styled.View`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const TextDescription = styled.Text`
  color: #000;
  font-weight: bold;
`;
export const DeleteContainerBtn = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;
