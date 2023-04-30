import {configureStore} from '@reduxjs/toolkit';
import {cryptoSlice, cryptoState} from '../slices/criptoSlice';

export interface AppStore {
  crypto: cryptoState;
}

export const store = configureStore<AppStore>({
  reducer: {
    crypto: cryptoSlice.reducer,
  },
});
