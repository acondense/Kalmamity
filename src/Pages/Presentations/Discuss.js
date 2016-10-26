import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default class Discuss extends Component {
  render() {
    return (
      <View style={{flex: 1, marginLeft: 30, marginRight: 30, alignItems: 'center', paddingTop: 90}}>
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 20, color: 'black', textAlign: 'center'}}>
          Discuss
        </Text>
         <View style={{height: 100}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 14}}>
            Discuss with the community around you about the pain points that the community experiences in times of calamities.
          </Text>
        </View>
        <EvilIcon name="comment" size={150} color="#1abc9c" />
      </View>
    );
  }
}