import useSWR from 'swr';

import api from '../apis';

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
    const resp = await fetch(
      `${api.coingeckoMarkets}?vs_currency=${params.currency}&order=${params.orderBy}&per_page=${params.per_page}&page=${params.page}&sparkline=${params.sparkline}&locale=en&price_change_percentage=${params.priceChangePer}`,
    );
    if (resp.status !== 200) {
      throw new Error('Can not fetch the price');
    }
    const data = await resp.json();

    return data;
  };

export default (params: Voidable<SWRArgs<typeof swrKey>>, options = {}) =>
  useSWR(params && swrKey(params), fetcher(), options);
