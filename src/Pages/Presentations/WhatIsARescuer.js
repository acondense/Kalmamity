import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';


export default class WhatIsARescuer extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular'}}>Kalmamity</Text>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular'}}>Rescuer Account</Text>

          <Text style={{fontSize: 18}}>One of the goals of Kalmamity is to make it easy for rescuer to conduct rescue operations in times of calamities.</Text>
        </View>
      </ScrollView>
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
