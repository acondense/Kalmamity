import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  Dimensions
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import AlertfeedItem from './AlertfeedItem';

var width = Dimensions.get('window').width;

export default class RefreshableAlertfeed extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row3']),
      offset: 0,
      direction: "up",
    };
    this.itemsRef = {};
    // firebaseApp.database().ref("/users").set("23");
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({refreshing: false});
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({dataSource: ds.cloneWithRows(responseJson)});
        // console.log(responseJson);
      })
      .catch((error) => {
        this.setState({refreshing: false});
        console.error(error);
      });
  }

  renderRow(rowData) {
    return (
      <AlertfeedItem style={{flex: 1}} alert={rowData} key={rowData.id} />
    )
  }

  onScroll(event) {
    // var currentOffset = event.nativeEvent.contentOffset.y;
    // // var direction = (currentOffset - 20) > this.state.offset  && this.state.direction == 'down' ? 'down' : 'up';
    // // 
    // if (currentOffset - 20 >= this.state.offset) {
    //   this.setState({
    //     offset: currentOffset,
    //     direction: 'down',
    //   });
    // } else if (currentOffset <= this.state.offset - 20) {
    //   this.setState({
    //     offset: currentOffset,
    //     direction: 'up',
    //   })
    // }
    
    // console.log(currentOffset + " : " + this.state.offset + " : " + this.state.direction);

    // this.props.onScroll(this.state.direction);
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.props.feed}
        renderRow={this.renderRow.bind(this)}
        onScroll={this.onScroll.bind(this)}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#ecf0f1",
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
