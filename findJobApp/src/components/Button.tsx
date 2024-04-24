import React, {useCallback} from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
  TextStyle,
  type PressableProps,
  Pressable,
} from 'react-native';

import {Separator, Text} from '../components';
import {appStyles, Colors} from '../styles';

interface Props extends PressableProps {
  /**
   * Text to display within the button
   */
  text: string;

  /**
   * Boolean indicating whether the button is disabled
   *
   * @optional
   * @default false
   */
  disabled?: boolean;

  /**
   * Boolean indicating whether the button is visible
   *
   * @optional
   * @default true
   */
  visible?: boolean;

  /**
   * Boolean indicating whether the button is in loading state
   *
   * @optional
   * @default true
   */
  loading?: boolean;

  /**
   * The button type variant to use for styling.
   *
   * @optional
   * @default 'contained'
   */
  type?: string;

  /**
   * Button icon
   *
   * @optional
   */
  icon?: string | {uri: string};

  /**
   * Icon alignment
   *
   * @optional
   * @default 'start'
   */
  iconAlignment?: string;

  /**
   * Text alignment
   * @optional
   * @default 'center'
   */
  textAlignment?: string;

  /**
   * Additional styles
   *
   * @optional
   */
  style?: ViewStyle;

  /**
   * Additional styles (inner container)
   *
   * @optional
   */
  innerStyle?: ViewStyle;
}

const ICON_SIZE = 20;
const BORDER_RADIUS = 50;
const ICON_SEPARATOR_SIZE = 12;

/**
 * A common component for rendering a button.
 */
const Button: React.FC<Props> = ({
  icon,
  text,
  type,
  style,
  innerStyle,
  onPress,
  visible = true,
  loading = false,
  disabled = false,
  iconAlignment = 'flex-start',
  textAlignment = 'center',
  ...props
}) => {

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      if (!onPress) {
        return;
      }
      onPress(event);
    },
    [onPress],
  );

  if (!visible) {
    return null;
  }

  return (
    <View>
      <Pressable
        accessible
        accessibilityRole="button"
        disabled={disabled || loading}
        accessibilityState={{disabled, busy: loading}}
        style={[styles.container, style]}
        onPress={onPress}
        {...props}>
        <View style={[styles.innerContainer, innerStyle]}>
          <Text textAlign="center" color="layout.white">
            {text}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    overflow: 'hidden',
    ...appStyles.center,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: BORDER_RADIUS,
    backgroundColor: Colors['app.secondary'], // ubaci ovo kao props button type
  },
  innerContainer: {
    ...appStyles.inlineContainer,
    flex: 1,
  },
  'innerContainer.center': {
    justifyContent: 'center',
  },
  'innerContainer.start': {
    justifyContent: 'flex-start',
  },
  'innerContainer.end': {
    justifyContent: 'flex-end',
  },
  innerContainerFullWidth: {
    width: '100%',
  },
});

export default Button;
