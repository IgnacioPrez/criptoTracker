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

const Card = ({id, name, symbol, metrics}: cryptoData) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const roundNumber =
    metrics.market_data.percent_change_btc_last_24_hours.toFixed(2);

  const roundNegative = Number(roundNumber) < 0;

  return (
    <CryptoCard>
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
          <FirstText>
            {formatter.format(metrics.market_data.price_usd)}
          </FirstText>
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
