import {Animated, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {useEffect, useRef} from 'react';

import {colors, metrics, sizes} from '../theme';
import IconTextButton from '../components/atoms/icon-text-button';
import {icons} from '../constants';
import useTrade from '../contexts/trade-context';

const MainLayout = ({children}: PropsWithChildren) => {
  const {isTradeVisible} = useTrade();

  const modleAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isTradeVisible) {
      Animated.timing(modleAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modleAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeVisible, modleAnimatedValue]);

  const modelY = modleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [metrics.height, metrics.height - 275],
  });

  return (
    <View style={{flex: 1}}>
      {children}
      {isTradeVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.transparentBlack,
          }}
        />
      )}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: modelY,
          width: '100%',
          padding: sizes.padding,
          backgroundColor: colors.primary,
        }}>
        <IconTextButton
          label="Transter"
          icon={icons.transterIcon}
          onPress={() => console.log('Transter')}
        />
        <IconTextButton
          label="Withdraw"
          icon={icons.withdrawIcon}
          onPress={() => console.log('Withdraw')}
          containerStyle={{
            marginTop: sizes.base,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default MainLayout;
