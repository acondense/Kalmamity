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
  BackAndroid
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Profile from './Profile';
import Newsfeed from './Newsfeed';
import Kalmap from './Kalmap';
import Write from './Write';

import TabBar from '../Components/TabBar';


export default class Home extends Component {
  render() {
    const logout = () => Actions.pop();
    const gotoProfile = () => Actions.profile();
    return (
      <ScrollableTabView tabBarPosition='bottom' renderTabBar={() => <TabBar />}>
        <Newsfeed tabLabel="ios-paper" />
        <Profile tabLabel="ios-people" />
        <Write tabLabel="ios-create" />
        <Kalmap tabLabel="ios-pin" />
        <Profile tabLabel="md-text" />
      </ScrollableTabView>
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
