/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';


export default class Login extends Component {
  render() {
    const goToPageTwo = () => {
      // check credential here huh?
      this.props.onLoggedInSuccess;
      console.log("Logging in");
      Actions.home({type: ActionConst.RESET});
    }
    console.log("return to log in");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}  >
          Login
        </Text>
        <Text onPress={goToPageTwo}>This is PageOne!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
