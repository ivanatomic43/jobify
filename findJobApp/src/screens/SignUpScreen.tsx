import React, { useEffect } from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import { Button, ErrorMessage, Link, Separator, Text, TextInput } from '../components'
import { Controller, useForm } from 'react-hook-form'
import { appStyles, Colors } from '../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLinkTo } from '@react-navigation/native'
import { UserProfile } from '../types/content-types'
import { registerUser } from '../store/thunks'
import { useDispatch, useSelector } from 'react-redux'
import useNavigate from '../hooks/useNavigate'

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
  })

  const linkTo = useLinkTo()
  const dispatch = useDispatch()
  const { navigateToSignIn } = useNavigate()
  const { success } = useSelector((state:any) => state.auth)

  const onSubmit = (data: UserProfile) => {
    //@ts-ignore
    dispatch(registerUser(data))
  }

 useEffect(() => {
   // redirect user to login page if registration was successful
   if (success) navigateToSignIn()

 }, [success])

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
          <View style={styles.textContainer}>
            <Text type="title.h1" color="text.primary" textAlign="center">
              Sign up
            </Text>
          </View>

          <Separator height={30} />

          {/* NOTE: Form */}
          <View style={styles.formContainer}>
            <Controller
              control={control}
              name="firstName"
              rules={{
                maxLength: 20,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="First Name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <ErrorMessage
              visible={!!errors.firstName}
              error="First Name is required"
            />

            <Separator height={18} />

            <Controller
              control={control}
              name="lastName"
              rules={{
                maxLength: 20,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  accessible
                  placeholder="Last Name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <ErrorMessage
              visible={!!errors.lastName}
              error="Last Name is required"
            />

            <Separator height={18} />
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

            <ErrorMessage visible={!!errors.email} error="E-mail is required" />

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

            <Separator height={30} />

            {/* NOTE Register button */}
            <View style={styles.registerButtonContainer}>
              <Button
                accessibilityLabel="Register"
                text={'Register'}
                style={{ backgroundColor: Colors['app.primary'] }}
                accessibilityHint="Registers with entered data"
                onPress={handleSubmit(onSubmit)}
              />
            </View>

            <Separator height={10} />

            <View style={appStyles.horizontalCenter}>
              <Link
                text={'Back to '}
                highlightedText={'Welcome Screen'}
                onPress={() =>
                  linkTo({
                    screen: 'AuthStack',
                    params: {
                      screen: 'Welcome',
                    },
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
  textContainer: {
    paddingHorizontal: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  registerButtonContainer: {
    paddingHorizontal: 20,
  },
})

export default SignUpScreen;
