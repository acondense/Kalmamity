import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
      <View style={{flex: 1, marginLeft: 30, marginRight: 30, alignItems: 'center', paddingTop: 90}}>
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 20, color: 'black', textAlign: 'center'}}>
          Welcome to Kalmamity!
        </Text>
        <View style={{height: 100}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 14}}>
            Together, lets build a community that is more connected in times of calamities.
          </Text>
        </View>
        <Image source={require('../../assets/logo.png')} style={{width: 142, height: 142}}/>
      </View>
    );
  }
}