import React from 'react';

import {CoingeckoApiParams} from '../constants';
import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';
import useHoldings from '../hooks/use-holdings';
import PortfolioInfo from '../components/organisms/portfolio-info';
import Graph from '../components/organisms/graph';
import PortfolioAssets from '../components/organisms/portfolio-assets';

const Portfolio = () => {
  const {data: myHolding, isLoading: holdLoading} = useHoldings({
    ...CoingeckoApiParams,
  });

  return (
    <SafeArea>
      <MainLayout>
        <PortfolioInfo myHolding={myHolding} loading={holdLoading} />
        <Graph />
        <PortfolioAssets myHolding={myHolding} loading={holdLoading} />
      </MainLayout>
    </SafeArea>
  );
};

export default Portfolio;
