import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {cryptoData} from '../model/crypto.model';
import {baseUrl} from '../services/urls';

interface cryptoState {
  crypto: cryptoData[];
  loading: boolean;
  error: string | null;
}

const initialState: cryptoState = {
  crypto: [],
  loading: false,
  error: null,
};

export const fetchCryptos = createAsyncThunk(
  'cryptos/fetchCryptos',
  async () => {
    const response = await fetch(
      `${baseUrl}/assets?fields=id,slug,symbol,metrics/market_data&&limit=2`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const {data} = await response.json();
    return data;
  },
);

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCryptos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.loading = false;
        state.crypto = action.payload;
      })
      .addCase(fetchCryptos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const {} = cryptoSlice.actions;

export default cryptoSlice.reducer;
