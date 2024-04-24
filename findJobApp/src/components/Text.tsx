import * as React from 'react';
import {
  TextStyle,
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

import Colors from '../styles/colors';
import FontWeights from '../styles/font-weights';

/**
 * The text variant identifier used for styling.
 */
export type TextType =
  | 'title.h1'
  | 'title.h2'
  | 'title.h3'
  | 'title.h4'
  | 'title.h5'
  | 'body.small'
  | 'body.medium'
  | 'body.large'
  | 'button'
  | 'label.small';

export interface TextProps extends RNTextProps {
  type?: TextType;
  color?: keyof typeof Colors;
  textAlign?: TextStyle['textAlign'];
  style?: StyleProp<TextStyle>;
}

/**
 * A common component for rendering text.
 */
const Text: React.FC<TextProps> = ({
  type,
  color = 'text.dark',
  textAlign = 'left',
  style,
  ...props
}) => (
  <RNText
    // @ts-ignore
    accessibilityRole="text"
    style={[
      commonStyles.text,
      type && styles[type],
      // @ts-ignore
      {color: Colors[color], textAlign: textAlign},
      style,
    ]}
    {...props}
  />
);

const commonStyles = StyleSheet.create({
  /**
   * The base text style, which should be applied to all text.
   */
  text: {
    fontFamily: 'Quicksand',
  },
  title: {
    fontWeight: FontWeights.bold,
  },
  body: {
    fontWeight: FontWeights.medium,
  },
});

const styles = StyleSheet.create({
  'title.h1': {
    ...commonStyles.title,
    fontSize: 30,
  },
  'title.h2': {
    ...commonStyles.title,
    fontSize: 24,
  },
  'title.h3': {
    ...commonStyles.title,
    lineHeight: 22,
    fontSize: 18,
  },
  'title.h4': {
    ...commonStyles.title,
    fontSize: 15,
  },
  'title.h5': {
    ...commonStyles.title,
    fontSize: 12,
    lineHeight: 18, // 150%
    textTransform: 'uppercase',
  },
  'body.small': {
    ...commonStyles.body,
    fontSize: 13,
    lineHeight: 19.5, // 150%
  },
  'body.medium': {
    ...commonStyles.body,
    fontSize: 15,
    lineHeight: 22.5, // 150%
  },
  'body.large': {
    ...commonStyles.body,
    fontSize: 18,
    lineHeight: 27, // 150%
  },
  button: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Quicksand',
    fontWeight: FontWeights.bold,
  },
  'label.small': {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Quicksand',
    fontWeight: FontWeights.regular,
  },
});

export default Text;
