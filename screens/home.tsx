import React from 'react';

import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';
import useHoldings from '../hooks/use-holdings';
import Graph from '../components/organisms/graph';
import useCoinMarket from '../hooks/use-coin-market';
import WalletInfo from '../components/organisms/wallet-info';
import TopCryptocurrency from '../components/organisms/top-cryptocurrency';

let fetchProperties = {
  currency: 'usd',
  orderBy: 'market_cap_desc',
  page: 1,
  per_page: 10,
  priceChangePer: '7d',
  sparkline: true,
};

const Home = () => {
  const {data: myHolding, isLoading: holdLoading} = useHoldings({
    ...fetchProperties,
  });
  const {data: coins, isLoading: coinLoading} = useCoinMarket({
    ...fetchProperties,
  });

  return (
    <SafeArea>
      <MainLayout>
        <WalletInfo myHolding={myHolding} loading={holdLoading} />
        <Graph />
        <TopCryptocurrency coins={coins} loading={coinLoading} />
      </MainLayout>
    </SafeArea>
  );
};

export default Home;
