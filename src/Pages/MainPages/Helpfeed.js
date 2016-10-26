import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ListView,
  ScrollView,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import RefreshableFeed from '../../Components/RefreshableFeed';

// Presentations components
import ExplainHelp from '../Presentations/ExplainHelp';
import NoConnection from '../Presentations/NoConnection';

const width = Dimensions.get('window').width;

export default class Helpfeed extends Component {

  constructor() {
    super();
    this.state = {
      isFollowingActive: true,
      isAroundActive: false,
      feedFollowing: {title: "HEY FEED"},
      feedAround: {title: "HEY AROUND"}
    }
  }

  // _getFeeds() {
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   this.setState({
  //     dsAround: ds.cloneWithRows(alerts),
  //     dsFollowing: ds.cloneWithRows(alerts),
  //   });
  // }

  componentWillMount() {
    // this._getFeeds();
  }

  renderFeed() {

    // no internet, connection problems
    if (this.props.posts == null || this.props.posts.length == 0) {
      return (
        <ScrollView>
          <View style={{padding: 20}}>
            <Text style={{color: "#1abc9c", fontFamily: "Montserrat-Bold", fontSize: 18, alignSelf: 'center', marginTop: 30}}>
              Kalmamity is unable to connect.
            </Text>
            <Text style={{alignSelf: 'center', textAlign: 'center'}}>
              To get nearby help requests Kalmamity
              needs an internet connection and turn on GPS.
            </Text>
            <ExplainHelp />
          </View>
        </ScrollView>
      );
    }

    // has internet
    else if (this.props.posts.val() != null) {
      return (
        <RefreshableFeed feed={this.props.posts} style={styles.list} posttype="help" userData={this.props.userData}>
          <View style={{backgroundColor: 'white', padding: 10, flexDirection: 'row'}}>
            <Icon name="ios-help-buoy" size={80} color="#e74c3c" />
            <View style={{margin: 10}}>
              <Text style={{fontFamily: "Montserrat-Bold", fontSize: 18, color: '#e74c3c'}}>
                Help
              </Text>
              <Text>
                Help those nearby who need help.
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
          <ExplainHelp />
        </View>
      )
    }

    else {
      return (
        <View style={{padding: 20}}>
          <Text style={{color: "#1abc9c", fontFamily: "Montserrat-Bold", fontSize: 18, alignSelf: 'center', marginTop: 30}}>
            Loading...
          </Text>
          <ExplainHelp />
        </View>
      )
    }
  }

  render() {
    if (this.props.location != "") {
      return (
        <View style={styles.container}>
          <View style={styles.tab}>
              <Text style={styles.title}>&middot; HELP &middot;</Text>
          </View>
          {this.renderFeed()}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.tab}>
              <Text style={styles.title}>&middot; HELPS &middot;</Text>
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