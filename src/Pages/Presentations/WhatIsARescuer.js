import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';


export default class WhatIsARescuer extends Component {
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps={true}>
        <View style={{margin: 10}}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="md-arrow-back" size={35} />
          </TouchableOpacity>
          <View style={{alignItems: 'center', padding: 20}}>
            <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular'}}>Kalmamity</Text>
            <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular'}}>Rescuer Account</Text>
            <Icon name="ios-help-buoy" color="#1abc9c" size={80} style={{marginTop: 30}}/>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              One of the goals of Kalmamity is to make it easy for rescuer to conduct rescue operations in times of calamities.
            </Text>

            <Icon name="ios-pin" color="#1abc9c" size={80} style={{marginTop: 30}}/>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              Rescuer accounts will have a Patrol Area, help request sent within the patrol area will be receive by the rescuer.
            </Text>

            <EvilIcon name="envelope" color="#1abc9c" size={80} style={{marginTop: 30}}/>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              The user who sent the help request will receive the contact of the rescuer, as well as the rescuer will receive the contact of the user.
            </Text>


          </View>
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
