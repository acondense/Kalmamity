import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Image,
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae, Fumi } from 'react-native-textinput-effects';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { KalmamityDB } from '../../API/Firebase';
import { RNStorage } from '../../API/RNStorage';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      isLogin: "unset",
      password: '',
      email: '',
      loggingIn: false,
    }
  }

  componentWillMount() {
    
  }

  handleLogin() {
    if (this.state.password == '' || this.state.email == '') {
      alert("Please complete the fields");
      return;
    } else {
        this.setState({
          loggingIn: true,
        });
        var ref = KalmamityDB.ref('users').orderByChild('email').equalTo(this.state.email).on('value', (snapshot) => {
          if (snapshot.key) {
            snapshot.forEach((userData) => {
              if (this.state.password == userData.val().password) {
                // alert("LOGIN SUCCESS FULL");
                RNStorage.save({
                  key: "loginState",
                  rawData: {
                    email: this.state.email,
                    password: this.state.password,
                  },
                  expires: null
                });
                Actions.main({type: ActionConst.RESET});
              } else {
                alert("Please check email and password");
              }
            });
          } else {
            alert("Don't exists");
          }
        });
        this.setState({
          loggingIn: false,
        })
    }
  }


  // login(value) {
  //   storage.save({
  //     key: 'loginState',   // Note: Do not use underscore("_") in key!
  //     rawData: { 
  //         from: 'some other site',
  //         userid: 'some userid',
  //         token: 'some token',
  //         isLogin: value,
  //     },

  //     // if not specified, the defaultExpires will be applied instead.
  //     // if set to null, then it will never expire.
  //     expires: null,
  //   });
  // }

  render() {
    const gotoPageTwo = () => {
      // check credential here huh?
      Actions.main({type: ActionConst.RESET});
    }

    const gotoRegister = () => {
      Actions.register();
    }

    console.log("return to log in");
    return (
      <KeyboardAwareScrollView keyboardShouldPersistTaps={true}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={{height: 100, width: 100}}/>
        <Text style={styles.title}  >
          Kalmamity
        </Text>
        <Text style={{color: "#1abc9c", marginBottom: 10}}>Stay calm during calamaties.</Text>
        <Text>{this.state.text}</Text>
        <View style={styles.inputFields}>
          <Fumi
            label={'Email'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope'}
            iconColor={'#1abc9c'}
            onChangeText={(email) => this.setState({email})}
          />
          <Fumi
            label={'Password'}
            iconClass={FontAwesomeIcon}
            iconName={'unlock-alt'}
            iconColor={'#1abc9c'}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableOpacity style={{backgroundColor: "black", padding: 10, width: 200, alignItems: "center"}}
          disabled={this.state.loggingIn}
          onPress={() => this.handleLogin()}>
          <Text style={{color: "white", fontSize: 20, fontFamily: "Montserrat-Bold"}}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.or}>---------- OR -----------</Text>
        <TouchableOpacity style={{backgroundColor: "black", padding: 10, width: 200, alignItems: "center"}}
          disabled={this.state.loggingIn}
          onPress={() => Actions.register()}>
          <Text style={{color: "white", fontSize: 20, fontFamily: "Montserrat-Bold"}}>REGISTER</Text>
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
    marginBottom: 50,
    paddingTop: 50,
  },
  icon: {
    color: "#1abc9c",
    margin: 0,
  },
  title: {
    color: "#1abc9c",
    fontSize: 28,
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
    backgroundColor: "rgba(236, 240, 241, 0.2)",
    padding: 5,
    borderRadius: 5,
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
    margin: 10,
    color: "#1abc9c"
  }
});
