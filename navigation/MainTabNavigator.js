import { createBottomTabNavigator } from 'react-navigation';

import StackNavigator from './StackNavigator';

import HomeScreen from '../screens/HomeScreen';
import BlankScreen from '../screens/BlankScreen';
import WebviewScreen from '../screens/WebviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = StackNavigator({
  key: 'Home',
  screen: HomeScreen,
  path: 'home',
  tabLabel: 'Inicio',
  tabIcon: { ios: 'ios-home', android: 'md-home' },
});

const BlankStack = StackNavigator({
  key: 'Blank',
  screen: BlankScreen,
  path: 'blank',
  tabLabel: 'Blank',
  tabIcon: { ios: 'ios-radio-button-off', android: 'md-radio-button-off' },
});

const WebviewStack = StackNavigator({
  key: 'Webview',
  screen: WebviewScreen,
  path: 'webview',
  tabLabel: 'WebView',
  tabIcon: { ios: 'ios-globe', android: 'md-globe' },
});

const SettingsStack = StackNavigator({
  key: 'Settings',
  screen: SettingsScreen,
  path: 'settings',
  tabLabel: 'Ajustes',
  tabIcon: { ios: 'ios-options', android: 'md-options' },
});

export default createBottomTabNavigator({
  HomeStack,
  BlankStack,
  WebviewStack,
  SettingsStack,
});
