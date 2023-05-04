import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {ThemeProvider} from 'styled-components/native';
import {themes} from './src/utilities/styles.theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AddScreen, HomeScreen} from './src/screen';

type RootStackParamList = {
  HomeScreen: undefined;
  AddScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <ThemeProvider theme={themes}>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarColor: 'transparent',
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddScreen" component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </ThemeProvider>
);

export default App;
