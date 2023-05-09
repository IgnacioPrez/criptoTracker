export interface cryptoData {
  id: string;
  name: string;
  slug: string;
  symbol: string;
  market_data: Marketdata;
}

interface Marketdata {
  price_usd: number;
  price_btc: number;
  price_eth: number;
  volume_last_24_hours: number;
  real_volume_last_24_hours: number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_1_hour: number;
  percent_change_btc_last_1_hour: number;
  percent_change_eth_last_1_hour: number;
  percent_change_usd_last_24_hours: number;
  percent_change_btc_last_24_hours: number;
  percent_change_eth_last_24_hours: number;
  ohlcv_last_1_hour: Ohlcvlast1hour;
  ohlcv_last_24_hour: Ohlcvlast1hour;
  last_trade_at: string;
}

interface Ohlcvlast1hour {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
