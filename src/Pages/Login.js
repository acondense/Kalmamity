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
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae, Fumi } from 'react-native-textinput-effects';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Login extends Component {
  render() {
    const goToPageTwo = () => {
      // check credential here huh?
      this.props.onLoggedInSuccess;
      console.log("Logging in");
      Actions.main({type: ActionConst.RESET});
    }

    const gotoRegister = () => {
      Actions.register();
    }

    console.log("return to log in");
    return (
      <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Icon
          name="md-rainy"
          size={60}
          style={styles.icon}
        />
        <Text style={styles.title}  >
          Kalmamity
        </Text>
        <Text style={{color: "#1abc9c", marginBottom: 10}}>Stay calm during calamaties.</Text>
        <View style={styles.inputFields}>
        <Sae
          label={'Email Address'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'black'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.inputField}
          inputStyle={styles.inputStyle}
          underlineColorAndroid="#1abc9c"
          labelStyle={styles.labelStyle}
        />
        <Sae
          label={'Password'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'black'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.inputField}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
        />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={goToPageTwo}>
          <Text style={styles.btnTxt}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.or}>---------- OR -----------</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={gotoRegister}>
          <Text style={styles.btnTxt}>Register</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: height,
    marginBottom: 50,
    paddingTop: 50,
  },
  icon: {
    color: "#1abc9c",
    margin: 0,
  },
  title: {
    color: "#1abc9c",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
  },
  loginBtn: {
    borderWidth: 5,
    borderColor: "#1abc9c",
    borderRadius: 20,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnTxt: {
    fontWeight: "500",
    fontSize: 16,
  },
  inputFields: {
    width: 300,
    // borderWidth: 1,
    // borderColor: "black",
    marginBottom: 25,
    backgroundColor: "rgba(236, 240, 241, 0.5)",
    padding: 20,
    paddingTop: 10,
    borderRadius: 10
  },
  inputField: {

  },
  inputStyle: {
    color: 'black'
  },
  labelStyle: {
    color: "#1abc9c"
  },
  or: {
    margin: 20,
    color: "#1abc9c"
  }
});
