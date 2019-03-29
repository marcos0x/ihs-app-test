import React from 'react';
import { View, Text } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import appConfig from '../config/app';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Ajustes',
  };

  render() {
    const { uriPrefix } = appConfig;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <ExpoConfigView />
        <View style={{ heigth: 20 }}>
          <Text style={{ fontSize: 12 }}>
            URI: {uriPrefix}
          </Text>
        </View>
      </View>
    );
  }
}
