import {configureStore} from '@reduxjs/toolkit';
import {cryptoData} from '../model/crypto.model';
import {cryptoSlice} from '../slices/criptoSlice';

export interface AppStore {
  crypto: Array<cryptoData>;
}

export const store = configureStore<AppStore>({
  reducer: {
    crypto: cryptoSlice.reducer,
  },
});
