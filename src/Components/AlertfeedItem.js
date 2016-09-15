import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class AlertfeedItem extends Component {

  toggleAlert(alert) {
    Actions.alert({
      alert: alert
    });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.toggleAlert(this.props.alert)}>
        <View>
        <View style={styles.userinfo}>
          <Image
            source={require('../assets/user.jpg')}
            style={styles.userimage}
          />
          <View style={styles.namelocation}>
            <Text style={styles.username}>
              {this.props.alert.username}
            </Text>
            <Text style={styles.location}>
              {this.props.alert.location}
            </Text>
          </View>
        </View>
        <Text style={styles.text}>
          {this.props.alert.body}
        </Text>
        <View style={styles.actions}>
          <Icon style={styles.action} name="md-heart-outline" size={25} />
          <Text style={styles.likesCount}>{this.props.alert.likes}</Text>
          <Icon style={styles.action} name="ios-share-alt" size={25} />
        </View>
        <Text style={styles.text}>
          {this.props.comment}
        </Text>
        </View>
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
