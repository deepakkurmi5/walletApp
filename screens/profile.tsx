import {View, Text} from 'react-native';
import React from 'react';
import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';

const Profile = () => {
  return (
    <SafeArea>
      <MainLayout>
        <View>
          <Text>Profile</Text>
        </View>
      </MainLayout>
    </SafeArea>
  );
};

export default Profile;
