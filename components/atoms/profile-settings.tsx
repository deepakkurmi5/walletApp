import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../theme';
import {icons} from '../../constants';

const ProfileSettings = ({
  title,
  value,
  type,
  onPress,
}: {
  title: string;
  value: string | boolean;
  type: string;
  onPress: (faceId: boolean) => void;
}) => {
  if (type === 'button') {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
        }}>
        <Text style={{flex: 1, color: colors.white, ...fonts.h3}}>{title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              marginRight: sizes.radius,
              color: colors.lightGray3,
              ...fonts.h3,
            }}>
            {value}
          </Text>
          <Image
            source={icons.arrowRightIcon}
            style={{
              height: 15,
              width: 15,
              tintColor: colors.white,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
        }}>
        <Text style={{flex: 1, color: colors.white, ...fonts.h3}}>{title}</Text>
        <Switch
          value={value}
          onValueChange={(faceId: boolean) => onPress(faceId)}
        />
      </View>
    );
  }
};

export default ProfileSettings;
