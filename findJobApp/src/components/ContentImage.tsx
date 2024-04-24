import React, { useCallback, useState } from 'react'
import {
  View,
  StyleSheet,
  Image as RNImage,
  LayoutChangeEvent,
} from 'react-native'

import Animated, { FadeIn } from 'react-native-reanimated'

import Image from './Image'

import { Colors } from '../styles'
import { ImageProps } from '../types/app-types'

interface Props {
  /**
   * Image width in pixels (number) or percent (string)
   */
  width: number | string

  /**
   * Image height in pixels (number) or percent (string)
   */
  height?: number | string

  /**
   * Image aspect ratio
   */
  aspectRatio?: number

  /**
   * Image alignment within the container
   */
  alignment?: 'flex-start' | 'center' | 'flex-end'

  /**
   * Meals, tips and workouts check for complete
   */
  completed?: boolean

  style?: ImageProps['style']

  /**
   * Image URI source
   */
  imageUri?: string

  /**
   * Image resize mode
   */
  resizeMode?: ImageProps['resizeMode']
}

const ContentImage: React.FC<Props> = ({
  width,
  alignment,
  resizeMode,
  aspectRatio,
  completed,
  ...props
}) => {
  const [imageHeight, setImageHeight] = useState<number | string | undefined>(
    undefined,
  )

  const [imageWidth, setImageWidth] = useState<number | string | undefined>(
    width,
  )

  /**
   * Callback function that will calculate and set the final image size upon render.
   */
  const onLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      /**
       * Guard clause for when image source has not been set.
       * In this case no further calculations can be performed.
       */
      if (!props.imageUri) {
        return
      }

      /**
       * Guard clause for when aspectRatio prop has been set.
       * In this case, no further calculations are required -
       * it's enough to render the image with passed width and aspectRatio props.
       */
      if (aspectRatio) {
        return
      }

      /**
       * Determine image width. In case of numeric value in pixels, it will be used directly.
       * In case width is passed as percentage, it will be calculated based on the container size.
       */
      const imageWidthFinal =
        typeof width === 'number'
          ? width
          : nativeEvent.layout.width * (parseFloat(width) / 100)

      /**
       * Get the size of original image, calculate and set the size keeping its aspect ratio.
       */
      RNImage.getSize(props.imageUri, (w, h) => {
        setImageWidth(imageWidthFinal)
        setImageHeight((imageWidthFinal * h) / w)
      })
    },

    [aspectRatio, props.imageUri, width],
  )

  return (
    <View onLayout={onLayout}>
      {props.imageUri ? (
        <View>
          <Image
            {...props}
            resizeMode={resizeMode}
            source={{ uri: props.imageUri }}
            style={[
              props.style,
              { width: imageWidth, height: imageHeight },
              !!aspectRatio && { aspectRatio },
              !!alignment && { alignSelf: alignment},
            ]}
          />
        </View>)
      : null}
    </View>
  )
}
export default ContentImage
