import {View} from 'react-native';
import type {ViewStyle} from 'react-native';
import React from 'react';

const Chart = ({containerStyle}: {containerStyle: ViewStyle | undefined}) => {
  return <View style={{...containerStyle}} />;
};

export default Chart;
