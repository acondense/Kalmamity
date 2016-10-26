import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';

import { RNStorage } from '../../API/RNStorage';

export default class Proceed extends Component {

  handleProceed() {
    RNStorage.save({
      key: "hasReadTutorial",
      rawData: {
        data: true, // set to true if okay
      }
    });
    Actions.pop();
  }

  render() {
    return (
       <View style={{flex: 1, marginLeft: 30, marginRight: 30, alignItems: 'center', paddingTop: 70}}>
       <Image source={require('../../assets/logo.png')} style={{height: 100, width: 100}}/>
       <Text style={{fontFamily: "Montserrat-Regular", fontSize: 25, color: 'black', textAlign: 'center'}}>
          Kalmamity
        </Text>
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 20, color: 'black', textAlign: 'center'}}>
          Stay calm during calamities.
        </Text>
        <View style={{height: 100}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 14}}>
            For questions, you may reach us at
          </Text>
          <Text style={{textAlign: 'center', fontSize: 14}}>
            mamba.devgroup@gmail.com
          </Text>
        </View>
        <TouchableOpacity style={{backgroundColor: '#1abc9c', padding: 30, paddingTop: 10, paddingBottom: 10}} onPress={() => this.handleProceed()}>
          <Text style={{color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 20}}>Proceed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}