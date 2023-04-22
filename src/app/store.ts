import {configureStore} from '@reduxjs/toolkit';
import {cryptoData} from '../model/crypto.model';
import {cryptoSlaice} from '../slaices/criptoSlaice';

export interface AppStore {
  crypto: Array<cryptoData>;
}

export const store = configureStore<AppStore>({
  reducer: {
    crypto: cryptoSlaice.reducer,
  },
});
