import {combineReducers} from 'redux';
import {cryptoSlice, cryptoState} from '../slices/criptoSlice';

export const rootReducer = combineReducers({
  crypto: cryptoSlice.reducer,
});

export interface RootState {
  crypto: cryptoState;
}
