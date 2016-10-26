import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { KalmamityDB } from '../../API/Firebase';

export default class WriteComment extends Component {

  constructor() {
    super();
    this.state = ({
      height: 0,
    });
  }

  handleComment() {
    KalmamityDB.ref('posts/' + this.props.posttype + '/' + this.props.data.key + '/comments').push({
      text: this.state.text,
      name: this.props.userData.name,
      email: this.props.userData.email,
      contactNo: this.props.userData.contactNo,
    }, (error) => {
      if (error) {
        alert("Something unexpected happen.");
      } else {

        // handle is posting here

        Actions.pop();
      }
    });
  }

  render() {
    return (
      <ScrollView style={{padding: 10}} keyboardShouldPersistTaps={true}>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => Actions.pop()}>
          <Icon name="md-arrow-back" size={35} />
        </TouchableOpacity>
        <View style={{padding: 10}}>
          <Text style={{color: 'black', fontWeight: '500'}}>Commenting on:</Text>
          <Text style={{fontFamily: 'Montserrat-Regular'}}>{this.props.data.val().text}</Text>
        </View>

        <Text style={{padding: 10, color: 'black', fontWeight: '500', fontSize: 18, marginTop: 30}}>Your comment: </Text>
        <View style={{marginLeft: 10, marginRight: 10, borderColor: 'gray', borderBottomWidth: 2}}>
          <TextInput
            // onChangeText={(text) => this.setState({text})}
            // value="Write Something"
            multiline={true}
            placeholder="Write Something"
            underlineColorAndroid='rgba(0,0,0,0)'
            onChange={(event) => {
              this.setState({
                text: event.nativeEvent.text,
                height: event.nativeEvent.contentSize.height,
              });
            }}
            style={{height: Math.max(35, this.state.height), fontFamily: 'Montserrat-Regular', fontSize: 18, marginTop: 10}}
          />
        </View>

        <TouchableOpacity style={{backgroundColor: '#1abc9c', alignItems: 'center', borderRadius: 3, margin: 30, marginTop: 50, marginBottom: 0, flexDirection: 'row', justifyContent: 'center'}}
          onPress={() => this.handleComment()}
        >
          <Icon name="ios-chatbubbles-outline" size={25} style={{marginRight: 10, color: 'white'}}/>
          <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20, paddingTop: 10, paddingBottom: 10, color: 'white'}}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'gray', alignItems: 'center', borderRadius: 3, margin: 30, marginTop: 10, flexDirection: 'row', justifyContent: 'center'}}
          onPress={() => Actions.pop()}
        >
          <Icon name="ios-close" size={25} style={{marginRight: 10, color: 'white'}}/>
          <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20, paddingTop: 10, paddingBottom: 10, color: 'white'}}>Cancel</Text>
        </TouchableOpacity>

      </ScrollView>
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
