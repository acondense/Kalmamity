import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Alert,
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import RefreshableFeed from '../../Components/RefreshableFeed';
// import RefreshablePlaces from '../Components/RefreshablePlaces';

import { RNStorage } from '../../API/RNStorage';

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

// <TouchableOpacity style={{alignSelf: "flex-end", borderWidth: 2, borderRadius: 5, margin: 10, padding: 5, borderColor: "#1abc9c"}}
//           onPress={() => Actions.editinfo({userinfo: this.props.userData})}
//        >
//           <Text style={{fontSize: 18, fontWeight: "500", marginLeft: 10, marginRight: 10, fontFamily: "Montserrat-Bold"}}>Edit Info</Text>
//        </TouchableOpacity>

class UserInfo extends Component {

  _handleLogout() {
    RNStorage.remove({
      key: "loginState"
    });
    Actions.login({type: ActionConst.RESET});
  }

  render() {
    return (
      <View style={{flex: 1, padding: 5, backgroundColor: "#bdc3c7"}}>
        <View style={{backgroundColor: "white", borderRadius: 5, flex: 1}}>
        
        <View style={{padding: 20}}>
          <Text>Name: </Text>
          <Text style={{fontSize: 20, fontFamily: "Montserrat-Bold", color: "black", marginBottom: 10,}}>
            {this.props.userData.name}
          </Text>
          <Text>Email: </Text>
          <Text style={{fontSize: 20, fontFamily: "Montserrat-Bold", color: "black", marginBottom: 10,}}>
            {this.props.userData.email}
          </Text>
          <Text>Phone: </Text>
          <Text style={{fontSize: 20, fontFamily: "Montserrat-Bold", color: "black", marginBottom: 10,}}>
            {this.props.userData.contactNo}
          </Text>
          
          <TouchableOpacity style={{backgroundColor: "black", padding: 10, alignItems: "center", marginTop: 40,}} onPress={() => this._handleLogout()}>
            <Text style={{color: "#1abc9c", fontSize: 24, fontFamily: "Montserrat-Bold"}}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

class PatrolArea extends Component {
  render() {
    if (this.props.userData.isRescuer === true) {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>You must be a rescuer to have a patrol area.</Text>
          <TouchableOpacity>
            <Text>Request to be a rescuer</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <Text>You are not a rescuer</Text>
      )
    }
  }
}


export default class Profile extends Component {

  renderPost(data) {
    if (data) {
      return (
        <RefreshableFeed feed={data} style={styles.list} />
      );
    } else {
      return <Text>Loading Post</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userinfo}>
          <Image
            source={require('../../assets/user.jpg')}
            style={styles.userimage}
          />
          <Text style={styles.username}>{this.props.userData.name}</Text>
        </View>
        <ScrollableTabView  style={{flex: 1}} scrollWithoutAnimation={false} locked={false} renderTabBar={() => <ProfileTabBar />}>
          <UserPosts tabLabel="ios-paper">
            {this.renderPost(this.props.userpostsupdate)}
          </UserPosts>
          <UserPosts tabLabel="ios-warning">
            {this.renderPost(this.props.userpostshelp)}
          </UserPosts>
          {/*
          <Places tabLabel="ios-map">
            {this.renderPlaces()}
          </Places>
          */}
          <UserInfo tabLabel="ios-person" userData={this.props.userData}/>
          {/*
          <PatrolArea tabLabel="ios-pin" userData={this.props.userData} />
          */}
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
