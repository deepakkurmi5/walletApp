import useSWR from 'swr';

import api from '../apis';
import {holding} from '../data';

interface ApiItemProps {
  id: string;
  current_price: number;
  price_change_percentage_24h: number;
  symbol: string;
  name: string;
  image: string;
  sparkline_in_7d: {
    price: number[];
  };
}

const swrKey = (params: {
  currency: string;
  orderBy: string;
  sparkline: boolean;
  priceChangePer: string;
  per_page: number;
  page: number;
}) => ({
  key: 'market',
  params,
});

const fetcher =
  () =>
  async ({params}: SWRParams<typeof swrKey>) => {
    const ids = holding
      .map(item => {
        return item.id;
      })
      .join(',');

    const resp = await fetch(
      `${api.coingeckoMarkets}?vs_currency=${params.currency}&order=${params.orderBy}&per_page=${params.per_page}&page=${params.page}&sparkline=${params.sparkline}&locale=en&price_change_percentage=${params.priceChangePer}&ids=${ids}`,
    );
    if (resp.status !== 200) {
      throw new Error('Can not fetch the price');
    }
    const data = await resp.json();

    const myHoldings = data.map((item: ApiItemProps) => {
      const coin = holding.find(a => {
        return a.id === item.id;
      });
      let price24d =
        item.current_price / (1 + item.price_change_percentage_24h * 0.01);

      let quntity = coin?.qty ? coin.qty : 0;

      return {
        id: item.id,
        symbol: item.symbol,
        name: item.name,
        image: item.image,
        current_price: item.current_price,
        qty: coin?.qty,
        total: item.current_price * quntity,
        price_change_percentage_24h: item.price_change_percentage_24h,
        holding_value_change_24d: (item.current_price - price24d) * quntity,
        sparkline_in_7d: {
          value: item.sparkline_in_7d.price.map(price => price * quntity),
        },
      };
    });

    return myHoldings;
  };

export default (params: Voidable<SWRArgs<typeof swrKey>>, options = {}) =>
  useSWR(params && swrKey(params), fetcher(), options);
