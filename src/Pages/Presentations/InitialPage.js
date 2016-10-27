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
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import { RNStorage } from '../../API/RNStorage';  
// import Camera from 'react-native-camera';


export default class InitialPage extends Component {

  componentDidMount() {

    // check if the tutorial is already red
    RNStorage.load({
      key: 'hasReadTutorial',
      autoSync: true,
      syncInBackground: true
    }).then(ret => {
      // if true the check if login
      if (ret.data === false) {
        Actions.tutorial();
      }
      else {
        this.checkIfLogin();
      }
    }).catch(err => {
      // if error
      switch (err.name) {
        case 'NotFoundError':
          Actions.tutorial();
        break;
        case 'ExpiredError':
          Actions.tutorial();
        break;
      }
    });
  }

  checkIfLogin() {
    // load
    RNStorage.load({
        key: 'loginState',

        // autoSync(default true) means if data not found or expired,
        // then invoke the corresponding sync method
        autoSync: true,

        // syncInBackground(default true) means if data expired,
        // return the outdated data first while invoke the sync method.
        // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
        syncInBackground: true
    }).then(ret => {
        // found data go to then()
        console.log(ret.userid);
        Actions.main({type: ActionConst.RESET});
        // Actions.main();
    }).catch(err => {
        // any exception including data not found 
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
                Actions.login({type: ActionConst.RESET});
                break;
            case 'ExpiredError':
                Actions.login({type: ActionConst.RESET});
                break;
        }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.checkIfLogin()} style={{alignItems: 'center'}}>
          <Image source={require('../../assets/logo.png')} style={{width: 150, height: 150}}/>
          <Text style={{fontFamily: "Montserrat-Bold", fontSize: 24, color: "#1abc9c"}}>Kalmamity</Text>
        </TouchableOpacity>
        
        {/*
        <TouchableOpacity onPress={() => Actions.login()}>
          <Text style={{fontSize: 30}}>GO TO LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.main()}>
          <Text style={{fontSize: 30}}>GO TO MAIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.tutorial()}>
          <Text style={{fontSize: 30}}>GO TO TUTORIAL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.conversation()}>
          <Text style={{fontSize: 30}}>GO TO CONVERSTATION</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.post()}>
          <Text style={{fontSize: 30}}>GO TO POST</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.write()}>
          <Text style={{fontSize: 30}}>GO TO WRITE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.register()}>
          <Text style={{fontSize: 30}}>GO TO REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.whatIsARescuer()}>
          <Text style={{fontSize: 30}}>GO TO RESCUE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.capture()}>
          <Text style={{fontSize: 30}}>GO TO CAPTURE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.editinfo()}>
          <Text style={{fontSize: 30}}>GO TO EDITINFO</Text>
        </TouchableOpacity>
        */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
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