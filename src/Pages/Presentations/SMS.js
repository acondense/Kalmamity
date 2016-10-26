import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default class SMS extends Component {
  render() {
    return (
       <View style={{flex: 1, marginLeft: 30, marginRight: 30, alignItems: 'center', paddingTop: 90}}>
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 20, color: 'black', textAlign: 'center'}}>
          Send help request via SMS
        </Text>
        <View style={{height: 100}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 14}}>
            Even if access internet is not available, you can still send help requests. Charges may apply.
          </Text>
        </View>
        <EvilIcon name="envelope" size={150} color="#e74c3c" />
      </View>
    );
  }
}