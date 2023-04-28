import styled from 'styled-components/native';

export const ContainerHeaderScreen = styled.View`
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px 0px;
`;

export const TextLinkAdd = styled.Text`
  color: ${({theme}) => theme.lightGrey};
  font-size: 16px;
  padding: 6px 8px;
`;
