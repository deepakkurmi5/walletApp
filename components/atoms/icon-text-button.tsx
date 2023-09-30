import {
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../theme';

const IconTextButton = ({
  label,
  icon,
  containerStyle,
  onPress,
}: {
  label: string;
  icon: ImageSourcePropType;
  containerStyle?: ImageStyle | null;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: sizes.radius,
        backgroundColor: colors.white,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
      <Text
        style={{
          marginLeft: sizes.base,
          ...fonts.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
