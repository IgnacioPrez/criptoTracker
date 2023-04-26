import styled, {DefaultTheme} from 'styled-components/native';

export const ContainerList = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const AddCryptoLink = styled.View`
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
`;

export const LinkAddStyle = styled.Text<DefaultTheme>`
  color: ${({theme}) => theme.grey};
`;
