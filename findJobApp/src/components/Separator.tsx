import React, {useMemo} from 'react';
import {FlexAlignType, StyleSheet, View} from 'react-native';

interface Props {
  width?: number | string;
  height?: number | string;
  alignment?: 'start' | 'end' | 'center';
  backgroundColor?: string;
}

/**
 * Separator component to render a vertical/horizontal space.
 */
const Separator: React.FC<Props> = ({
  width,
  height,
  alignment,
  backgroundColor,
}) => {
  const alignSelf: FlexAlignType = useMemo(() => {
    switch (alignment) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
      default:
        return 'center';
    }
  }, [alignment]);

  return (
    <View
      style={[
        {height: height ?? 0, width: width ?? 0, backgroundColor, alignSelf},
        !!height && width === undefined && styles.fullWidth,
        !!width && height === undefined && styles.fullHeight,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
});

export default Separator;
