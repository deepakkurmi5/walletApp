import {View, Text} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../theme';
import i18n from '../../i18n';
import BalanceInfo from '../atoms/balance-info';

const PortfolioInfo = ({
  myHolding,
  loading,
}: {
  myHolding: {holding_value_change_7d: number; total: number}[];
  loading: boolean;
}) => {
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const totalWallet = myHolding?.reduce((acc: number, b: {total: number}) => {
    return acc + (b.total || 0);
  }, 0);

  const valueChange = myHolding?.reduce(
    (acc: number, b: {holding_value_change_7d: number}) => {
      return acc + (b.holding_value_change_7d || 0);
    },
    0,
  );

  let perChange = (valueChange / (totalWallet - valueChange)) * 100;

  return (
    <View
      style={{
        backgroundColor: colors.gray,
        paddingHorizontal: sizes.padding,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      }}>
      <Text
        style={{
          marginTop: 50,
          color: colors.white,
          ...fonts.largeTitle,
        }}>
        {i18n.PortfolioBalTitle}
      </Text>
      <BalanceInfo
        title="Current Balance"
        balance={totalWallet}
        changePct={perChange}
        containerStyle={{marginTop: sizes.radius, marginBottom: sizes.padding}}
      />
    </View>
  );
};

export default PortfolioInfo;
