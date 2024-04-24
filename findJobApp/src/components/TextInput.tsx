import React from 'react';
import {
  Pressable,
  TextInputProps,
  TextInput as RNTextInput,
  StyleSheet,
} from 'react-native';

import Separator from './Separator';
import appStyles from '../styles/app-styles';
import Colors from '../styles/colors';
import FontWeights from '../styles/font-weights';

interface Props extends TextInputProps {
  labelText?: string;
  required?: boolean;
  invalid?: boolean;
}
/**
 * A common component for rendering text input & numeric input fields.
 */
const TextInput = ({invalid, onChangeText, ...props}: Props) => {
  return (
    <>
      <Pressable
        // @ts-ignore
        style={[styles.container, invalid && styles.containerInvalid]}
        onPress={() => {}}>
        <RNTextInput
          style={styles.textInput}
          placeholderTextColor={Colors['text.light']}
          {...props}
          multiline={false}
          onChangeText={text => {
            onChangeText?.(text);
          }}
        />
        <Separator width={15} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  container: {
    cursor: 'text',
    borderRadius: 4,
    borderColor: Colors['layout.black'],
    height: 40,
    borderWidth: 1,
    ...appStyles.inlineContainer,
    color: Colors['layout.black'],
    fontWeight: FontWeights.medium,
  },
  containerInvalid: {
    borderWidth: 1,
    borderColor: Colors['layout.attention'],
  },

  textInput: {
    fontSize: 15,
    maxHeight: '100%',
    borderColor: Colors['layout.black'],
    overflow: 'hidden',
    ...appStyles.fullSize,
    fontFamily: 'Quicksand',
  },
});

export default TextInput;
