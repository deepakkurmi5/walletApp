import {View, Text} from 'react-native';
import React from 'react';
import {sizes, colors, fonts} from '../../theme';

const SectionTitle = ({title}: {title: string}) => {
  return (
    <View style={{marginTop: sizes.padding}}>
      <Text style={{color: colors.lightGray, ...fonts.h4}}>{title}</Text>
    </View>
  );
};

export default SectionTitle;
