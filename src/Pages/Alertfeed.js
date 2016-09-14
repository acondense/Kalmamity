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

import RefreshableNewsfeed from '../Components/RefreshableNewsfeed';

import posts from '../API/StubsAPI/posts.json';

export default class Alertfeed extends Component {

  constructor() {
    super();
    this.state = {
      isFollowingActive: true,
      isAroundActive: false,
      feedFollowing: {title: "HEY FEED"},
      feedAround: {title: "HEY AROUND"}
    }
  }

  _getAroundFeed() {
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
      feedAround: posts,
      dsAround: ds.cloneWithRows(posts),
      dsFollowing: ds.cloneWithRows(posts),
    });
  }

  componentWillMount() {
    this._getAroundFeed();
  }

  renderFeed() {
    if (this.state.isFollowingActive) {
      if (this.state.dsFollowing) {
        return (
          <RefreshableNewsfeed feed={this.state.dsFollowing} styles={styles.list} />
        );
      } else {
        return <Text>Loading Following</Text>
      }
    } else {
      if (this.state.dsAround) {
        return (
          <RefreshableNewsfeed feed={this.state.dsAround} style={styles.list} />
        );
      } else {
        return <Text>Loading Around</Text>
      }
    }
  }

  showFollowing() {
    if (this.state.isFollowingActive == false) {
      this.setState({
        isFollowingActive: true,
        isAroundActive: false
      });
    }
  }

  showAround() {
    if (this.state.isAroundActive == false) {
      this.setState({
        isFollowingActive: false,
        isAroundActive: true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <TouchableOpacity style={this.state.isFollowingActive ? styles.tabFollowingActive: styles.tabFollowing} onPress={this.showFollowing.bind(this)}>
            <Text  style={this.state.isFollowingActive? styles.tabTextActive : styles.tabText}>FOLLOWING</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.isAroundActive ? styles.tabAroundActive : styles.tabAround} onPress={this.showAround.bind(this)}>
            <Text style={this.state.isAroundActive? styles.tabTextActive : styles.tabText}>AROUND</Text>
          </TouchableOpacity>
        </View>
        {this.renderFeed()}
        <ActionButton buttonColor="black" bgColor="rgba(67, 255, 212, 0.5)">
          <ActionButton.Item buttonColor='#ff4369' title="Help request" onPress={() => console.log("Help request")}>
            <Icon name="ios-help-buoy" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Update" onPress={() => {}}>
            <Icon name="ios-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginTop: 5,
    color: "black",
    flex: 0.5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "white",
    borderColor: "#43ffd4",
    borderBottomWidth: 1,
    marginTop: 0,
  },
  tabFollowing: {
    flex: 0.5,
    padding: 5,
    borderColor: "#43ffd4",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 0,
    borderWidth: 1
  },
  tabFollowingActive: {
    flex: 0.5,
    padding: 5,
    borderColor: "#43ffd4",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 0,
    backgroundColor: "#43ffd4",
    borderWidth: 1
  },
  tabAround: {
    flex: 0.5,
    padding: 5,
    borderColor: "#43ffd4",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderLeftWidth: 0,
    borderWidth: 1
  },
  tabAroundActive: {
    flex: 0.5,
    padding: 5,
    borderColor: "#43ffd4",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderLeftWidth: 0,
    backgroundColor: "#43ffd4",
    borderWidth: 1
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'center',
    color: "black"
  },
  tabTextActive: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'center',
    color: "black"
  },
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
    paddingTop: 0,
    paddingBottom: 0,
  },
});