import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';

import {mixPath, useVector} from 'react-native-redash';

import {GraphIndex, graphs} from './graph-model';
import GraphCursor from './graph-cursor';
import {colors, metrics} from '../../theme';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default () => {
  const translation = useVector();
  const transition = useSharedValue(0);
  const previous = useSharedValue<GraphIndex>(0);
  const current = useSharedValue<GraphIndex>(0);
  const animatedProps = useAnimatedProps(() => {
    const previousPath = graphs[previous.value].data.path;
    const currentPath = graphs[current.value].data.path;
    return {
      d: mixPath(transition.value, previousPath, currentPath),
    };
  });

  return (
    <View style={{backgroundColor: 'transparent', marginTop: 50}}>
      <Svg width={metrics.width} height={180}>
        <AnimatedPath
          animatedProps={animatedProps}
          fill="transparent"
          stroke={colors.lightGreen}
          strokeWidth={2}
        />
      </Svg>
      <GraphCursor translation={translation} index={current} />
    </View>
  );
};
