import {Image, Text, View} from 'react-native';
import type {ImageSourcePropType, StyleProp, ImageStyle} from 'react-native';
import React from 'react';
import {colors} from '../theme';

interface TabIconProps {
  isTrade?: Boolean;
  label: String;
  focused: Boolean;
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
}

const TabIcon = ({focused, icon, label, iconStyle, isTrade}: TabIconProps) => {
  if (isTrade) {
    return (
      <View>
        <Text
          style={{
            color: colors.white,
          }}>
          Trade
        </Text>
      </View>
    );
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? colors.white : colors.secondary,
          ...iconStyle,
        }}
      />
    </View>
  );
};

export default TabIcon;
