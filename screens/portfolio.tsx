import {View, Text} from 'react-native';
import React from 'react';
import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';

const Portfolio = () => {
  return (
    <SafeArea>
      <MainLayout>
        <View>
          <Text>Portfolio</Text>
        </View>
      </MainLayout>
    </SafeArea>
  );
};

export default Portfolio;
