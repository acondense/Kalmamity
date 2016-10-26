import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default class AskHelp extends Component {
  render() {
    return (
       <View style={{flex: 1, marginLeft: 30, marginRight: 30, alignItems: 'center', paddingTop: 90}}>
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 20, color: 'black', textAlign: 'center'}}>
          Ask & Give Help
        </Text>
        <View style={{height: 100}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 14}}>
            Ask help, rescuers will be notified about your help request, and nearby users will see it.
          </Text>
        </View>
        <Icon name="ios-alert" size={120} color="#e74c3c" />
      </View>
    );
  }
}