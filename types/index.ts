export interface CoinProps {
  id: string;
  price_change_percentage_7d_in_currency: number;
  current_price: number;
  name: string;
  image: string;
  sparkline_in_7d: {
    price: number[];
  };
}
