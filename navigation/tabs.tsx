import React from 'react';
import type {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../theme';
import Home from '../screens/home';
import Portfolio from '../screens/portfolio';
import Profile from '../screens/profile';
import Market from '../screens/market';
import TabIcon from './tab-icon';
import {icons} from '../constants';

export type TabBarCustomeButtomProps = PropsWithChildren<{
  onPress: () => void;
}>;

const Tab = createBottomTabNavigator();

function TabBarCustomeButtom({children, onPress}: TabBarCustomeButtomProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </TouchableOpacity>
  );
}

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
          tabBarButton: Props => {
            return (
              <TabBarCustomeButtom
                {...Props}
                onPress={() => console.log('trade button')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <TabIcon
                focused={focused}
                label="Market"
                icon={icons.marketIcon}
              />
            );
          },
        }}
      />
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
