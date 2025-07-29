const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

let config = getDefaultConfig(__dirname);

// Apply NativeWind config
config = withNativeWind(config, { input: "./global.css" });

// Wrap with Reanimated's config last
module.exports = wrapWithReanimatedMetroConfig(config);
