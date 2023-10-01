import {Text, View} from 'react-native';
import React from 'react';
import BalanceInfo from '../atoms/balance-info';
import IconTextButton from '../atoms/icon-text-button';
import {colors, sizes} from '../../theme';
import {icons} from '../../constants';

const WalletInfo = ({
  myHolding,
  loading,
}: {
  myHolding: {holding_value_change_24d: number; total: number}[];
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
    <View
      style={{
        paddingHorizontal: sizes.padding,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: colors.gray,
      }}>
      {!loading ? (
        <>
          <BalanceInfo
            title="Your Wallet"
            balance={totalWallet}
            changePct={perChange}
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
        </>
      ) : (
        <View>
          <Text style={{color: colors.white}}>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default WalletInfo;
