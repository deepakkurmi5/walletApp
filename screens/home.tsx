import {Text, View} from 'react-native';
import React from 'react';
import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';

const Home = () => {
  return (
    <SafeArea>
      <MainLayout>
        <View>
          <Text>Home</Text>
        </View>
      </MainLayout>
    </SafeArea>
  );
};

export default Home;
