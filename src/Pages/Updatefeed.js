import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ListView
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import RefreshableAlertfeed from '../Components/RefreshableAlertfeed';

import alerts from '../API/StubsAPI/alerts.json';

export default class Udpatefeed extends Component {

  constructor() {
    super();
    this.state = {
      isFollowingActive: true,
      isAroundActive: false,
      feedFollowing: {title: "HEY FEED"},
      feedAround: {title: "HEY AROUND"}
    }
  }

  _getFeeds() {
    // fetch('../API/StubsAPI/posts.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //     this.setState({
    //       feedAround: responseJson,
    //       dsAround: ds.cloneWithRows(responseJson),
    //     });
    //     console.log(responseJson);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // this.setState({
    //   feedAround: {title: "GET AROUND FEED"}
    // });
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dsAround: ds.cloneWithRows(alerts),
      dsFollowing: ds.cloneWithRows(alerts),
    });
  }

  componentWillMount() {
    this._getFeeds();
  }

  renderFeed() {
    if (this.state.dsAround) {
      return (
        <RefreshableAlertfeed feed={this.state.dsAround} style={styles.list} />
      );
    } else {
      return <Text>Loading Around</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
            <Text style={styles.title}>&middot; UPDATES &middot;</Text>
        </View>
        {this.renderFeed()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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