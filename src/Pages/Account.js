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
  View,
  TouchableOpacity,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import AccountItem from '../Components/AccountItem';


export default class Account extends Component {
  
  gotoProfile() {
    Actions.profile();
  }

  gotoSafetyCheck() {
    Actions.safetyCheck();
  }

  gotoMap() {
    Actions.kalmap();
  }

  gotoEvacuation() {
    Actions.evacuation();
  }

  logout() {
    Actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <AccountItem title="Profile" action={() => this.gotoProfile()} />
        <AccountItem title="Safety Check" action={() => this.gotoSafetyCheck()} />
        <AccountItem title="Kalmap" action={() => this.gotoMap()} />
        <AccountItem title="Evacuation" action={() => this.gotoEvacuation()} />
        <AccountItem title="Logout" action={() => this.logout()} />
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
