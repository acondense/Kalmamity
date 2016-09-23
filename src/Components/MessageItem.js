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


export default class MessageItem extends Component {

  toggleMessage() {
    console.log("From message item");
    Actions.conversation();
  }


  render() {
    const username = this.props.message.username;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.toggleMessage()}>
        <Text style={styles.username}>{this.props.message.username}</Text>
        <Text>{this.props.message.message}</Text>
        <Text>{this.props.message.time}</Text>
        <Text>{this.props.message.date}</Text>
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
