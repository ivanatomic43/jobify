import React from 'react'
import { TouchableOpacity } from 'react-native'
import { appStyles } from '../styles'
import Separator from './Separator'
import Text from './Text'

export interface Props {
  text: string
  highlightedText: string
  onPress: () => void
}

const Link: React.FC<Props> = ({ text, onPress, highlightedText }) => {
  return (
    <TouchableOpacity style={appStyles.inlineContainer} onPress={onPress}>
      <Separator height={10} />
      <Text color="text.primary" type="body.medium">
        {text}
      </Text>
      <Separator width={6} />
      <Text type="body.medium" color="app.secondary">
        {highlightedText}
      </Text>
      <Separator height={10} />
    </TouchableOpacity>
  )
}

export default Link
