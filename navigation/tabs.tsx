import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../theme';
import Home from '../screens/home';
import Portfolio from '../screens/portfolio';
import Profile from '../screens/profile';
import Market from '../screens/market';
import TabIcon from './tab-icon';
import {icons} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <TabIcon focused={focused} label="Home" icon={icons.homeIcon} />
            );
          },
        }}
      />
      {/* <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Market" component={Market} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
