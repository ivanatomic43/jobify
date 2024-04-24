import { ImageRequireSource } from 'react-native'

import { ImageProps as RNImageProps } from 'react-native/Libraries/Image/Image'
export interface ImageProps {
  source: { uri: string } | ImageRequireSource
  style: Omit<RNImageProps['style'], 'backgroundColor'>
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center'
}
