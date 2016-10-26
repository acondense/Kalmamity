import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  Dimensions,
  ScrollView
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import FeedItem from './FeedItem';

var width = Dimensions.get('window').width;

export default class RefreshableFeed extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['row1']),
      offset: 0,
      direction: "up",
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

  //* <FeedItem style={{flex: 1}} data={rowData} key={rowData.id} /> */}
  renderRow(rowData) {
    return (
      <View>
        <Text>NONE</Text>
      </View>
    );
  }

  render() {
    if (this.props.feed != null) {

      var tempFeeds = [];

      this.props.feed.forEach((snap) => {
        tempFeeds.push(snap);
      });

      tempFeeds.reverse();

      return (
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)} />
          }
        >
          {this.props.children}
          {tempFeeds.map((item, i) => {
            return (
              <FeedItem data={item} key={i} posttype={this.props.posttype} userData={this.props.userData}/>
            );
          })}
        </ScrollView>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#bdc3c7",
  },
});
