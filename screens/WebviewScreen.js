import React from 'react';
import { WebView } from 'react-native';
import appConfig from '../config/app';

export default class WebviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Webview',
  };

  render() {
    return (
      <WebView
        style={{ flex: 1 }}
        source={{ uri: appConfig.webviewPaths.host }}
      />
    );
  }
}
