import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import BlankScreen from '../screens/BlankScreen';
import WebviewScreen from '../screens/WebviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen, path: 'home' },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const BlankStack = createStackNavigator({
  Blank: { screen: BlankScreen, path: 'blank' },
});

BlankStack.navigationOptions = {
  tabBarLabel: 'Blank',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-radio-button-off' : 'md-radio-button-off'}
    />
  ),
};

const WebviewStack = createStackNavigator({
  Webview: { screen: WebviewScreen, path: 'webview' }
});

WebviewStack.navigationOptions = {
  tabBarLabel: 'WebView',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-globe' : 'md-globe'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen, path: 'settings' }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Ajustes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const MainTabNavigator = createBottomTabNavigator({
  HomeStack: { screen: HomeStack, path: '' },
  BlankStack: { screen: BlankStack, path: '' },
  WebviewStack: { screen: WebviewStack, path: '' },
  SettingsStack: { screen: SettingsStack, path: '' },
});

export default MainTabNavigator;
