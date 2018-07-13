import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { compose, withHandlers } from 'recompose'

import {
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation'

const NavigateToCButton = compose(
  withHandlers({
    onNavigateToC: () => () => {
      Linking.openURL('examp://example.com/c')
    }
  })
)(({
  onNavigateToC,
  title
}) => (<Button onPress={onNavigateToC} title={title}></Button>))

const RootRouter = createSwitchNavigator({
  Index: {
    screen: () => <View><Text>Index</Text><NavigateToCButton title="Navigate to C"/></View>,
  },
  A: {
    screen: createStackNavigator({
      D: {
        screen: () => (<View><Text>Screen D</Text></View>),
        path: 'd',
      }
    }),
    path: null,
  },
  B: {
    screen: createStackNavigator({
      C: {
        screen: () => (<View><Text>Screen C</Text></View>),
        path: 'c'
      }
    }),
    path: null,
  }
})

export default class App extends Component {
  render() {
    return (
      <RootRouter uriPrefix={/examp:\/\/example\.com\/?/}>
      </RootRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
