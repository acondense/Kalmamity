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


export default class ExplainUpdate extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', marginTop: 20}}>
        <Icon name="ios-paper" size={100} color="#1abc9c" />
        <Text style={{fontFamily: "Montserrat-Bold", fontSize: 20, color: '#1abc9c'}}>
          Updates
        </Text>
        <View style={{margin: 20, alignItems: 'center', alignSelf: 'center'}}>

          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Icon name="ios-people" size={30} color="#1abc9c" style={{marginRight: 10}}/>
            <Icon name="ios-warning" size={30} color="gray"/>
            <EvilIcon name="user" size={50} color="#1abc9c"/>
            <Icon name="ios-paper" size={30} color="gray" />
            <Icon name="ios-people" size={30} color="#1abc9c" style={{marginLeft: 10}}/>
          </View>
          <Text style={{fontSize: 16, textAlign: 'center'}}>
            Raise awareness by sending updates to the people around you, such as flood levels and evacuation sites.
          </Text>

           <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Icon name="ios-person" size={30} color="#1abc9c"/>
            <EvilIcon name="comment" size={50} color="#1abc9c" style={{marginTop: 20}}/>
            <Icon name="ios-people" size={30} color="#1abc9c"/>
          </View>
          <Text style={{fontSize: 16, textAlign: 'center'}}>
            Raise a discussion with your community.
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
