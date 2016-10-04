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
import { Hoshi } from 'react-native-textinput-effects';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ModalPicker from 'react-native-modal-picker';
import Checkbox from 'react-native-android-checkbox';

class PostAs extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '', height: 0, textInputValue: ''};
  }

  _onValueChange(value) {
    this.setState({
      checkBoxValue: value
    });
  }

  render() {

    let index = 0;
    const data = [
      { key: index++, section: true, label: 'Select Location' },
      { key: index++, label: 'PUP Sta. Mesa' },
      { key: index++, label: 'Home' },
      { key: index++, label: 'Dorm' },
    ];

    return (
      <KeyboardAwareScrollView>
      <View style={[styles.writeContainer]}>

        <Text style={{color: "black", fontWeight: "500"}}>Location: </Text>
        <ModalPicker
          data={data}
          initValue="Select Location"
          style={{marginTop: 10, marginBottom: 30,}}
          overlayStyle={{backgroundColor: "#1abc9c"}}
          sectionTextStyle={{color: "black", fontSize: 20, fontWeight: "500", fontFamily: "Montserrat-Regular"}}
          optionTextStyle={{color: "black"}}
          // onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }}
        />

        <View style={{flexDirection: "row"}}>
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

        <View style={{flexDirection: "row", marginTop: 30, justifyContent: "space-between", borderBottomWidth: 1, borderColor: "black"}}>
          <Text style={{fontSize: 18, fontWeight: "500", color: "black"}}>IMAGE</Text>
          
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.imageInput}>
              <Icon name="ios-image-outline" size={36} />
            </TouchableOpacity>
            <TouchableOpacity style={[{paddingTop: 3}, styles.imageInput]} onPress={() => Actions.capture()}>
              <Icon name="ios-camera-outline" size={36} />
            </TouchableOpacity>
          </View>
        </View>

        {/*}
        <View style={{flexDirection: "row", height: 80, padding: 10, alignItems: "center", borderBottomWidth: 1, borderColor: "black"}}>
          <Image
            source={require('../assets/user.jpg')}
            style={styles.postImage}
          />
        </View>
        */}

        <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20, marginLeft: 10}}>
          <View style={{alignItems: "center"}}>
            <Checkbox
              value={this.state.checkBoxValue}
              disabled={false}
              onValueChange={this._onValueChange.bind(this)}
            />
          </View>
          <Text style={{color: "black", fontSize: 18, marginLeft: 10}}>Send via SMS</Text>
          {/*
          <TouchableOpacity onPress={() => Actions.whatIsARescuer()}>
            <FontAwesomeIcon
              name="question-circle-o"
              size={20}
              style={{color: "#1abc9c", marginLeft: 10}}
            />
          </TouchableOpacity>
          */}
        </View>

        <View style={{alignItems: "center", marginTop: 30}}>
          <TouchableOpacity style={styles.postBtn}>
            <Text style={styles.btnTxt}>
              Post
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default class Write extends Component {
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
        <ScrollableTabView tabBarPosition='top' style={{flex: 1}} scrollWithoutAnimation={true} locked={true}>
          <PostAs tabLabel="UPDATE" />
          <PostAs tabLabel="HELP" />
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
    backgroundColor: '#F5FCFF',
  },
  closeBtn: {
    flex: 0.2,
    backgroundColor: "red"
  },
  writeContainer: {
    flex: 1,
    // backgroundColor: "red",
    height: height,
    margin: 10,
    padding: 10,
  },
  textInput: {
    // alignItems: "center",
    // backgroundColor: "red",
    // justifyContent: "flex-start",
    flex: 0.8,
    // alignSelf: 'stretch',
    fontSize: 16,
    textAlignVertical: 'top',
    borderColor: "black",
    borderWidth: 2,
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
