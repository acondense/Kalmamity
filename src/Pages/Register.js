/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Switch,
  Image,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Hoshi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Fumi } from 'react-native-textinput-effects';
import Checkbox from 'react-native-android-checkbox';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkBoxValue: false,
    }
  }

  _onValueChange(value) {
    this.setState({
      checkBoxValue: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register to Kalmamity</Text>
        <Text style={styles.slogan}>Together, lets build a community that is connected in times of calamities.</Text>
        <View style={styles.inputs}>
          <Fumi
            label={'Your name'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#1abc9c'}
          />
          <Fumi
            label={'Contact no.'}
            iconClass={FontAwesomeIcon}
            iconName={'mobile-phone'}
            iconColor={'#1abc9c'}
          />
          <Fumi
            label={'Your location'}
            iconClass={FontAwesomeIcon}
            iconName={'map-marker'}
            iconColor={'#1abc9c'}
          />
          <View style={{flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 10}}>
            <View style={{alignItems: "center"}}>
              <Checkbox
                value={this.state.checkBoxValue}
                disabled={false}
                onValueChange={this._onValueChange.bind(this)}
              />
            </View>
            <Text style={{color: "black", fontSize: 18, marginLeft: 10}}>Register as a rescuer</Text>
            <TouchableOpacity onPress={() => Actions.whatIsARescuer()}>
              <FontAwesomeIcon
                name="question-circle-o"
                size={20}
                style={{color: "#1abc9c", marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
              onPress={() => Actions.login()}
              style={styles.registerBtn}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    color: "black",
    fontWeight: "300",
    fontSize: 24,
  },
  slogan: {
    width: 300,
    textAlign: "center"
  },
  inputs: {
    flex: 1,
    margin: 20,
    width: 300,
  },
  input: {
    flex: 1,
    width: 300,
  },
  registerBtn: {
    borderColor: "#1abc9c",
    borderWidth: 5,
    borderRadius: 20,
    padding: 5,
    alignSelf: "center",
    width: 200,
    alignItems: "center",
    marginTop: 40,
  },
  btnText: {
    fontWeight: "500",
    fontSize: 18
  },
});
