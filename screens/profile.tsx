import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';

import {profile} from '../data';
import {colors, fonts, sizes} from '../theme';
import SafeArea from '../components/atoms/safe-area';
import MainLayout from './main-layout';
import HeaderBar from '../components/atoms/header-bar';
import {icons} from '../constants';
import SectionTitle from '../components/atoms/section-title';
import ProfileSettings from '../components/atoms/profile-settings';

const Profile = () => {
  const [faceId, setFaceId] = useState<boolean>(true);

  return (
    <SafeArea>
      <MainLayout>
        <HeaderBar title="Profile" />
        <ScrollView>
          <View style={{flexDirection: 'row', marginTop: sizes.radius + 10}}>
            <View style={{flex: 1}}>
              <Text style={{color: colors.white, ...fonts.h3}}>
                {profile.email}
              </Text>
              <Text
                style={{
                  color: colors.lightGray3,
                  ...fonts.body4,
                  lineHeight: 25,
                }}>
                ID: {profile.id}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={icons.verifiedIcon}
                style={{height: 20, width: 20, tintColor: colors.lightGreen}}
              />
              <Text
                style={{
                  color: colors.lightGreen,
                  marginLeft: sizes.base,
                  ...fonts.body4,
                }}>
                Verified
              </Text>
            </View>
          </View>
          {/* APP SECTION */}
          <SectionTitle title="APP" />
          <ProfileSettings
            title="Launch Screen"
            value="Home"
            type="button"
            onPress={() => console.log('Pressed')}
          />
          <ProfileSettings
            title="Appearance"
            value="Dark"
            type="button"
            onPress={() => console.log('Pressed')}
          />

          {/* ACCOUNT SECTION */}
          <SectionTitle title="ACCOUNT" />
          <ProfileSettings
            title="Payment Currency"
            value="USD"
            type="button"
            onPress={() => console.log('Pressed')}
          />
          <ProfileSettings
            title="Language"
            value="English"
            type="button"
            onPress={() => console.log('Pressed')}
          />

          {/* SECURITY SECTION */}
          <SectionTitle title="SECURITY" />
          <ProfileSettings
            title="FaceID"
            value={faceId}
            type="switch"
            onPress={(value: boolean) => setFaceId(value)}
          />
          <ProfileSettings
            title="Password Settings"
            value=""
            type="button"
            onPress={() => console.log('Pressed')}
          />
          <ProfileSettings
            title="Changed Password"
            value=""
            type="button"
            onPress={() => console.log('Pressed')}
          />
          <ProfileSettings
            title="2-Factor Authentication"
            value=""
            type="button"
            onPress={() => console.log('Pressed')}
          />
        </ScrollView>
      </MainLayout>
    </SafeArea>
  );
};

export default Profile;
