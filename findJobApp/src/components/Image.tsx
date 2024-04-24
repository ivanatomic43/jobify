import React from 'react'
import { Image as RNImage } from 'react-native'

import { ImageProps } from '../types/app-types'

const Image: React.FC<ImageProps> = ({ source, style, resizeMode, }) => (
  <RNImage source={source} style={style} resizeMode={resizeMode} />
)
export default Image
