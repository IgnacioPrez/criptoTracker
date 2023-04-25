import React from 'react';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {CryptoContainer} from './src/components';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ViewContent>
        <HeaderContent>
          <HeaderInfo>
            <Title>CryptoTracker Pro</Title>
            <UserIcon name="user" size={60} />
          </HeaderInfo>
        </HeaderContent>
        <CryptoContainer />
      </ViewContent>
    </Provider>
  );
}
export default App;

const ViewContent = styled.View`
  background: #fffafa;
  height: 100%;
`;
const HeaderContent = styled.View`
  background-color: #4682b4;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderInfo = styled.View`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;
