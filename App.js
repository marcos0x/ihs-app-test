import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Linking, AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
// import DeepLinking from 'react-native-deep-linking';
import appConfig from './config/app';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    // const prefix = Linking.makeUrl('/');
    // DeepLinking.addScheme(prefix);

    Linking.addEventListener('url', this.handleUrl);

    Linking.getInitialURL()
      .then((url) => {
        if (url) {
          Linking.openURL(url);
        }
      })
      .catch(error => console.log('Error: ', error));

    /* 
    DeepLinking.addRoute('/home', (response) => {
      // this.navigate('Home');
    });

    DeepLinking.addRoute('/blank', (response) => {
      // this.navigate('Blank');
    });

    DeepLinking.addRoute('/settings', (response) => {
      // this.navigate('Settings');
    });
    */
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleUrl);
  }

  // gets the current screen from navigation state
  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }

    const route = navigationState.routes[navigationState.index];

    // dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }

    return route.routeName;
  }

  navigate(routeName) {
    this.navigator && this.navigator.dispatch(
      NavigationActions.navigate({ routeName })
    );
  }

  handleUrl = ({ url }) => {
    this.setState({ url });
    let { path, queryParams } = Expo.Linking.parse(url);
    // console.log(`Path: ${path} Data: ${JSON.stringify(queryParams)}`);

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          // DeepLinking.evaluateUrl(url);
        }
      })
      .catch(error => console.log('Error: ', error));
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      const { uriPrefix } = appConfig;

      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator
            ref={(nav) => { this.navigator = nav; }}
            uriPrefix={uriPrefix}
            onNavigationStateChange={(prevState, currentState, action) => {
              const currentScreen = this.getActiveRouteName(currentState);
              const prevScreen = this.getActiveRouteName(prevState);

              if (prevScreen !== currentScreen) {
                // console.log({ currentScreen });
              }
            }}
          />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      /* 
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      */
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'product-sans': require('./assets/fonts/ProductSansRegular.ttf'),
        'product-sans-bold': require('./assets/fonts/ProductSansBold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.log(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
