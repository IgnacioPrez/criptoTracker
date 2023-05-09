import styled from 'styled-components/native';

export const ContainerAddScreen = styled.View`
  height: 100%;
  background: ${({theme}) => theme.background};
  display: flex;
  flex-direction: column;
`;

export const ViewContent = styled.View`
  background: ${({theme}) => theme.background};
  height: 100%;
`;
