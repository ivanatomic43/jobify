import {StyleSheet} from 'react-native';

const appStyles = StyleSheet.create({
  fullSize: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalCenter: {
    justifyContent: 'center',
  },
  horizontalCenter: {
    alignItems: 'center',
  },
});

export default appStyles;
