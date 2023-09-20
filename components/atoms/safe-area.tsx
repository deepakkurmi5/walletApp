import {View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors} from '../../theme';

const SafeArea = ({children}: PropsWithChildren) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        backgroundColor: colors.black,
      }}>
      {children}
    </View>
  );
};

export default SafeArea;
