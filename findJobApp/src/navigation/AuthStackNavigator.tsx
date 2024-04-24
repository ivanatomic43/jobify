import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackParamsList} from './navigation-types';

import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = (): React.JSX.Element => {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name='PasswordReset' component={PasswordResetScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
