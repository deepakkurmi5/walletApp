import {View, Text} from 'react-native';
import type {ViewStyle} from 'react-native';
import React from 'react';

import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts';

const Chart = ({
  chartPrices,
  containerStyle,
}: {
  chartPrices: number[];
  containerStyle: ViewStyle | undefined;
}) => {
  return (
    <View>
      <Text>Chart</Text>
    </View>
  );
};

export default Chart;
