import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {ProfileStackParamsList} from './navigation-types';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStackNavigator = (): React.JSX.Element => {
  return (
    <ProfileStack.Navigator
      initialRouteName={'Profile'}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerStyle: {backgroundColor: 'transparent'},
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
