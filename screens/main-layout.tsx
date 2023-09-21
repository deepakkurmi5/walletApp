import {View} from 'react-native';
import type {PropsWithChildren} from 'react';
import React from 'react';

const MainLayout = ({children}: PropsWithChildren) => {
  return <View style={{flex: 1}}>{children}</View>;
};

export default MainLayout;
