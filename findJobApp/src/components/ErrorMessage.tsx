import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Separator, Text } from '../components'
import { appStyles } from '../styles'

interface Props {
  error: string
  visible: boolean
}

/**
 * For input fields
*/
const ErrorMessage: React.FC<Props> = ({ visible, error }) => (
  <>
    <Separator height={3} />
    <View style={styles.errorContainer}>
      {visible && (
        <Text type="label.small" color="layout.attention">
          {error}
        </Text>
      )}
    </View>
  </>
)

const styles = StyleSheet.create({
  errorContainer: {
    ...appStyles.center,
    minHeight: 18,
  },
})

export default ErrorMessage
