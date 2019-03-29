import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class BlankScreen extends React.Component {
  static navigationOptions = {
    title: 'Blank',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
