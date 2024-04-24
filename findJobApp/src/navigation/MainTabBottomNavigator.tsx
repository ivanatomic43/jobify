import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type { MainTabParamsList } from './navigation-types';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Colors } from '../styles';

const MainTab = createBottomTabNavigator<MainTabParamsList>();

const MainTabNavigator = (): React.JSX.Element => {
  return (
    <MainTab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: Colors['layout.white'],
          fontSize: 14,
        },
        tabBarStyle: {
          backgroundColor: Colors['app.primary'],
        },
      }}>
      <MainTab.Screen name="Home" component={HomeScreen}></MainTab.Screen>
      <MainTab.Screen name="Profile" component={ProfileScreen}></MainTab.Screen>
    </MainTab.Navigator>
  )
};

export default MainTabNavigator;
