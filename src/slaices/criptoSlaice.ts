import {createSlice} from '@reduxjs/toolkit';
/* import type {PayloadAction} from '@reduxjs/toolkit'; */
import {cryptoData} from '../model/crypto.model';

export const initialState: Array<cryptoData> = [
  {
    id: '1e31218a-e44e-4285-820c-8282ee222035',
    serial_id: 6057,
    symbol: 'BTC',
    name: 'Bitcoin',
    slug: 'bitcoin',
    contract_addresses: null,
    _internal_temp_agora_id: '9793eae6-f374-46b4-8764-c2d224429791',
    metrics: {
      market_data: {
        price_usd: 28059.575497836013,
        price_btc: 1,
        price_eth: 14.740547225229793,
        volume_last_24_hours: 8159118633.449577,
        real_volume_last_24_hours: 5469615482.787881,
        volume_last_24_hours_overstatement_multiple: 1.4917170428387863,
        percent_change_usd_last_1_hour: -0.2225066480417091,
        percent_change_btc_last_1_hour: 0,
        percent_change_eth_last_1_hour: 0.06601538752804786,
        percent_change_usd_last_24_hours: -1.3626176918140758,
        percent_change_btc_last_24_hours: 0.4650356538450814,
        percent_change_eth_last_24_hours: 0.9965599976620146,
        ohlcv_last_1_hour: {
          open: 28136.75033471996,
          high: 28141.21201487483,
          low: 28115.180572131336,
          close: 28122.149149265333,
          volume: 6143552.549946449,
        },
        ohlcv_last_24_hour: {
          open: 28577.280160812792,
          high: 28608.776168852477,
          low: 28446.42676648957,
          close: 28447.20210656619,
          volume: 139183399.09478298,
        },
        last_trade_at: '2023-04-21T16:45:49Z',
      },
    },
  },
];

export const cryptoSlaice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    /*     incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }, */
  },
});

// Action creators are generated for each case reducer function
export const {} = cryptoSlaice.actions;

export default cryptoSlaice.reducer;
