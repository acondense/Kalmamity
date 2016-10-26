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
import Login from './src/Pages/Default/Login';
import Main from './src/Pages/Default/Main';
import Conversation from './src/Pages/Default/Conversation';
import WriteComment from './src/Pages/Default/WriteComment';
import Post from './src/Pages/Default/Post';
import Register from './src/Pages/Default/Register';
import Capture from './src/Pages/Default/Capture';
import EditInfo from './src/Pages/Default/EditInfo';
import ViewInMap from './src/Pages/Default/ViewInMap';

import Register2 from './src/Pages/Default/Register2';

import Write from './src/Pages/MainPages/Write';

import WhatIsARescuer from './src/Pages/Presentations/WhatIsARescuer';
import InitialPage from './src/Pages/Presentations/InitialPage';
import Tutorial from './src/Pages/Presentations/Tutorial';
import TermsAndConditions from './src/Pages/Presentations/TermsAndConditions';

      // {
      // <View>
      //   <Text style={{fontSize: 30}}>Run please!</Text>
      // </View>
      // }
      // 
      // 
          

class Kalmamity extends Component {

  constructor() {
    super();
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
          <Scene initial={true} hideNavBar={true} key="initial" component={InitialPage} title="Initial Page" />
          <Scene hideNavBar={true} key="login" component={Login} title="Login"/>
          <Scene onPop={this.exitApp} initial={this.state.logged} hideNavBar={true} key="main" component={Main} panHandlers={null} onBack={backPress} direction="vertical" />
          <Scene key="conversation" component={Conversation} title="conversation" />
          <Scene key="post" component={Post} title="post" />
          <Scene key="write" component={Write} title="Write" direction="vertical" />
          <Scene key="register" component={Register} title="Register"/>
          <Scene key="whatIsARescuer" component={WhatIsARescuer} title="What Is A Rescuer"/>
          <Scene key="capture" component={Capture} title="Capture" />
          <Scene key="editinfo" component={EditInfo} title="Edit Info" />
          <Scene key="tutorial" component={Tutorial} title="Tutorial" hideNavBar={true} />
          <Scene key="register2" component={Register2} title="Register 2" hideNavBar={true} />
          <Scene key="writeComment" component={WriteComment} title="WriteComment" hideNavBar={true} />
          <Scene key="viewInMap" component={ViewInMap} title="View Post in Map" hideNavBar={true} />
          <Scene key="termsAndConditions" component={TermsAndConditions} title="Terms and Conditions" hideNavBar={true} />
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
