import styled from 'styled-components/native';

export const ViewContent = styled.View`
  background: ${({theme}) => theme.background};
  height: 100%;
`;
export const HeaderContent = styled.View`
  background-color: ${({theme}) => theme.blue};
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderInfo = styled.View`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.background};
`;
