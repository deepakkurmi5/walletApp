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
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopColor: 'transparent',
          height: 105,
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
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <TabIcon
                focused={focused}
                label="Portfolio"
                icon={icons.portfolioIcon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <TabIcon
                focused={focused}
                label="Trade"
                icon={icons.tradeIcon}
                isTrade={true}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <TabIcon
                focused={focused}
                label="Profile"
                icon={icons.profileIcon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
