import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Welcome from './Welcome';
import RaiseAwareness from './RaiseAwareness';
import Discuss from './Discuss';
import AskHelp from './AskHelp';
import SMS from './SMS';
import Share from './Share';
import Proceed from './Proceed';

class TutorialTabBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 50, alignItems: 'center'}}>
          {this.props.tabs.map((tab, i) => {
            return (
              <Text key={tab} style={this.props.activeTab === i ? styles.active : styles.inactive}>.</Text>
            )
          })}
        </View>
        <Text style={{color: '#1abc9c', fontSize: 20, fontFamily: 'Montserrat-Bold'}}>Kalmamity</Text>
        <Text style={{marginBottom: 30}}>by Team Mamba</Text>
      </View>
    );
  }
}


export default class Tutorial extends Component {
  render() {
    return (
      <ScrollableTabView tabBarPosition='bottom' renderTabBar={() => <TutorialTabBar />}>
        <Welcome tabLabel="1" />
        <RaiseAwareness tabLabel="2" />
        <Discuss tabLabel="3" />
        <AskHelp tabLabel="4" />
        <SMS tabLabel="5" />
        <Share tabLabel="6" />
        <Proceed tabLabel="7" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  active: {
    fontFamily: "Montserrat-Bold",
    color: '#1abc9c',
    fontSize: 80,
    marginBottom: 5,
  },
  inactive: {
    fontFamily: "Montserrat-Bold",
    color: 'gray',
    fontSize: 70,
  }
});
