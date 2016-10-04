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
  Dimensions,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';


export default class Kalmap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
            <Text style={styles.title}>&middot; MAP &middot;</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 5,
    color: "#1abc9c",
    fontFamily: "Montserrat-Bold",
    letterSpacing: 4,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
    alignItems: 'center',
  },
  tab: {
    alignItems: "center",
    padding: 10,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "black",
  }
});
