/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          inlineRequires: true,
          experimentalImportSupport: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'svg'],
      assetExts: assetExts.filter(ext => ext !== 'svg'),
    },
  }
})()
