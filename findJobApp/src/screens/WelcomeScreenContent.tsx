import React from 'react'
import { View, StyleSheet } from 'react-native'

import { useLinkTo, } from '@react-navigation/native'

import { Text, Button, Separator, Link } from '../components'

import { appStyles, Colors } from '../styles'
import useNavigate from '../hooks/useNavigate'

const WelcomeScreenContent = () => {
  const linkTo = useLinkTo()
  const { navigateToSignUp } = useNavigate()

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <>
          <Separator height={25} />
          <Text type="title.h1" color="text.primary">
            Jobify
          </Text>
          <Separator height={20} />
          <Text type="body.medium" color="text.primary" textAlign="left">
            Your Gateway to New Opportunities! Browse thousands of job listings,
            tailor your search with advanced filters, and apply with ease.
          </Text>
          <Text type="body.medium" color="text.primary" textAlign="left">
            Take the next step in your career journey with Jobify today!
          </Text>
        </>

        <Separator height={40} />

        {/* NOTE: Role selection */}
        <>
          <Text type="title.h3" color="text.primary">
            Select Role
          </Text>
          <Separator height={20} />
          <View style={appStyles.inlineContainer}>
            <View style={appStyles.fullSize}>
              <Button
                text={'Company'}
                style={{ backgroundColor: Colors['app.primary'] }}
              />
            </View>
            <Separator width={9} />
            <View style={appStyles.fullSize}>
              <Button
                text={'Job seeker'}
                style={{ backgroundColor: Colors['app.secondary'] }}
                onPress={navigateToSignUp}
              />
            </View>
          </View>
        </>

        <Separator height={40} />

        {/* NOTE: Log in button */}
        <View style={appStyles.horizontalCenter}>
          <Link
            text={'Already have an account?'}
            highlightedText={'Log in'}
            onPress={() =>
              linkTo({
                screen: 'AuthStack',
                params: { screen: 'SignIn' },
              })
            }
          />
        </View>
        <Separator height={23} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...appStyles.fullSize,
    height: '100%',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  contentContainer: {
    ...appStyles.fullSize,
  },
})

export default WelcomeScreenContent
