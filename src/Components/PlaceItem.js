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


export default class PlaceItem extends Component {

  toggleAlert(alert) {
    Actions.kalmap({
      alert: alert
    });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.toggleAlert(this.props.alert)}>
        <View>
          <Text style={{color: "black", fontSize: 14, fontFamily: "Montserrat-Regular"}}>PUP Sta. Mesa, Manila</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    padding: 15,
    alignItems: 'stretch',
    elevation: 1,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#2ecc71",
    margin: 5,
    borderRadius: 2,
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
