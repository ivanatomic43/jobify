import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabBottomNavigator';

import {MainStackParamsList} from './navigation-types';

const MainStack = createNativeStackNavigator<MainStackParamsList>();

const MainStackNavigator = (): React.JSX.Element => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'MainTab'}>
      <MainStack.Screen name="MainTab" component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
