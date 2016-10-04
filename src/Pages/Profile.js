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
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import RefreshableAlertfeed from '../Components/RefreshableAlertfeed';
import RefreshablePlaces from '../Components/RefreshablePlaces';

import alerts from '../API/StubsAPI/alerts.json';

class ProfileTabBar extends Component {
  render() {
    return (
      <View style={styles.tabContainer}>
        {this.props.tabs.map((tab, i) => {
            return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={tab}
                size={25}
                style={this.props.activeTab === i ? styles.activeTab : styles.inactiveTab}
              />
            </TouchableOpacity>;
          })}
      </View>
    );
  }
}

class UserPosts extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.children}
      </View>
    );
  }
}

class Places extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{color: "black", fontFamily: "Montserrat-Bold", fontSize: 30, margin: 10, }}>ADD PLACE+</Text>
        {this.props.children}
      </View>
    );
  }
}

class UserInfo extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>User info here</Text>
        {this.props.children}
      </View>
    );
  }
}


export default class Profile extends Component {

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
      dsPlaces: ds.cloneWithRows(alerts),
    });
  }

  componentWillMount() {
    this._getFeeds();
  }

  renderPost() {
    if (this.state.dsAround) {
      return (
        <RefreshableAlertfeed feed={this.state.dsAround} style={styles.list} />
      );
    } else {
      return <Text>Loading Post</Text>
    }
  }

  renderPlaces() {
    if (this.state.dsPlaces) {
      return <RefreshablePlaces feed={this.state.dsPlaces} style={styles.list} />
    } else {
      return <Text>Loading Places</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userinfo}>
          <Image
            source={require('../assets/user.jpg')}
            style={styles.userimage}
          />
          <Text style={styles.username}>Liza Babes</Text>
        </View>
        <ScrollableTabView  style={{flex: 1}} scrollWithoutAnimation={false} locked={false} renderTabBar={() => <ProfileTabBar />}>
          <UserPosts tabLabel="ios-paper">
            {this.renderPost()}
          </UserPosts>
          <Places tabLabel="ios-map">
            {this.renderPlaces()}
          </Places>
          <UserInfo tabLabel="ios-people" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userinfo: {
    alignItems: "center",
    marginTop: 20,
  },
  userimage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    margin: 10,
  },
  username: {
    fontFamily: "Montserrat-Bold",
    color: "black",
    fontSize: 24,
  },
  contents: {

  },
  tabContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    borderColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  activeTab: {
    color: "#1abc9c",
  },
  inactiveTab: {
    color: "gray",
  }
});
