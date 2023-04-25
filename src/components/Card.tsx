import React from 'react';
import {ImageUrl} from '../services';
import {cryptoData} from '../model/crypto.model';
import styled from 'styled-components/native';
import ArrowUp from 'react-native-vector-icons/Feather';
import ArrowDown from 'react-native-vector-icons/Feather';
const Card = (props: cryptoData) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  const roundNumber =
    props.metrics.market_data.percent_change_btc_last_24_hours.toFixed(2);
  const roundNegative = Number(roundNumber) < 0;
  return (
    <CryptoCard>
      <Logo>
        <CryptoImage
          source={{
            uri: `${ImageUrl}${props.id}/64.png?v=`,
          }}
        />
        <TextLogo>
          <FirstText>{props.name}</FirstText>
          <SecondText>{props.symbol}</SecondText>
        </TextLogo>
      </Logo>
      <DataCrypto>
        <FirstData>
          <FirstText>
            {formatter.format(props.metrics.market_data.price_usd)}
          </FirstText>
        </FirstData>
        {roundNegative ? (
          <SecondData>
            <TextVariantDown>
              <ArrowDown name="arrow-down-left" size={20} />
            </TextVariantDown>
            <TextVariantDown>{roundNumber}%</TextVariantDown>
          </SecondData>
        ) : (
          <SecondData>
            <TextVariantUp>
              <ArrowUp name="arrow-up-right" size={20} />
            </TextVariantUp>
            <TextVariantUp>{roundNumber}%</TextVariantUp>
          </SecondData>
        )}
      </DataCrypto>
    </CryptoCard>
  );
};
export default Card;
const CryptoImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const FirstText = styled.Text`
  color: #000000;
  font-weight: 500;
`;
const SecondText = styled.Text`
  color: #c0c0c0;
`;
const TextLogo = styled.View`
  display: flex;
`;
const Logo = styled.View`
  width: 40%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 5px;
`;
const DataCrypto = styled.View`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
const FirstData = styled.View`
  height: 25%;
`;

const SecondData = styled.View`
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  padding: 1px;
`;

const TextVariantUp = styled.Text`
  color: #228b22;
`;

const TextVariantDown = styled.Text`
  color: #b22222;
`;

export const CryptoCard = styled.View`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
