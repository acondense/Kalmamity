import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid,
  Animated
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Updatefeed from './Updatefeed';
import Helpfeed from './Helpfeed';
import Message from './Message';
import Kalmap from './Kalmap';
// import Account from './Account';
import Profile from './Profile';

import TabBar from '../Components/TabBar';

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      // isScrollDown: false,
    }
  }

  render() {
    return (
      <ScrollableTabView scrollWithoutAnimation={true} locked={true} tabBarPosition='bottom' renderTabBar={() => <TabBar isScrollDown={this.state.isScrollDown} />}>
        <Updatefeed tabLabel="ios-paper" />
        <Helpfeed tabLabel="ios-warning" />
        <Kalmap tabLabel="ios-map"/>
        <Profile tabLabel="ios-person" />
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
