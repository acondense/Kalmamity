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
  Dimensions,
  TextInput,
  Switch,
  Image,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { Hoshi } from 'react-native-textinput-effects';
import ScrollableTabView from 'react-native-scrollable-tab-view';
// import ModalPicker from 'react-native-modal-picker';
import Checkbox from 'react-native-android-checkbox';
// import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import { KalmamityDB } from '../../API/Firebase';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

class PostAs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height: 0,
      textInputValue: '',
      imagePath: '',
    };
  }

  _onValueChange(value) {
    this.setState({
      checkBoxValue: value
    });
  }

  componentWillMount() {

  }

  renderSendViaSMS() {
    if (this.props.posttype == "help") {
      return (
        <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20, marginLeft: 10}}>
          <View style={{alignItems: "center"}}>
            <Checkbox
              value={this.state.checkBoxValue}
              disabled={false}
              onValueChange={this._onValueChange.bind(this)}
            />
          </View>
          <TouchableOpacity onPress={() => this._onValueChange(!this.state.checkBoxValue)} style={{flexDirection: 'row'}}>
            <Text style={{color: "black", fontSize: 18, marginLeft: 10, marginTop: 5}}>Send via SMS</Text>
            <EvilIcon name="envelope" size={30} style={{marginTop: 5}}/>
          </TouchableOpacity>
        </View>
      );
    }
  }

  setImage(path) {
    this.setState({
      imagePath: path,
    })
  }

  handlePost() {
    KalmamityDB.ref('posts/' + this.props.posttype).push({
      text: this.state.text,
      username: this.props.userData.name,
      useremail: this.props.userData.email,
      time: Date.now(),
      lon: this.props.location.longitude,
      lat: this.props.location.latitude,
      comments: '',
    }, (error) => {
      if (error) {
        alert("Something unexpected happen.");
      } else {

        fetch('https://facebook.github.io/react-native/docs/network.html', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: this.state.text,
            username: this.props.userData.name,
            useremail: this.props.userData.email,
            time: Date.now(),
            lon: this.props.location.longitude,
            lat: this.props.location.latitude,
          })
        });

        // handle is posting here
        

        Actions.pop();
      }
    });
  }

  render() {

    return (
      <KeyboardAwareScrollView keyboardShouldPersistTaps={true}>
      <View style={[styles.writeContainer]}>
        {this.props.children}
        <View style={{padding: 20}}>
        <View style={{flexDirection: "row", marginTop: 30}}>
          <View style={{borderColor: "black", borderBottomWidth: 1, flex: 0.7}}>
          <TextInput
            // onChangeText={(text) => this.setState({text})}
            // value="Write Something"
            multiline={true}
            style={styles.textInput}
            placeholder="Write Something"
            underlineColorAndroid='rgba(0,0,0,0)'
            onChange={(event) => {
              this.setState({
                text: event.nativeEvent.text,
                height: event.nativeEvent.contentSize.height,
              });
            }}
            style={{height: Math.max(35, this.state.height)}}
          />
          </View>
        </View>

        {/* POST IMAGES 
        <View style={{flexDirection: "row", marginTop: 30, justifyContent: "space-between", borderBottomWidth: 1, borderColor: "black"}}>
          <Text style={{fontSize: 18, fontWeight: "500", color: "black"}}>IMAGE</Text>
          
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.imageInput}>
              <Icon name="ios-image-outline" size={36} />
            </TouchableOpacity>
            <TouchableOpacity style={[{paddingTop: 3}, styles.imageInput]}
              // onPress={() => Actions.capture({setImage: this.setImage().bind(this)})}
              onPress={() => Actions.capture()}
            >
              <Icon name="ios-camera-outline" size={36} />
            </TouchableOpacity>
          </View>
        </View>
        */}
       
        {/*}
        <View style={{flexDirection: "row", height: 80, padding: 10, alignItems: "center", borderBottomWidth: 1, borderColor: "black"}}>
          <Image
            source={require('../assets/user.jpg')}
            style={styles.postImage}
          />
        </View>
        */}
        {this.renderSendViaSMS()}
        <View style={{alignItems: "center", marginTop: 30}}>
          <TouchableOpacity style={{backgroundColor: "black", padding: 15, paddingTop: 10, paddingBottom: 10, width: 200}}
            onPress={() => this.handlePost()}>
            <Text style={{color: "white", fontSize: 24, fontFamily: "Montserrat-Regular", color: "#1abc9c", alignSelf: "center"}}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default class Write extends Component {

  constructor() {
    super();
    this.state = {
      location: null,
    }
  }

  renderLocation() {
    if (this.props.location) {
      return (
        <Text>{JSON.stringify(this.props.location)}</Text>
      );
    } else {
      return (
        <Text>NO LOCATE</Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", padding: 15, alignItems: "flex-end"}}>
          <TouchableOpacity onPress={() => Actions.pop()} style={{flex: 0.1}}>
            <Icon
              name="md-close"
              size={25}
            />
          </TouchableOpacity>
          <Text style={{flex: 0.6, textAlign: "center", color: "black", fontSize: 20, fontFamily: "Montserrat-Regular"}}>Post</Text>
          <View style={{flex: 0.1}}></View>{/*Just to align things*/}
        </View>
        <ScrollableTabView tabBarPosition='top' style={{flex: 1}} scrollWithoutAnimation={true} locked={true} tabBarActiveTextColor="black" tabBarUnderlineStyle={{backgroundColor: "black"}} tabBarTextStyle={{fontSize: 20, fontFamily: "Montserrat-Regular"}}>
          <PostAs tabLabel="UPDATE" posttype="update" userData={this.props.userData} location={this.props.location}>
            <View style={{backgroundColor: "#1abc9c", flex: 1, height: 75, alignItems: "center", padding: 10,}}>
              <Text style={{color: "white", width: 200, textAlign: "center"}}>Lets make a more aware community by sending updates from your current location.</Text>
            </View>
          </PostAs>
          <PostAs tabLabel="HELP" posttype="help" userData={this.props.userData} location={this.props.location}>
            <View style={{backgroundColor: "rgba(231, 76, 60,0.8)", flex: 1, height: 75, alignItems: "center", padding: 10,}}>
              <Text style={{color: "white", width: 200, textAlign: "center"}}>Help request will be sent to the nearest rescuer to help you. Stay safe.</Text>
            </View>
          </PostAs>
        </ScrollableTabView>
      </View>
    );
  }
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  closeBtn: {
    flex: 0.2,
    backgroundColor: "red"
  },
  writeContainer: {
    flex: 1,
    // backgroundColor: "red",
  },
  textInput: {
    // alignItems: "center",
    // backgroundColor: "red",
    // justifyContent: "flex-start",
    flex: 0.8,
    // alignSelf: 'stretch',
    fontSize: 20,
    textAlignVertical: 'top',
    borderColor: "black",
    borderWidth: 2,
    fontFamily: "Montserrat-Regular",
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
  shareAs: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 20,
    color: "#1abc9c",
    flex: 0.6,
    backgroundColor: "blue",
    textAlign: "center",
  },
  userimage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postBtn: {
    borderWidth: 5,
    borderColor: "#1abc9c",
    borderRadius: 20,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    width: 200,
    alignItems: "center",
  },
  btnTxt: {
    fontWeight: "500",
    fontSize: 16,
  },
  imageInput: {
    marginLeft: 20,
    padding: 0,
  },
  postImage: {
    height: 60,
    width: 60,
  }
});
