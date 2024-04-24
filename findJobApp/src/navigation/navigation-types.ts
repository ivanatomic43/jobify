import type { NavigatorScreenParams } from '@react-navigation/native'

export type HomeStackParamsList = {
  Home: undefined
}
export type ProfileStackParamsList = {
  Profile: undefined
}

export type MainTabParamsList = {
  Home: NavigatorScreenParams<HomeStackParamsList>
  Profile: NavigatorScreenParams<ProfileStackParamsList>
}

export type MainStackParamsList = {
  MainTab: NavigatorScreenParams<MainTabParamsList>
}

export type AuthStackParamsList = {
  Welcome: undefined
  SignIn: undefined
  SignUp: undefined
  PasswordReset: undefined
}

export type RootStackParamsList = {
  MainStack: NavigatorScreenParams<MainStackParamsList>
  AuthStack: NavigatorScreenParams<AuthStackParamsList>
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
