import {Text, View} from 'react-native';
import React from 'react';

import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';
import useHoldings from '../hooks/use-holdings';
import {colors, sizes} from '../theme';
import BalanceInfo from '../components/atoms/balance-info';
import IconTextButton from '../components/atoms/icon-text-button';
import {icons} from '../constants';
import Graph from '../components/organisms/graph';

const Home = () => {
  const {data: myHolding, isLoading} = useHoldings({
    currency: 'usd',
    orderBy: 'market_cap_desc',
    page: 1,
    per_page: 10,
    priceChangePer: '7d',
    sparkline: true,
  });

  if (isLoading) {
    return (
      <View>
        <Text style={{color: colors.red}}>Loding</Text>
      </View>
    );
  }

  const totalWallet = myHolding?.reduce((acc: number, b: {total: number}) => {
    return acc + b.total;
  }, 0);

  const valueChange = myHolding?.reduce(
    (acc: number, b: {holding_value_change_24d: number}) => {
      return acc + b.holding_value_change_24d;
    },
    0,
  );

  let perChange = (valueChange / (totalWallet - valueChange)) * 100;

  return (
    <SafeArea>
      <MainLayout>
        {/* Header - Wallet Info */}
        <View
          style={{
            paddingHorizontal: sizes.padding,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            backgroundColor: colors.gray,
          }}>
          <BalanceInfo
            title="Your Wallet"
            balance={isLoading ? 0 : totalWallet}
            changePct={isLoading ? 0 : perChange}
            containerStyle={{marginTop: 50}}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              marginBottom: -15,
              paddingHorizontal: sizes.radius,
            }}>
            <IconTextButton
              label="Transfer"
              icon={icons.transterIcon}
              containerStyle={{
                flex: 1,
                height: 40,
                marginRight: sizes.radius,
              }}
              onPress={() => console.log('Transfer')}
            />
            <IconTextButton
              label="Withdraw"
              icon={icons.withdrawIcon}
              containerStyle={{
                flex: 1,
                height: 40,
                marginRight: sizes.radius,
              }}
              onPress={() => console.log('Withdraw')}
            />
          </View>
        </View>

        <Graph />

        {/* Chart */}
        {/* <Chart
          containerStyle={{
            marginTop: sizes.padding * 2,
          }}
        /> */}
      </MainLayout>
    </SafeArea>
  );
};

export default Home;
