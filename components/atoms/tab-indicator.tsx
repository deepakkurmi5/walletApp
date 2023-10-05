import {Animated} from 'react-native';
import React from 'react';

import {colors, metrics, sizes} from '../../theme';

const TabIndicator = ({
  scrollX,
  measureLayout,
}: {
  measureLayout: any[];
  scrollX: Animated.Value;
}) => {
  const inputRange = measureLayout.map((_, i) => i * metrics.width);
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: '100%',
        width: (metrics.width - sizes.radius * 2) / 2,
        borderRadius: sizes.radius,
        backgroundColor: colors.lightGray,
        transform: [{translateX}],
      }}
    />
  );
};

export default TabIndicator;
