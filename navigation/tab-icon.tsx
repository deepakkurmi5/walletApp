import {Image, Text, View} from 'react-native';
import type {ImageSourcePropType, StyleProp, ImageStyle} from 'react-native';
import React from 'react';
import {colors, fonts} from '../theme';

interface TabIconProps {
  isTrade?: Boolean;
  label: String;
  focused: Boolean;
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
}

const TabIcon = ({focused, icon, label, isTrade}: TabIconProps) => {
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 55,
          height: 55,
          borderRadius: 30,
          backgroundColor: colors.black,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: colors.white,
          }}
        />
        <Text
          style={{
            color: colors.white,
            ...fonts.h4,
            marginTop: 5,
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
          width: 22,
          height: 22,
          tintColor: focused ? colors.white : colors.secondary,
        }}
      />
      <Text
        style={{
          color: focused ? colors.white : colors.secondary,
          marginTop: 8,
          ...fonts.h4,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
