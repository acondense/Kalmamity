import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class RaiseAwareness extends Component {
  render() {
    return (
      <View style={{flex: 1, marginLeft: 30, marginRight: 30, alignItems: 'center', paddingTop: 90}}>
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 20, color: 'black', textAlign: 'center'}}>
          Raise Awareness
        </Text>
        <View style={{height: 100}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 14}}>
            Give updates from your current location, such as flood level and evacuation sites.
          </Text>
        </View>
        <Icon name="ios-paper" size={120} color="#1abc9c" />
      </View>
    );
  }
}