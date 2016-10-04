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
import {Scene, Router, Actions} from 'react-native-router-flux';

// Pages
import Login from './src/Pages/Login';
import Main from './src/Pages/Main';
import Conversation from './src/Pages/Conversation';
import Post from './src/Pages/Post';

import Profile from './src/Pages/Profile';
import SafetyCheck from './src/Pages/SafetyCheck';
import Kalmap from './src/Pages/Kalmap';
import Evacuation from './src/Pages/Evacuation';
import Write from './src/Pages/Write';
import Register from './src/Pages/Register';
import WhatIsARescuer from './src/Pages/WhatIsARescuer';
import Capture from './src/Pages/Capture';

class Kalmamity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
    };
  };

  componentWillMount() {
    // write a function to check if log in via, async or realm
  }

  setLoggedIn() {
    // alert("Login");
    this.setState({
      logged: true
    });
    console.log("logged: " + this.state.logged);
  }

  exitApp() {
    BackAndroid.exitApp();
  }

  render() {
    const backPress = () => {
      console.log("Exit");
      return;
    }
    return (
      <Router>
        <Scene key="root">
          <Scene onLoginSuccess={this.setLoggedIn} initial={!this.state.logged} hideNavBar={true} key="login" component={Login} title="Login"/>
          <Scene onPop={this.exitApp} initial={this.state.logged} hideNavBar={true} key="main" component={Main} panHandlers={null} onBack={backPress} direction="vertical" />
          <Scene key="conversation" component={Conversation} title="conversation" />
          <Scene key="post" component={Post} title="post" />
          <Scene key="profile" component={Profile} title="profile" />
          <Scene key="kalmap" component={Kalmap} title="Kalmap" />
          <Scene key="evacuation" component={Evacuation} title="Evacuation" />
          <Scene key="safetyCheck" component={SafetyCheck} title="Safety Check" />
          <Scene key="write" component={Write} title="Write" direction="vertical" />
          <Scene key="register" component={Register} title="Register"/>
          <Scene key="whatIsARescuer" component={WhatIsARescuer} title="What Is A Rescuer"/>
          <Scene key="capture" component={Capture} title="Capture" />
        </Scene>
      </Router>
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

AppRegistry.registerComponent('Kalmamity', () => Kalmamity);
