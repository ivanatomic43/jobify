import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthStackNavigator';
import {RootStackParamsList} from './navigation-types';
import MainStackNavigator from './MainStackNavigator';
import { useSelector } from 'react-redux';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootStackNavigator = (): React.JSX.Element => {

  const { userToken } = useSelector((state: any) => state.auth)

  return (
    <RootStack.Navigator
      initialRouteName={userToken ? 'MainStack' : 'AuthStack'}
      screenOptions={{headerShown: false}}>
      {userToken ? (
        <RootStack.Screen name="MainStack" component={MainStackNavigator} />
      ) : (
        <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
