import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Switch,
  Image,
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Hoshi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Fumi } from 'react-native-textinput-effects';
import Checkbox from 'react-native-android-checkbox';
import SmsAndroid from 'react-native-sms-android';

import { KalmamityDB } from '../../API/Firebase';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAccept: false,
      checkBoxValue: false,
      name: '',
      contactNo: '',
      email: '',
      password: '',
    }
  }

  _sendSMS() {
    SmsAndroid.sms(
      '21589593', // phone number to send sms to
      'YES', // sms body
      'sendDirect', // sendDirect or sendIndirect
      (err, message) => {
        if (err){
          console.log("error");
        } else {
          console.log(message); // callback message
        }
      }
    );
  }

  _handleRegisterBtn() {

    // check if all fields is fulfilled
    if (this.state.name.trim() == ""
        || this.state.contactNo.trim() == ""
        || this.state.email.trim() == ""
        || this.state.password.trim()) {
      alert("Please complete the fields.");
      return;
    }

    var tempContact = this.state.contactNo;

    // check numbers in +639269493263 format
    if (tempContact[0] == '+'
      && tempContact[1] == '6'
      && tempContact[2] == '3'
      && tempContact[3] == '9'
      && tempContact.length == 13) {
      tempContact = tempContact.slice(3, tempContact.length);
    }

    // check numbers in 09269493263 format
    else if (tempContact[0] == '0' && tempContact[1] == '9' && tempContact.length == 11) {
      tempContact = tempContact(1, tempContact.length);
    }

    // check numbers in format of 9269493263
    else if (tempContact[0] == '9' && tempContact.length == 10) {
      // already a good shit
    }

    else {
      alert("Invalid phone number.");
      return;
    }

    if (isNaN(tempContact) == true) {
      alert("Invalid phone number.");
      return;
    }

    this.setState({
      contactNo: tempContact
    });


    // run filtering here
    if (1 != 1) {
      alert("Accept Terms and Conditions");
    } else {
      KalmamityDB.ref('users/').push({
        name: this.state.name,
        contactNo: this.state.contactNo,
        email: this.state.email,
        password: this.state.password,
        isRescuer: this.state.checkBoxValue
      }, function(error) {
        if (error) {
          alert("Oopss something unexcpected happens");
        } else {
          
          SmsAndroid.sms(
            '21589593', // phone number to send sms to
            'YES', // sms body
            'sendDirect', // sendDirect or sendIndirect
            (err, message) => {
              if (err){
                console.log("error");
              } else {
                console.log(message); // callback message
              }
            }
          );

          // goto main page
          // var user = {
          //   name: this.state.name,
          //   contactNo: this.state.contactNo,
          //   email: this.state.email,
          //   isRecuer: this.state.isRecuer,
          // }
          Actions.login({
            type: ActionConst.RESET, // reset the router
            // user: user,
          });
        }
      });
    }
  }


  render() {
    return (
      <KeyboardAwareScrollView keyboardShouldPersistTaps={true}>
        <View style={styles.container}>
        <Text style={styles.title}>Register to Kalmamity</Text>
        <Text style={styles.slogan}>Together, lets build a community that is connected in times of calamities.</Text>
        <View style={styles.inputs}>
          <Fumi
            label={'Your name'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#1abc9c'}
            onChangeText={(name) => this.setState({name})}
          />
          <Fumi
            label={'Contact no.'}
            iconClass={FontAwesomeIcon}
            iconName={'mobile-phone'}
            iconColor={'#1abc9c'}
            onChangeText={(contactNo) => this.setState({contactNo})}
            value={this.state.contactNo}
            keyboardType="phone-pad"
          />
          <Text style={{fontSize: 11, marginLeft: 50}}>*For dual-sim phones, please use SIM1.*</Text>

          <Fumi
            label={'Email'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope'}
            iconColor={'#1abc9c'}
            onChangeText={(email) => this.setState({email})}
            keyboardType="email-address"
          />
          <Fumi
            label={'Password'}
            iconClass={FontAwesomeIcon}
            iconName={'unlock-alt'}
            iconColor={'#1abc9c'}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
          />
          <View style={{flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 10}}>
            <View style={{alignItems: "center"}}>
              <Checkbox
                value={this.state.checkBoxValue}
                disabled={false}
                onValueChange={(checkBoxValue) => this.setState({checkBoxValue})}
              />
            </View>
            <TouchableOpacity onPress={() => this.setState({
              checkBoxValue: !this.state.checkBoxValue,
            })} >
              <Text style={{color: "black", fontSize: 18, marginLeft: 10}}>Register as a rescuer</Text>
            </TouchableOpacity>

            {/* WHAT IS A RESCURE QUESTION MARK */}
            <TouchableOpacity onPress={() => Actions.whatIsARescuer()}>
              <FontAwesomeIcon
                name="question-circle-o"
                size={20}
                style={{color: "#1abc9c", marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 11, marginLeft: 50}}>*Verification steps to be a rescuer will be send as soon as possible.*</Text>

          <View style={{flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 10}}>
            <View style={{alignItems: "center"}}>
              <Checkbox
                value={this.state.isAccept}
                disabled={false}
                onValueChange={(isAccept) => this.setState({isAccept})}
              />
            </View>
            <TouchableOpacity onPress={() => this.setState({
             isAccept: !this.state.isAccept,
            })} >
              <Text style={{color: "black", fontSize: 14, marginLeft: 10}}>Accept Terms and Conditions</Text>
            </TouchableOpacity>

            {/* WHAT IS A RESCURE QUESTION MARK */}
            <TouchableOpacity onPress={() => Actions.termsAndConditions()}>
              <FontAwesomeIcon
                name="question-circle-o"
                size={20}
                style={{color: "#1abc9c", marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
              onPress={() => this._handleRegisterBtn()}
              style={styles.registerBtn}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={() => Actions.pop()}
              style={styles.cancelBtn}
          >
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
        /*
          <TouchableOpacity onPress={() => Actions.whatIsARescuer()}>
              <FontAwesomeIcon
                name="question-circle-o"
                size={20}
                style={{color: "#1abc9c", marginLeft: 10}}
              />
            </TouchableOpacity>

         <View style={{flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 10}}>
            <View style={{alignItems: "center"}}>
              <Checkbox
                value={this.state.isAccept}
                disabled={false}
                onValueChange={(isAccept) => this.setState({isAccept})}
              />
            </View>
            <TouchableOpacity>
              <Text style={{color: "black", fontSize: 14, marginLeft: 10}}>Accept Terms and Conditions</Text>
            </TouchableOpacity>
          </View>
        */

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
  cancelBtn: {
    borderColor: "gray",
    borderWidth: 5,
    borderRadius: 20,
    padding: 5,
    alignSelf: "center",
    width: 200,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    fontWeight: "500",
    fontSize: 18
  },
});
