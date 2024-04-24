import React, { createRef } from 'react'

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'

import Loading from './components/Loading'

import RootStackNavigator from './navigation/RootStackNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { appStyles } from './styles'

const Root = (): React.JSX.Element => {
  const navigationRef = createRef<NavigationContainerRef<any>>()

  return (
    <GestureHandlerRootView style={[appStyles.fullSize]}>
      <NavigationContainer ref={navigationRef} fallback={<Loading />}>
        <RootStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Root
