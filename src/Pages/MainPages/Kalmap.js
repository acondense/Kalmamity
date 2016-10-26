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

export default class Kalmap extends Component {

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
    if (this.state.location) {

      var tempPosts = [];

      this.props.postsUpdate.forEach((snap) => {
        tempPosts.push(snap);
      });

      return (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
        >
          {tempPosts.map((post, id) => (
            <MapView.Marker
              coordinate={{
                latitude: post.val().lat,
                longitude: post.val().lon,
              }}
              title={post.val().posttype}
              description={post.val().text}
              key={id}
              onPress={(coords) => Actions.post({data: post})}
            />
          ))}       
        </MapView>
      );
    } else {
      return (
        <View style={{flex: 1, alignSelf: "stretch", alignItems: "center"}}>
          <Image source={require('../../assets/map.png')} style={{flex: 1, alignSelf: "stretch", alignItems: "center", width: width,}}>
            <Text style={{fontSize: 30, fontFamily: "Montserrat-Bold", marginTop: 150, color: "#1abc9c"}}>Accessing</Text>
            <Text style={{fontSize: 30, fontFamily: "Montserrat-Bold", color: "#1abc9c"}}>Location...</Text>
            <Text style={{color: "white"}}>Make sure that GPS is on.</Text>
            <TouchableOpacity style={{padding: 10, paddingLeft: 15, paddingRight: 15, marginTop: 20, backgroundColor: "#1abc9c"}}
              onPress={() => this.setState({location: this.props.location})}
            >
              <Text style={{fontSize: 20, fontFamily: "Montserrat-Bold", color: "black"}}>RETRY</Text>
            </TouchableOpacity>
          </Image>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
            <Text style={styles.title}>&middot; MAP &middot;</Text>
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
