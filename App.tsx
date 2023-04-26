import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {CryptoContainer} from './src/components';
import {HeaderContent, HeaderInfo, Title, ViewContent} from './styles';
import {ThemeProvider} from 'styled-components/native';
import {themes} from './src/utilities/styles.theme';

const App = () => (
  <ThemeProvider theme={themes}>
    <Provider store={store}>
      <ViewContent>
        <HeaderContent>
          <HeaderInfo>
            <Title>CryptoTracker Pro</Title>
            <UserIcon name="user" size={60} style={{color: 'white'}} />
          </HeaderInfo>
        </HeaderContent>
        <CryptoContainer />
      </ViewContent>
    </Provider>
  </ThemeProvider>
);

export default App;
