import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {cryptoData} from '../model/crypto.model';
import {Alert} from 'react-native';
import {SEARCH_URL} from '@env';

export interface cryptoState {
  crypto: cryptoData[];
  loading: boolean;
}

const initialState: cryptoState = {
  crypto: [],
  loading: false,
};

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async (endpoint: string, thunkAPI) => {
    const newEndpoint = endpoint.trim().toLocaleLowerCase();
    const response = await fetch(
      `${SEARCH_URL}/${newEndpoint}/metrics?fields=id,name,slug,symbol,market_data`,
    );
    const {data} = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue('This crypto does not exist');
    }
    return data;
  },
);

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    deleteCrypto: (state, action) => {
      state.crypto = state.crypto.filter(el => el.id !== action.payload);
    },
    updateAllCrypto: (state, action) => {
      const receivedAction = action.payload;
      const newState: cryptoData[] = state.crypto.map(element => {
        const foundedstate = receivedAction.find(
          (crypto: cryptoData) => crypto.id === element.id,
        );
        if (foundedstate) {
          return element;
        }
      });
      newState ? (state.crypto = newState) : state.crypto;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCrypto.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.loading = true;
        const cryptoFound = state.crypto.find(
          crypto => crypto.id === action.payload.id,
        );
        if (cryptoFound) {
          Alert.alert('Already on your list ❌');
          state.loading = false;
          return;
        }
        state.loading = false;
        state.crypto = [...state.crypto, action.payload];
        Alert.alert('Crypto successfully added ✅');
      })
      .addCase(fetchCrypto.rejected, state => {
        state.loading = false;
        Alert.alert('This crypto does not exist');
      });
  },
});

export const {deleteCrypto, updateAllCrypto} = cryptoSlice.actions;

export default cryptoSlice.reducer;
