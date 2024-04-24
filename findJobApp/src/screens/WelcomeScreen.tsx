import React from "react";
import {ImageBackground, StyleSheet, View, ScrollView} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles, Colors } from "../styles";
import WelcomeScreenContent from "./WelcomeScreenContent";

const CONTENT_CONTAINER_BORDER_RADIUS = 30
function WelcomeScreen() {
  return (
    <View style={[styles.container]}>
      <ImageBackground
        style={styles.imageContainer}
        source={require('../assets/images/background.jpg')}
      />
      <View style={styles.welcomeContentContainer}>
        <SafeAreaView>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}>
            <WelcomeScreenContent />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    ...appStyles.fullSize,
    justifyContent: 'flex-end',
  },
  welcomeContentContainer: {
    width: '100%',
    backgroundColor: Colors['layout.white'],
    borderTopLeftRadius: CONTENT_CONTAINER_BORDER_RADIUS,
    borderTopRightRadius: CONTENT_CONTAINER_BORDER_RADIUS,
  },
  imageContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: '50%',
    position: 'absolute',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
})


export default WelcomeScreen
