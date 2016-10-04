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
  TouchableOpacity,
  Animated
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

 // <Icon
            //   name={tab}
            //   size={30}
            //   color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            //   ref={(icon) => { this.tabIcons[i] = icon; }}
            // />

export default class Profile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  getTabTitle(tabName) {
    let name = "";
    switch(tabName) {
      case "ios-paper-outline":
        name="Home";
        break;
    }
    return name;
  }

  // neeed to toggle animation
  componentDidMount() {
    // this.state.bounceValue.setValue(1.5);     // Start large
    // Animated.spring(                          // Base: spring, decay, timing
    //   this.state.bounceValue,                 // Animate `bounceValue`
    //   {
    //     toValue: 0.8,                         // Animate to smaller size
    //     friction: 1,                          // Bouncier spring
    //   }
    // ).start();                                // Start the animation
  }

  getTabTitle() {
    if (this.props.activeTab == 0) {
      return <Animatable.Text duration={350} style={styles.tabLabel} animation="slideInDown" iterationCount={1} direction="alternate">Updates</Animatable.Text>;
    }
    if (this.props.activeTab == 1) {
      return <Animatable.Text duration={350} style={styles.tabLabel} animation="slideInDown" iterationCount={1} direction="alternate">Alerts</Animatable.Text>;
    }
    if (this.props.activeTab == 2) {
      return <Animatable.Text duration={400} style={styles.tabLabel} animation="slideInDown" iterationCount={1} direction="alternate">Messages</Animatable.Text>;
    }
    if (this.props.activeTab == 3) {
      return <Animatable.Text duration={400} style={styles.tabLabel} animation="slideInDown" iterationCount={1} direction="alternate">Options</Animatable.Text>;
    }
  }

  render() {
    if (this.props.isScrollDown) {
      return (
        <View style={styles.containerOpen}>
          {this.getTabTitle()}
        </View>
      )
    } else {
      return (
        <View style={styles.containerOpen}>
          <TouchableOpacity style={styles.tab} onPress={() => Actions.write()}>
              <Icon
                name="md-create"
                size={25}
                color="gray"
              />
              {/*<Text>{this.getTabTitle(tab)}</Text>*/}
          </TouchableOpacity>
          {this.props.tabs.map((tab, i) => {
            return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={tab}
                size={25}
                style={this.props.activeTab === i ? styles.activeTab : styles.inactiveTab}
              />
              {/*<Text>{this.getTabTitle(tab)}</Text>*/}
            </TouchableOpacity>;
          })}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  tabLabel: {
    flex: 1,
    textAlign: 'center',
    fontWeight: "500",
    fontSize: 18,
    paddingTop: 5,
  },
  container: {
    borderTopWidth: 1,
    borderTopColor: "#1abc9c",
    height: 0,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.0)',
    borderTopColor: 'rgba(255,0,0,0.05)',
  },
  containerOpen: {
    borderTopWidth: 1,
    borderTopColor: "#1abc9c",
    height: 45,
    flexDirection: 'row',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    backgroundColor: "black",
  },
  activeTab: {
    color: "#1abc9c",
  },
  inactiveTab: {
    color: "gray"
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
  },
});
