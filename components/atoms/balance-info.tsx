import {View, Text, Image} from 'react-native';
import type {ViewStyle} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../theme';
import {icons} from '../../constants';

const BalanceInfo = ({
  title,
  containerStyle,
  balance,
  changePct,
}: {
  title: string;
  balance: number;
  changePct: number;
  containerStyle: ViewStyle | undefined;
}) => {
  return (
    <View style={{...containerStyle}}>
      <Text style={{color: colors.lightGray3, ...fonts.h3}}>{title}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 6}}>
        <Text style={{color: colors.lightGray3, ...fonts.h3}}>$</Text>
        <Text
          style={{marginLeft: sizes.base, color: colors.white, ...fonts.h2}}>
          {balance?.toLocaleString()}
        </Text>
        <Text
          style={{
            marginLeft: sizes.base - 3,
            color: colors.lightGray3,
            ...fonts.h3,
          }}>
          USD
        </Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'flex-end', marginTop: 6}}>
        {changePct !== 0 && (
          <Image
            source={icons.upArrowIcon}
            style={{
              width: 10,
              height: 10,
              alignSelf: 'center',
              tintColor: changePct > 0 ? colors.lightGreen : colors.red,
              transform:
                changePct > 0 ? [{rotate: '45deg'}] : [{rotate: '125deg'}],
            }}
          />
        )}
        <Text
          style={{
            marginLeft: sizes.base,
            alignSelf: 'flex-end',
            color:
              changePct === 0
                ? colors.lightGray
                : changePct > 0
                ? colors.lightGreen
                : colors.red,
            ...fonts.h4,
          }}>
          {changePct.toFixed(2)}%
        </Text>
        <Text
          style={{
            marginLeft: sizes.radius,
            alignSelf: 'flex-end',
            color: colors.lightGray3,
            ...fonts.h5,
          }}>
          7d change
        </Text>
      </View>
    </View>
  );
};

export default BalanceInfo;
