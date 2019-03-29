// React
import { Platform, YellowBox } from 'react-native';

// Modules
import _ from 'lodash';
import Config from 'react-native-config';
import { Linking } from 'expo';

export default {
  appId: Config.APP_ID,
  uriPrefix: Linking.makeUrl('/'),
  dev: global.__DEV__,
  environment: Config.ENVIRONMENT || (global.__DEV__ ? 'dev' : 'production'),

  // DevTools
  hostname: Config.DEVTOOLS_HOSTNAME,
  port: Platform.OS === 'ios' ? Config.DEVTOOLS_PORT_IOS : Config.DEVTOOLS_PORT_ANDROID,

  // WebView
  webviewPaths: {
    // host: 'http://10.65.10.96:8080',
    // host: 'http://10.24.16.142:8080',
    host: 'https://ihs-markit-deeplinks-jeoqljdxwy.now.sh',
  }
};

// Warnings
YellowBox.ignoreWarnings([
  'Warning: Overriding previous layout animation with new one before the first began',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  'Module RCTImageLoader requires main queue setup since it overrides',
  'Module RCTVideoManager requires main queue setup since it overrides',
  '[RNDebugger]',
  'Animated: ',
]);
