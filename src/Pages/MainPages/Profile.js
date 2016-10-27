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
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MapView from 'react-native-maps';
// import RefreshablePlaces from '../Components/RefreshablePlaces';
import { KalmamityDB} from '../../API/Firebase';

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
          
          <Text style={{fontFamily: 'Montserrat-Bold', color: 'black', fontSize: 16}}>Help:</Text>

          <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={() => Actions.tutorial()}>
            <Text style={{color: '#1abc9c', fontFamily: 'Montserrat-Regular', fontSize: 18}}>Tutorial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 5, marginLeft: 20}} onPress={() => Actions.whatIsARescuer()}>
            <Text style={{color: '#1abc9c', fontFamily: 'Montserrat-Regular', fontSize: 18}}>What is a Rescuer?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 5, marginLeft: 20}} onPress={() => Actions.termsAndConditions()} >
            <Text style={{color: '#1abc9c', fontFamily: 'Montserrat-Regular', fontSize: 18}}>Terms and Conditions</Text>
          </TouchableOpacity>

          
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

  handleSetPatrolArea() {
    var updates = {};
    updates['/users/' + this.props.userDataSnap.key +'/lat' ] = this.props.location.latitude;
    KalmamityDB.ref().update(updates);
    updates['/users/' + this.props.userDataSnap.key +'/lon' ] = this.props.location.longitude;
    KalmamityDB.ref().update(updates);

    // fetch('http://mambacodes.hol.es/KalmamityServer/updatePatrolArea', {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     lat: this.props.location.latitude,
    //     lon: this.props.location.longitude,
    //     email: this.props.userDataSnap.val().email,
    //     contactNo: this.props.userDataSnap.val().contactNo
    //   })
    // })

  }

  render() {
    if (this.props.userData.isRescuer === true && this.props.location) {
      return (
        <View style={{flex: 1}}>
          <View style={{padding: 10}}>
            <TouchableOpacity style={{padding: 15, backgroundColor: '#1abc9c', alignItems: 'center', borderRadius: 3}}
              onPress={() => this.handleSetPatrolArea()}
            >
              <Text style={{fontFamily: 'Montserrat-Bold', color: 'white'}}>Set current location as your patrol area</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 10}}>You will receive notification of help requests within the patrol area.</Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: this.props.location.latitude,
                longitude: this.props.location.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              showsUserLocation={true}
            >
              <MapView.Circle
                center={{
                  latitude: this.props.location.latitude,
                  longitude: this.props.location.longitude,
                }}
                radius={700}
                fillColor='rgba(26, 188, 156, 0.5)'
                strokeColor='#1abc9c'
              />
            </MapView>
          </View>
        </View>
      )
    } else if (this.props.userData.isRescuer === true) {
      return (
        <View style={{alignItems: 'center', padding: 30}}>
          <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 16}}>
            Accessing Location.
          </Text>
        </View>
      )
    } else {
      return (
        <View style={{alignItems: 'center', padding: 30}}>
          <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 24, textAlign: 'center', color: '#1abc9c'}}>You must be a rescuer to have a patrol area.</Text>
          <EvilIcon name="envelope" size={60} style={{marginTop: 30}}/>
          <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 16}}>
            Rescuer accounts will be notified when a help request is within the patrol area.
          </Text>
          <TouchableOpacity style={{padding: 10, backgroundColor: '#1abc9c', marginTop: 30}}>
            <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20}}>Request to be a rescuer</Text>
          </TouchableOpacity>
        </View>
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
          <UserPosts tabLabel="ios-help-buoy">
            {this.renderPost(this.props.userpostshelp)}
          </UserPosts>
          {/*
          <Places tabLabel="ios-map">
            {this.renderPlaces()}
          </Places>
          */}
          <PatrolArea location={this.props.location} tabLabel="ios-pin" userDataSnap={this.props.userDataSnap} userData={this.props.userData} />
          <UserInfo tabLabel="ios-person" userData={this.props.userData}  />
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
    flexDirection: 'row',
  },
  userimage: {
    height: 50,
    width: 50,
    borderRadius: 25,
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
    backgroundColor: 'black'
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
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
