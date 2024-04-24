import React, { useMemo } from 'react'

import { SvgProps } from 'react-native-svg'

import IcnClose from '../assets/icons/icn_close.svg'
import IcnSliderArrowLeft from '../assets/icons/icn_sliderArrowLeft.svg'
import IcnSliderArrowRight from '../assets/icons/icn_sliderArrowRight.svg'
import IcnTabBarHome from '../assets/icons/icn_tabBar_home.svg'
import IcnTabBarProfile from '../assets/icons/icn_tabBar_profile.svg'

export type SvgName =
  | 'close'
  | 'tabBar_home'
  | 'tabBar_profile'
  | 'sliderArrowRight'
  | 'sliderArrowLeft'

interface Props extends SvgProps {
  name: SvgName
  size?: number
  width?: number
  height?: number
  color?: string
}

const SvgIcon = ({
  name,
  size,
  width,
  height,
  color = 'transparent',
  ...others
}: Props) => {
  const Icn = useMemo(() => {
    switch (name) {
      case 'close':
        return IcnClose
      case 'tabBar_home':
        return IcnTabBarHome
      case 'tabBar_profile':
        return IcnTabBarProfile
      case 'sliderArrowRight':
        return IcnSliderArrowRight
      case 'sliderArrowLeft':
        return IcnSliderArrowLeft
    }
  }, [name])

  return (
    <Icn
      fill={color}
      color={color}
      width={width || size || 0}
      height={height || size || 0}
      {...others}
    />
  )
}

export default SvgIcon
