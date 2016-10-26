import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ViewInMap extends Component {

  constructor() {
    super();
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      initialPositionObj: null,
      lastPositionObj: null,
      lat: 'Not found',
      lng: 'none',
      location: null,
      hasSet: false,
    };
  }

  componentWillMount() {
    if (this.state.hasSet === false) {
      this.setState({
        location: this.props.location,
        hasSet: true,
      });
    }
  }

  renderMap() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: this.props.data.val().lat,
          longitude: this.props.data.val().lon,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.props.data.val().lat,
            longitude: this.props.data.val().lon,
          }}
        />
      </MapView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="md-arrow-back" size={35} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/user.jpg')} style={{width: 25, height: 25, borderRadius: 10, marginLeft: 10}} />
              <View style={{marginLeft: 10}}>
                <Text style={{color: "black", fontSize: 20, fontFamily: "Montserrat-Bold"}}>{this.props.data.val().username}</Text>
              </View>
            </View>
            <View style={{backgroundColor: 'white', flex: 1, alignSelf: 'stretch', padding: 10}}>
              <Text style={{fontFamily: "Montserrat-Regular", fontSize: 14, color: 'black'}}>{this.props.data.val().text}</Text>
            </View>
        </View>
        <View style={styles.mapContainer}>
          {this.renderMap()}
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
    height: height-50,
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
    padding: 10,
    paddingTop: 10,
    alignSelf: 'stretch',
  }
});
