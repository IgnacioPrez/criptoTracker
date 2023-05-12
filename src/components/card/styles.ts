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
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 3px;
  gap: 7px;
`;
export const DataCrypto = styled.View`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 3px;
`;
export const FirstData = styled.View`
  text-align: end;
`;

export const SecondData = styled.View`
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
  width: 90%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-color: ${({theme}) => theme.lightGrey};
  border-bottom-width: 1px;
  border-style: solid;
  align-self: center;
`;
