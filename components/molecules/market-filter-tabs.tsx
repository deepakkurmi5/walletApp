import {View} from 'react-native';
import React from 'react';
import TextButton from '../atoms/text-button';
import {sizes} from '../../theme';

const MarketFilterTabs = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: sizes.radius,
        marginHorizontal: sizes.radius,
      }}>
      <TextButton lable="USD" />
      <TextButton
        lable="% (7d)"
        containerStyle={{
          marginLeft: sizes.base,
        }}
      />
      <TextButton
        lable="Top"
        containerStyle={{
          marginLeft: sizes.base,
        }}
      />
    </View>
  );
};

export default MarketFilterTabs;
