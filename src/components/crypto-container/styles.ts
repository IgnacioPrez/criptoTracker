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
  color: ${({theme}) => theme.text};
`;

export const CloseModal = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const TextModal = styled.Text`
  color: #000;
  padding: 2px;
  font-size: 22px;
  text-align: center;
`;

export const QuestionsModal = styled.View`
  width: 100%;
  margin-top: 8px;
`;

export const ContainerBtnModal = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 8px;
  margin-top: 8px;
`;
