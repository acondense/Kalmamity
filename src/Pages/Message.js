import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import RefreshableMessages from '../Components/RefreshableMessages';

import messages from '../API/StubsAPI/messages.json';

export default class Message extends Component {

  costructor() {
    // super(props);
    this.state = {
      hasOpenConversation: false,
    };
  }

  componentWillMount() {
    this._getMessages();
  }

    _getMessages() {
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
      dsMessages: ds.cloneWithRows(messages),
    });
  }

  _toggleOpenConversation() {
    this.setState({
      hasOpenConversation: true,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.hasOpenConversation}</Text>
        <Text>{this.state.hasOpenConversation}</Text>
        <Text>{this.state.hasOpenConversation}</Text>
        <RefreshableMessages messages={this.state.dsMessages} toggleMessage={this._toggleOpenConversation}/>
        <Text>{this.state.hasOpenConversation}</Text>
        {this.state.hasOpenConversation ? <Text>A convo</Text> : <Text> Not a convo </Text>}
      </View>
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
});
