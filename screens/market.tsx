import {View, Text, Animated} from 'react-native';
import React, {useRef, createRef, useCallback} from 'react';

import i18n from '../i18n';
import {CoingeckoApiParams} from '../constants';
import MainLayout from './main-layout';
import {marketTabs} from '../constants';
import useCoinMarket from '../hooks/use-coin-market';
import SafeArea from '../components/atoms/safe-area';
import HeaderBar from '../components/atoms/header-bar';
import MarketSlideTabs from '../components/molecules/market-slide-tabs';
import MarketFilterTabs from '../components/molecules/market-filter-tabs';
import MarketList from '../components/organisms/market-list';
import {metrics} from '../theme';

const MarketTabs = marketTabs.map(tab => ({
  ...tab,
  ref: createRef<View>(),
}));

const Market = () => {
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const marketTabScollViewRef = useRef(null);

  const onMarketTabPress = useCallback((index: number) => {
    if (marketTabScollViewRef?.current) {
      marketTabScollViewRef?.current?.scrollToOffset({
        offset: index * metrics.width,
      });
    }
  }, []);

  const {data: coins, isLoading: coinLoading} = useCoinMarket({
    ...CoingeckoApiParams,
  });

  if (coinLoading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }

  return (
    <SafeArea>
      <MainLayout>
        <HeaderBar title={i18n.MarketTitle} />
        <MarketSlideTabs
          MarketTabs={MarketTabs}
          scrollX={scrollX}
          onMarketTabPress={onMarketTabPress}
        />
        <MarketFilterTabs />
        <MarketList
          marketTabScollViewRef={marketTabScollViewRef}
          scrollX={scrollX}
          MarketTabs={MarketTabs}
          coins={coins}
          loading={coinLoading}
        />
      </MainLayout>
    </SafeArea>
  );
};

export default Market;
