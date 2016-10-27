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

import Updatefeed from '../MainPages/Updatefeed';
import Helpfeed from '../MainPages/Helpfeed';
import Kalmap from '../MainPages/Kalmap';
import Profile from '../MainPages/Profile';

import TabBar from '../../Components/TabBar';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import { RNStorage } from '../../API/RNStorage';
import { KalmamityDB } from '../../API/Firebase';

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      location: null,
      userData: '',
      posts: [],
      
      userpostshelp: [],
      userpostsupdate: [],
      postsUpdate: [],
      postsHelp: [],
      intervalId: '',
    }
  }

  componentWillMount() {
    BackgroundGeolocation.configure({
      desiredAccuracy: 10,
      stationaryRadius: 50,
      distanceFilter: 50,
      locationTimeout: 30,
      notificationTitle: 'Background tracking',
      notificationText: 'disabled',
      debug: false,
      startOnBoot: false,
      stopOnTerminate: false,
      locationProvider: BackgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
      interval: 10000,
      fastestInterval: 10000,
      activitiesInterval: 20000,
      stopOnStillActivity: true,
      url: 'http://192.168.81.15:3000/location',
      httpHeaders: {
        'X-FOO': 'bar'
      }
    });
 
    BackgroundGeolocation.on('location', (location) => {
      //handle your locations here 
      // Actions.sendLocation(location);
      const strlocation = JSON.stringify(location);
      // alert(strlocation);
      this.setState({
        location: location,
      });
    });
 
    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      //handle stationary locations here 
      // Actions.sendLocation(stationaryLocation);
      const location = JSON.stringify(stationaryLocation);
      // alert(location);
      this.setState({
        location: stationaryLocation,
      });
    });
 
    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });
 
    BackgroundGeolocation.start(() => {
      console.log('[DEBUG] BackgroundGeolocation started successfully');    
    });

    RNStorage.load({
      key: "loginState",
      autoSync: true,
      syncInBackground: true,
    }).then(ret => {
      this.setState({
        email: ret.email,
        password: ret.password,
      });
      // fetch the neccessary data from firebase
      
      var ref = KalmamityDB.ref('users').orderByChild('email').equalTo(this.state.email).on('value', (snapshot) => {
        if (snapshot.key) {
          snapshot.forEach((userData) => {
            if (this.state.password == userData.val().password) {
              this.setState({
                name: userData.val().name,
                email: userData.val().email,
                password: userData.val().password,
                contactNo: userData.val().contactNo,
                isRescuer: userData.val().isRescuer,
                userData: userData.val(),
                userDataSnap: userData,
              });
              RNStorage.save({
                key: "userData",
                rawData: {
                  name: userData.val().name,
                  email: userData.val().email,
                  password: userData.val().password,
                  contactNo: userData.val().contactNo,
                  isRescuer: userData.val().isRescuer,
                  userData: userData.val(),
                },
                expires: null,
              });
              // break;
            } else {
              alert("Something unexpected happens");
            }
          });
        } else {
          alert("Something unexpected happens");
        }
      });

    }).catch(err => {
      switch(err.name) {
        case 'NotFoundError':
          
          break;
        case 'ExpiredError':
          
          break;
      }
    });
  }

  fetchPosts() {
    var refUpdate = KalmamityDB.ref('posts/update/').orderByChild('lat')
      .startAt(this.state.location.latitude-0.05)
      .endAt(this.state.location.latitude+0.5)
      .on('value', (snapshot) => {
        // just setting all the post
        this.setState({
          postsUpdate: snapshot,
        });
      });

    var refHelp = KalmamityDB.ref('posts/help/').orderByChild('lat')
      .startAt(this.state.location.latitude-3)
      .endAt(this.state.location.latitude+3)
      .on('value', (snapshot) => {
        // just setting all the post
        this.setState({
          postsHelp: snapshot,
        });
      });

    var refUserHelps = KalmamityDB.ref('posts/help/').orderByChild('useremail')
      .equalTo(this.state.email).on('value', (snapshot) => {
        this.setState({
          userpostshelp: snapshot,
        });
      });

    var refUserHelps = KalmamityDB.ref('posts/update/').orderByChild('useremail')
      .equalTo(this.state.email).on('value', (snapshot) => {
        this.setState({
          userpostsupdate: snapshot,
        });
      });
  }

  fetchUserPosts() {
    
  }
  
  componentWillUnmount() {
    BackgroundGeolocation.stop();
    clearInterval(this.state.intervalId);
  }

  componentDidMount() {
    var interval = setInterval(() => {
      // alert("DID MOUNT TIMEOUT");
      if (this.state.location != null) {
        // alert("LOCATION IS NOT EQUAL TO NULL");
        this.fetchPosts();
        this.fetchUserPosts();
      }
    }, 3000);
    this.setState({
      intervalId: interval,
    });
  }

  render() {
    return (
      <ScrollableTabView scrollWithoutAnimation={true} locked={true} tabBarPosition='bottom' renderTabBar={() =>
        // Tab bar to render nav at bottom, write is included here
        // receives a location props for write
        <TabBar location={this.state.location} userData={this.state.userData} />
      }>
        <Updatefeed tabLabel="ios-paper" location={this.state.location} userData={this.state.userData} posts={this.state.postsUpdate} />
        <Helpfeed tabLabel="ios-help-buoy" location={this.state.location} userData={this.state.userData} posts={this.state.postsHelp} />
        <Kalmap tabLabel="ios-map" location={this.state.location} userData={this.state.userData} postsUpdate={this.state.postsUpdate} postHelp={this.state.postsHelp} />
        <Profile tabLabel="ios-person" userDataSnap={this.state.userDataSnap} location={this.state.location} userData={this.state.userData} userpostsupdate={this.state.userpostsupdate} userpostshelp={this.state.userpostshelp} />
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
