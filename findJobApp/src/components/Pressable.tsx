import React, { useCallback } from 'react'
import {
  PressableProps as RNPressableProps,
  Pressable as RNPressable,
  GestureResponderEvent,
} from 'react-native'


/**
 * Pressable component that will add opacity if it's pressed.
 */
const Pressable: React.FC<RNPressableProps> = ({
  onPress,
  style,
  children,
  ...props
}) => {

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      if (!onPress) return

      onPress(event)
    },
    [onPress],
  )

  return (
    <RNPressable
      {...props}
      style={({ pressed }) =>
        Object.assign({}, { opacity: pressed ? 0.6 : 1 }, style)
      }
      onPress={handlePress}>
      {children}
    </RNPressable>
  )
}

export default Pressable
