import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default class Share extends Component {
  render() {
    return (
       <View style={{flex: 1, marginLeft: 30, marginRight: 30, alignItems: 'center', paddingTop: 90}}>
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 20, color: 'black', textAlign: 'center'}}>
          Tell your community about Kalmamity
        </Text>
        <View style={{height: 100}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 14}}>
            Share with your neighborhood, they will be the first one to help you in times of calamities.
          </Text>
          <Text style={{textAlign: 'center', fontSize: 14}}>
            Ask the authorities in your area to sign up for rescuer accounts.
          </Text>
        </View>
        <Icon name="ios-people" size={150} color="#1abc9c" />
      </View>
    );
  }
}