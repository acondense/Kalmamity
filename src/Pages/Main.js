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

import Newsfeed from './Newsfeed';
import Alertfeed from './Alertfeed';
import Message from './Message';
import Kalmap from './Kalmap';
import Account from './Account';

import TabBar from '../Components/TabBar';

export default class Main extends Component {
  render() {
    return (
      <ScrollableTabView tabBarPosition='top' renderTabBar={() => <TabBar />}>
        <Newsfeed tabLabel="ios-paper" />
        <Alertfeed tabLabel="ios-alert" />
        <Message tabLabel="ios-chatboxes"/>
        <Kalmap tabLabel="ios-pin" />
        <Account tabLabel="ios-list" />
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
