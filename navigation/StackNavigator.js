import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import _ from 'lodash';

import TabBarIcon from '../components/TabBarIcon';

export default function StackNavigator({ key, screen, path, tabLabel, tabIcon }) {
  const stackNavigator = createStackNavigator({
    [key]: { screen, path },
  });

  stackNavigator.navigationOptions = {
    tabBarLabel: tabLabel,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={_.isString(tabIcon) ? tabIcon : tabIcon[Platform.OS]}
      />
    ),
  };

  return { screen: stackNavigator, path: '' };
}
