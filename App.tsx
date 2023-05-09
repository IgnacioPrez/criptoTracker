import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/app/store';
import {ThemeProvider} from 'styled-components/native';
import {themes} from './src/utilities/styles.theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AddScreen, DeleteScreen, HomeScreen} from './src/screen';
import {PersistGate} from 'redux-persist/integration/react';

type RootStackParamList = {
  HomeScreen: undefined;
  AddScreen: undefined;
  DeleteScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <ThemeProvider theme={themes}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              statusBarColor: 'transparent',
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddScreen" component={AddScreen} />
            <Stack.Screen name="DeleteScreen" component={DeleteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
