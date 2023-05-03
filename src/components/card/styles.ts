import styled from 'styled-components/native';

interface textProps {
  roundNegative: boolean;
}

export const CryptoImage = styled.Image`
  width: 45px;
  height: 45px;
`;

export const FirstText = styled.Text`
  color: ${({theme}) => theme.text};
  font-weight: 500;
  text-align: center;
`;
export const SecondText = styled.Text`
  color: ${({theme}) => theme.text};
  text-align: center;
`;
export const TextLogo = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Logo = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20px;
  gap: 7px;
  align-self: center;
`;
export const DataCrypto = styled.View`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
`;
export const FirstData = styled.View`
  height: 25%;
  text-align: end;
`;

export const SecondData = styled.View`
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const TextVarian = styled.Text<textProps>`
  color: ${({roundNegative, theme}) =>
    roundNegative ? theme.red : theme.green};
`;

export const CryptoCard = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-color: lightgrey;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
`;
