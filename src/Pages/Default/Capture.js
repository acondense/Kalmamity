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
  Image,
  TouchableOpacity,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Camera from 'react-native-camera';
import Firestack from 'react-native-firestack';

const config = {
  apiKey: "AIzaSyBRYcC1bigqi04cp_4lodTgBrnvVOTL9do",
  authDomain: "testfirebase-3f219.firebaseapp.com",
  databaseURL: "https://testfirebase-3f219.firebaseio.com",
  storageBucket: "testfirebase-3f219.appspot.com",
  messagingSenderId: "320771810064"
};

const firestack = new Firestack(config);

export default class Capture extends Component {

  constructor() {
    super();
    this.state = {
      hasTaken: false,
      path: "",
    }
  }

  takePicture() {
    // this.camera.capture()
    //   .then((data) => {
    //     alert(JSON.stringify(data));
    //     this.setState({
    //       hasTaken: true,
    //       path: data.path
    //     });
    //   }).catch(err => console.error(err));
    this.camera.capture()
      .then(({path}) => {
        const filename = 'photo.jpg'
        firestack.storage.uploadFile(`photos/${filename}`, path, {
          contentType: 'image/jpeg',
          contentEncoding: 'base64',
        }, (evt) => {
          console.log('Got an event in JS', evt);
        })
        .then((res) => {
          console.log('result from upload file: ', res);
        })
        .catch((err) => {
          console.log('error happened with uploadFile', err);
        })
      })
      .catch(err => console.error(err));
  }

  renderImage() {
    if (this.state.hasTaken) {
      return (
        <View style={{flex: 1, alignItems: "center"}}>
          <Image source={{uri: this.state.path}} style={{height: height, width: width, }}>
          <View style={{flexDirection: "row", marginTop: height-75}}>
            <TouchableOpacity style={{flex: 1, alignItems: "center", backgroundColor: "#1abc9c", height: 75, padding: 15}}
              onPress={() => this.setState({hasTaken: false})}
            >
              <Text style={{color: "white", fontSize: 18, fontFamily: "Montserrat-Bold"}}>DISCARD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: "center", backgroundColor: "#1abc9c", height: 75, padding: 15}}
              onPress={() => {
                alert("THIS IS THE PATH: " + this.state.path);
                this.props.setImage(this.state.path);
              }}
            >
              <Text style={{color: "white", fontSize: 18, fontFamily: "Montserrat-Bold"}}>SAVE</Text>
            </TouchableOpacity>
          </View>
          </Image>
          <Text>{this.state.path}</Text>
        </View>
      )
    } else {
      return (
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>

          {/* CONTROLS */}
          <TouchableOpacity onPress={() => this.takePicture()}>
            <View style={{width: 70, height: 70, borderRadius: 25, backgroundColor: "#1abc9c", borderColor: "white", borderWidth: 10}}>
              
            </View>  
          </TouchableOpacity>

        </Camera> 
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderImage()}       
      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});