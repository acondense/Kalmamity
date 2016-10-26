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
  Dimensions,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

export default class Conversation extends Component {

  constructor() {
    super();
    this.state = {
      location: 'location'
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
      fastestInterval: 5000,
      activitiesInterval: 10000,
      stopOnStillActivity: false,
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
        location: strlocation,
      })
    });
 
    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      //handle stationary locations here 
      // Actions.sendLocation(stationaryLocation);
      const location = JSON.stringify(stationaryLocation);
      // alert(location);
      this.setState({
        location: location,
      })
    });
 
    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });
 
    BackgroundGeolocation.start(() => {
      console.log('[DEBUG] BackgroundGeolocation started successfully');    
    });
  }    


  render() {
    return (
      <View>
        <Text>{this.state.location}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerWebView: {
    flex: 1,
  },
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});