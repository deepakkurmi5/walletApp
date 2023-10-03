import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../theme';

export default ({
  lable,
  containerStyle,
  onPress,
}: {
  lable: string;
  containerStyle?: ViewStyle | undefined;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        backgroundColor: colors.gray1,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Text style={{color: colors.white, ...fonts.h3}}>{lable}</Text>
    </TouchableOpacity>
  );
};
