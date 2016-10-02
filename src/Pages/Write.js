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


class PostAsUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '', height: 0};
  }

  render() {
    return (
      <KeyboardAwareScrollView>
      <View style={styles.writeContainer}>
        <View style={{flexDirection: "row"}}>
          <Image
            source={require('../assets/user.jpg')}
            style={styles.userimage}
          />
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
          <Text style={{fontSize: 18, fontWeight: "500", color: "black"}}>IMAGES</Text>
          
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.imageInput}>
              <Icon name="ios-image-outline" size={36} />
            </TouchableOpacity>
            <TouchableOpacity style={[{paddingTop: 3}, styles.imageInput]} onPress={() => Actions.capture()}>
              <Icon name="ios-camera-outline" size={36} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: "row", height: 80, padding: 10, alignItems: "center", borderBottomWidth: 1, borderColor: "black"}}>
          <Image
            source={require('../assets/user.jpg')}
            style={styles.postImage}
          />
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

class PostAsHelp extends Component {
  render() {
    return <Text>This is an help</Text>
  }
}

export default class Write extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", padding: 15}}>
          <TouchableOpacity onPress={() => Actions.pop()} style={styles.closeBtn}>
            <Icon
              name="md-close"
              size={25}
            />
          </TouchableOpacity>
          <Text style={styles.shareAs}>Share as</Text>
        </View>
        <ScrollableTabView tabBarPosition='top'>
          <PostAsUpdate tabLabel="UPDATE" />
          <PostAsHelp tabLabel="HELP" />
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
    color: "#1abc9c"
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
