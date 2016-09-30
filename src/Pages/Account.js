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
  Image,
  TextInput,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

class AccountItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.accountItem} onPress={this.props.action}>
        {this.props.children}
        <Text style={{fontSize: 16, fontWeight: "500", marginLeft: 20}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '', height: 0};
  }

  render() {
    return (
        <View style={{flexDirection: "row", margin: 10, borderColor: "black", borderBottomWidth: 1, paddingBottom: 5}}>
          <Icon
            name="md-search"
            size={30}
            style={{height: 30, width: 30, justifyContent: 'center', alignItems: 'center', marginTop: 5, marginLeft: 10}}
          />
          <View style={{flex: 0.7}}>
          <TextInput
            // onChangeText={(text) => this.setState({text})}
            // value="Write Something"
            multiline={true}
            style={styles.textInput}
            placeholder="Search"
            underlineColorAndroid='rgba(0,0,0,0)'
            onChange={(event) => {
              this.setState({
                text: event.nativeEvent.text,
                height: event.nativeEvent.contentSize.height,
              });
            }}
            style={{height: Math.max(35, this.state.height), fontSize: 16, fontWeight: "700", marginTop: 5}}
          />
          </View>
        </View>
    );
  }
}

export default class Account extends Component {
  
  gotoProfile() {
    Actions.profile();
  }

  gotoSafetyCheck() {
    Actions.safetyCheck();
  }

  gotoMap() {
    Actions.kalmap();
  }

  gotoEvacuation() {
    Actions.evacuation();
  }

  logout() {
    Actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <AccountItem title="Profile" action={() => this.gotoProfile()}>
          <Image
            source={require('../assets/user.jpg')}
            style={styles.accountLogo}
          />
        </AccountItem>
        <AccountItem title="Safety Check" action={() => this.gotoProfile()}>
          <Image
            source={require('../assets/safetycheck.png')}
            style={styles.accountLogo}
          />
        </AccountItem>
        <AccountItem title="Kalmap" action={() => this.gotoMap()}>
          <Icon
            name="md-map"
            size={42}
            style={styles.accountLogo}
          />
        </AccountItem>
        {/*
        <AccountItem title="Evacuation" action={() => this.gotoEvacuation()} />
        */}
        <AccountItem title="Logout" action={() => this.logout()}>
          <Icon
            name="md-log-out"
            size={42}
            style={styles.accountLogo}
          />
        </AccountItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  accountItem: {
    height: 75,
    flexDirection: "row",
    alignSelf: 'stretch',
    backgroundColor: "white",
    marginTop: 5,
    alignItems: "center",
    padding: 20,
  },
  accountLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    color: "#1abc9c"
  },
});
