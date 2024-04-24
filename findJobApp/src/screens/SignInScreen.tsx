import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { NavigationProp, useLinkTo, useNavigation } from '@react-navigation/native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Separator, TextInput, Text, Pressable, SvgIcon, Link } from '../components'
import { Colors, appStyles } from '../styles'
import { AuthStackParamsList } from '../navigation/navigation-types'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { loginUser } from '../store/thunks'
import { UserCredentials } from '../types/content-types'
import ErrorMessage from '../components/ErrorMessage'

function SigninScreen() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })
  const linkTo = useLinkTo()
  const { loading, error } = useSelector((state:any) => state.auth)
  const dispatch = useDispatch()

  const submitForm = (data: UserCredentials) => {
     //@ts-ignore
     dispatch(loginUser(data))
   }

  const navigation =
    useNavigation<NavigationProp<AuthStackParamsList, 'SignIn'>>()

  const onBackPress = (): void => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <Separator height={30} />

        <View style={styles.contentContainer}>
          <Separator height={30} />

          {/* NOTE: Title */}
          <View style={styles.headerContainer}>
            <View style={styles.closeButtonContainer} />
            <Pressable
              hitSlop={10}
              style={styles.closeButtonContainer}
              onPress={onBackPress}>
              <SvgIcon name="close" size={14} color={Colors['text.primary']} />
            </Pressable>
          </View>

          <View style={styles.textContainer}>
            <Text type="title.h1" color="text.primary" textAlign="center">
              Log in
            </Text>
          </View>

          <Separator height={30} />

          {/* NOTE: Form */}
          <View style={styles.formContainer}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  accessible
                  value={value}
                  autoComplete="email"
                  blurOnSubmit={false}
                  placeholder="E-mail"
                  returnKeyType="next"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  accessibilityLabel="E-mail address"
                  accessibilityHint="Enters user email for register"
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
            />

            <ErrorMessage
              visible={!!errors.email}
              error="Email is required"
            />

            <Separator height={18} />
            <Controller
              control={control}
              name="password"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  accessible
                  secureTextEntry
                  blurOnSubmit
                  value={value}
                  returnKeyType="done"
                  placeholder="Password"
                  autoComplete="password"
                  autoCapitalize="none"
                  textContentType="password"
                  accessibilityLabel="Password"
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />

            <ErrorMessage
              visible={!!errors.password}
              error="Password is required"
            />

            <View>
              <Separator height={20} />

              {/* NOTE Log in button */}
              <View style={styles.logInButtonContainer}>
                <Button
                  accessibilityLabel="Log in"
                  text={'Log in'}
                  style={{ backgroundColor: Colors['app.primary'] }}
                  accessibilityHint="Logs in with entered email and password"
                  onPress={handleSubmit(submitForm)}
                />
              </View>
              <Separator height={10} />
            </View>

            <Separator height={30} />

            {/* NOTE Forgot password button */}
            <View style={appStyles.horizontalCenter}>
              <Link
                text={'Forgot your password?'}
                highlightedText={'Reset Here'}
                onPress={() =>
                  linkTo({
                    screen: 'AuthStack',
                    params: {
                      screen: 'PasswordReset',
                    },
                  })
                }
              />
            </View>

            <Separator height={8} />

            {/* NOTE Don't have an account button */}
            <View style={appStyles.horizontalCenter}>
              <Link
                text={`Don't have an account?`}
                highlightedText={'Register Here'}
                onPress={() =>
                  linkTo({
                    screen: 'AuthStack',
                    params: { screen: 'Welcome' },
                  })
                }
              />
            </View>
            <Separator height={30} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    ...appStyles.fullSize,
    justifyContent: 'flex-end',
    backgroundColor: Colors['layout.background'],
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: Colors['layout.white'],
  },
  headerContainer: {
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    ...appStyles.inlineContainer,
  },
  closeButtonContainer: {
    ...appStyles.center,
    width: 20,
    height: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  logInButtonContainer: {
    paddingHorizontal: 20,
  }
})

export default SigninScreen
