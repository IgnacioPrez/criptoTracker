import React from 'react';
import {ImageUrl} from '../../services/urls';
import {cryptoData} from '../../model/crypto.model';
import ArrowUp from 'react-native-vector-icons/Feather';
import ArrowDown from 'react-native-vector-icons/Feather';
import {
  CryptoCard,
  CryptoImage,
  DataCrypto,
  FirstData,
  FirstText,
  Logo,
  SecondData,
  SecondText,
  TextLogo,
  TextVarian,
} from './styles';
import {formatter} from '../../utilities/functions.utils';

interface Props {
  item: cryptoData;
  redirect: () => any;
}

const Card = ({item, redirect}: Props) => {
  const {market_data, id, name, symbol} = item;
  const roundNumber = market_data.percent_change_btc_last_24_hours.toFixed(2);
  const roundNegative = Number(roundNumber) < 0;
  return (
    <CryptoCard onPress={redirect}>
      <Logo>
        <CryptoImage
          source={{
            uri: `${ImageUrl}${id}/64.png?v=`,
          }}
        />
        <TextLogo>
          <FirstText>{name}</FirstText>
          <SecondText>{symbol}</SecondText>
        </TextLogo>
      </Logo>
      <DataCrypto>
        <FirstData>
          <FirstText>{formatter.format(market_data.price_usd)}</FirstText>
        </FirstData>
        <SecondData>
          <TextVarian roundNegative={roundNegative}>
            {roundNegative ? (
              <ArrowDown name="arrow-down-left" size={20} />
            ) : (
              <ArrowUp name="arrow-up-right" size={20} />
            )}
          </TextVarian>
          <TextVarian roundNegative={roundNegative}>{roundNumber}%</TextVarian>
        </SecondData>
      </DataCrypto>
    </CryptoCard>
  );
};

export default Card;
