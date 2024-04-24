import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import Separator from './Separator';
import Text from './Text';
import { appStyles, Colors } from '../styles'

interface Props {
  text?: string;
}

const Loading: React.FC<Props> = ({text}) => (
  <View style={styles.container}>
    <ActivityIndicator color={Colors['app.primary']} />
    <Separator height={10} />
    <Text
      type="body.medium"
      textAlign="center"
      color="layout.black"
      style={styles.text}>
      {text ?? ''}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...appStyles.center,
    ...appStyles.fullSize,
  },
  text: {
    minHeight: 30,
    maxWidth: '90%',
  },
});

export default Loading;
