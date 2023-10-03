import {View, Text} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../theme';

export default ({title}: {title: string}) => {
  return (
    <View
      style={{
        height: 100,
        justifyContent: 'flex-end',
      }}>
      <Text style={{color: colors.white, ...fonts.largeTitle}}>{title}</Text>
    </View>
  );
};
