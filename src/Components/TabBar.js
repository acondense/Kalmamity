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
  TouchableOpacity
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

 // <Icon
            //   name={tab}
            //   size={30}
            //   color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            //   ref={(icon) => { this.tabIcons[i] = icon; }}
            // />

export default class Profile extends Component {

  getTabTitle(tabName) {
    let name = "";
    switch(tabName) {
      case "ios-paper-outline":
        name="Home";
        break;
    }
    return name;
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style, styles.container]}>
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
  container: {
    borderTopWidth: 1,
    borderTopColor: "#1abc9c",
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
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    borderTopColor: 'rgba(255,0,0,0.05)',
  },
});
