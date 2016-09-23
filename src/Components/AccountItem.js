import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class AccountItem extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.action()}>
        <Text>An account item</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 0,
    alignItems: 'stretch',
    elevation: 1,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#2ecc71",
  },
  userinfo: {
    flexDirection: "row",
  },
  namelocation: {
    flex: 1,
  },
  location: {
    fontSize: 12,
    marginTop: 0,
  },
  userimage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 5,
  },
  username: {
    fontWeight: "900",
    fontSize: 16,
    marginBottom: 0,
    color: "black"
  },
  text: {
    fontWeight: "200",
    marginTop: 10,
    marginBottom: 10
  },
  actions: {
    flexDirection: "row"
  },
  action: {
    marginRight: 5,
  },
  likesCount: {
    padding: 2,
    marginRight: 20,
  },
});
