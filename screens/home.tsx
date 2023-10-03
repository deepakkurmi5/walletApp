import React from 'react';

import {CoingeckoApiParams} from '../constants';
import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';
import useHoldings from '../hooks/use-holdings';
import Graph from '../components/organisms/graph';
import useCoinMarket from '../hooks/use-coin-market';
import WalletInfo from '../components/organisms/wallet-info';
import TopCryptocurrency from '../components/organisms/top-cryptocurrency';

const Home = () => {
  const {data: myHolding, isLoading: holdLoading} = useHoldings({
    ...CoingeckoApiParams,
  });
  const {data: coins, isLoading: coinLoading} = useCoinMarket({
    ...CoingeckoApiParams,
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
