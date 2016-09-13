import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  Dimensions
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import NewsfeedItem from '../Components/NewsfeedItem';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUJRtPEn6hN4E0q-TAGfy8l-111TlsGtw",
  authDomain: "kalmamity-2223f.firebaseapp.com",
  databaseURL: "https://kalmamity-2223f.firebaseio.com",
  storageBucket: "kalmamity-2223f.appspot.com",
};
// const firebaseApp = firebase.initializeApp(firebaseConfig);

var width = Dimensions.get('window').width;

export default class NewsfeedAround extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row3']),
    };
    this.itemsRef = {};
    // firebaseApp.database().ref("/users").set("23");
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({refreshing: false});
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({dataSource: ds.cloneWithRows(responseJson)});
        // console.log(responseJson);
      })
      .catch((error) => {
        this.setState({refreshing: false});
        console.error(error);
      });
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.props.feed}
        renderRow={(rowData) => <NewsfeedItem style={{flex: 1}} news={rowData} key={rowData.id} />}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#ecf0f1",
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
});
