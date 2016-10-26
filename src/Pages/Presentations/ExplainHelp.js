import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';


export default class ExplainHelp extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', marginTop: 20}}>
        <Icon name="ios-help-buoy" size={100} color="#e74c3c" />
        <Text style={{fontFamily: "Montserrat-Bold", fontSize: 20, color: '#1abc9c'}}>
          Help Requests
        </Text>
        <View style={{margin: 20, alignItems: 'center', alignSelf: 'center'}}>

          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Icon name="ios-person" size={30} color="#e74c3c" />
            <EvilIcon name="user" size={50} color="#1abc9c"/>
            <Icon name="ios-person" size={30} color="#e74c3c" />
          </View>

          <Text style={{fontSize: 16, textAlign: 'center'}}>
            Help requests will be sent to the nearest rescuers to assists you.
          </Text>
          <EvilIcon name="envelope" size={50} color="#1abc9c" style={{marginTop: 20}}/>
          <Text style={{fontSize: 16, textAlign: 'center'}}>
            If access to internet is unavailable, you can still send help request via SMS.
          </Text>
          <Text style={{fontSize: 12, textAlign: 'center'}}>
            A charge of PHP 5.00 will be apply.
          </Text>
        </View>
      </View>
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
