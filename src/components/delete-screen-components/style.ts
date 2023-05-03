import styled from 'styled-components/native';

export const ContainerDeleteScreen = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-self: center;
  position: relative;
  justify-content: center;
`;

export const CardDecription = styled.View`
  width: 90%;
  height: 200px;
  display: flex;
  align-self: center;
`;

export const ImageAndInfo = styled.View`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;
export const ImageDelete = styled.Image`
  width: 75px;
  height: 75px;
`;

export const FirstInfoDelete = styled.View`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 3px;
`;

export const TextDescription = styled.Text`
  color: #000;
  font-weight: bold;
`;
export const DeleteContainerBtn = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  width: 90%;
`;

export const HeaderDelete = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  background: ${({theme}) => theme.blue};
  position: absolute;
  align-items: center;
  top: 0;
`;
