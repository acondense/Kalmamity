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

import RefreshableFeed from '../../Components/RefreshableFeed';

import ExplainUpdate from '../Presentations/ExplainUpdate';

const width = Dimensions.get('window').width;

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

  renderFeed() {

    // no internet, connection problems
    if (this.props.posts == null || this.props.posts.length == 0) {
      return (
        <View style={{padding: 20}}>
          <Text style={{color: "#1abc9c", fontFamily: "Montserrat-Bold", fontSize: 18, alignSelf: 'center', marginTop: 30, textAlign: 'center'}}>
            Kalmamity is unable to connect.
          </Text>
          <Text style={{alignSelf: 'center', textAlign: 'center'}}>
            To get nearby updates Kalmamity
            needs an internet connection and turn on GPS.
          </Text>
          <ExplainUpdate />
        </View>
      );
    }

    // has internet but no post was  found
    else if (this.props.posts.val() != null) {
      return (
        <RefreshableFeed feed={this.props.posts} style={styles.list} posttype="update" userData={this.props.userData}>
          <View style={{backgroundColor: '#1ed3af', padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#1abc9c'}}>
            <Icon name="ios-paper-outline" size={80} color='white' />
            <View style={{margin: 10, width: width-100}}>
              <Text style={{fontFamily: "Montserrat-Bold", fontSize: 18,color: 'white'}}>
                Updates
              </Text>
              <Text>
                Raise awareness to the community around you. Read and give updates.
              </Text>
            </View>
          </View>
        </RefreshableFeed>
      );
    }

    // no post was found
    else if (this.props.posts.val() == null) {
      return (
        <View style={{padding: 20}}>
          <Text style={{color: "#1abc9c", fontFamily: "Montserrat-Bold", fontSize: 18, alignSelf: 'center', marginTop: 30}}>
           No nearby help requests found.
           </Text>
          <ExplainAround />
        </View>
      )
    }

    else {
      return (
        <View style={{padding: 20}}>
          <Text style={{color: "#1abc9c", fontFamily: "Montserrat-Bold", fontSize: 18, alignSelf: 'center', marginTop: 30}}>
            Loading...
          </Text>
          <ExplainAround />
        </View>
      )
    }
  }

  render() {
    if (this.props.location != "") {
      return (
        <View style={styles.container}>
          <View style={styles.tab}>
              <Text style={styles.title}>&middot; UPDATES &middot;</Text>
          </View>
          {this.renderFeed()}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.tab}>
              <Text style={styles.title}>&middot; UPDATES &middot;</Text>
          </View>
          <View style={{flex: 1, justifyContent: "center"}}>
            <Text style={{fontSize: 24, fontFamily: "Montserrat-Bold", color: "#1abc9c"}}>Unable to fetch location</Text>
            <Text>Make sure that GPS is on.</Text>
          </View>
        </View>
      );
    }
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