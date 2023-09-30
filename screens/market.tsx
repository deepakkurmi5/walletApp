import {View, Text} from 'react-native';
import React from 'react';
import MainLayout from './main-layout';
import SafeArea from '../components/atoms/safe-area';

const Market = () => {
  return (
    <SafeArea>
      <MainLayout>
        <View>
          <Text>Market</Text>
        </View>
      </MainLayout>
    </SafeArea>
  );
};

export default Market;
