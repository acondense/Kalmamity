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

export default class TabBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerOpen}>
        {/* TOUCHABLEOPACITY WRITE BUTTON*/}
        <TouchableOpacity style={styles.tab} onPress={() => Actions.write({location: this.props.location, userData: this.props.userData})}>
            <Icon
              name="md-create"
              size={25}
              color="gray"
            />
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
    height: 60,
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
