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

// import NewsfeedItem from '../Components/NewsfeedItem';
import RefreshableList from '../Components/RefreshableList';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import NewsfeedAround from './NewsfeedAround';

import posts from '../API/StubsAPI/posts.json';

export default class Newsfeed extends Component {

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
    });
  }

  componentWillMount() {
    this._getAroundFeed();
  }

  renderFeed() {
    //
    if (this.state.isFollowingActive) {
      if (this.state.dsFollowing) {
        return (
          <Text>Following</Text>  
        );
      } else {
        return <Text>Loading Following</Text>
      }
    } else {
      if (this.state.dsAround) {
        return (
          <NewsfeedAround feed={this.state.dsAround} style={styles.list} />
        );
      } else {
        return <Text>Loading Around</Text>
      }
    }
  }

  showFollowing() {
    console.log("following is cli");
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: "white",
    borderColor: "#43ffd4",
    borderBottomWidth: 1,
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
  }
});
