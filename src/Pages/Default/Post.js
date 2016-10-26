import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ActionButton from 'react-native-action-button';

const width = Dimensions.get('window').width;

export default class Post extends Component {

  componentWillMount() {

  }

  renderImage() {
    if (this.props.data.val().uri) {
      return (
        <Image source={{uri: "http://media.philstar.com/images/the-philippine-star/headlines/20150621/start-rainy-season-habagat-cyclone-6.jpg"}}
          style={{height: 200, width: width}}
        />
      )
    }
  }

  renderComments() {

    if (this.props.data.val().comments == null) {
      return <Text>No comments yet.</Text>
    }

    else
    {
      return
        Object.keys(this.props.data.val().comments).map((key, i) => {
          return (
            <View key={i} style={{marginBottom: 5, paddingTop: 5, borderColor: 'rgba(255, 255, 255, 0.1)', borderTopWidth: 1}}>
              <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>{this.props.data.val().comments[key].name}</Text>
              <Text style={{color: 'black'}}>{this.props.data.val().comments[key].text}</Text>
            </View>
          );
        })
    }
  }

   renderDate() {
    var date = Date.now() - this.props.data.val().time;
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    if (date/msPerMinute < 59) {
      if (date/msPerMinute > 1)
        return Math.floor(date/msPerMinute) + "mins";
      else
        return Math.floor(date/msPerMinute) + "min";
    } else if (date/msPerHour < 23) {
      if (date/msPerHour > 1)
        return Math.floor(date/msPerHour) + "hrs";
      else
        return Math.floor(date/msPerHour) + "hr";
    } else if (date/msPerDay < 29) {
      if (date/msPerDay > 1)
        return Math.floor(date/msPerDay) + "days";
      else 
        return Math.floor(date/msPerDay) + "day";
    } else if (date/msPerMonth < 12) {
      if (date/msPerMonth > 1)
        return Math.floor(date/msPerMonth) + "mon";
      else
        return Math.floor(date/msPerDay) + "mons";
    } else {
      if (date/msPerYear > 1)
        return Math.floor(date/msPerYear) + "yrs";
      else
        return Math.floor(date/msPerYear) + "yr";
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <KeyboardAwareScrollView style={{flex: 1}} keyboardShouldPersistTaps={true}>
        <View style={{borderTopWidth: 5, borderColor: '#1abc9c', paddingLeft: 20, paddingTop: 10}}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="md-arrow-back" size={35} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/user.jpg')} style={{width: 30, height: 30, borderRadius: 25, marginBottom: 10}} />
            <View style={{marginLeft: 10}}>
              <Text style={{color: "black", fontSize: 20, fontFamily: "Montserrat-Bold"}}>{this.props.data.val().username}</Text>
              <Text style={{fontFamily: "Montserrat-Regular", fontSize: 14, marginBottom: 10}}>
                {this.renderDate()} ago
              </Text>
            </View>
          </View>
        </View>

        <View style={{margin: 20, marginTop: 0}}>
          <Text style={{fontFamily: "Montserrat-Regular", fontSize: 14, color: 'black'}}>{this.props.data.val().text}</Text>
          {this.renderImage()}
          <TouchableOpacity style={{backgroundColor: '#1abc9c', alignItems: 'center', borderRadius: 3, marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}
            onPress={() => Actions.viewInMap({data: this.props.data})}
          >
            <Icon name="ios-map" size={25} style={{marginRight: 10, color: 'white'}}/>
            <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20, paddingTop: 10, paddingBottom: 10, color: 'white'}}>View in Map</Text>
          </TouchableOpacity>

        </View>

        {/* UPVOTE AND DOWNVOTE
        <View style={{flexDirection: "row", margin: 20}}>
          <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, alignItems: "center", borderRadius: 5}}>
            <Icon style={{marginLeft: 5, marginRight: 10}} name="ios-arrow-up" size={36} />
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, alignItems: "center", marginLeft: 10, borderRadius: 5}}>
            <Icon style={{marginLeft: 5, marginRight: 10}} name="ios-arrow-down" size={36} />
          </TouchableOpacity>
        </View>
        */}

        <View style={{margin: 20, marginTop: 30}}>
          <Text style={{fontFamily: "Montserrat-Regular", color: "black", fontSize: 18, marginBottom: 10}}>Comments: </Text>

          {this.props.data.val().comments == null ?
            <Text>No comments yet.</Text> :
            Object.keys(this.props.data.val().comments).map((key, i) => {
              return (
                <View key={i} style={{marginBottom: 5, paddingTop: 5, borderColor: 'rgba(255, 255, 255, 0.1)', borderTopWidth: 1}}>
                  <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>{this.props.data.val().comments[key].name}</Text>
                  <Text style={{color: 'black'}}>{this.props.data.val().comments[key].text}</Text>
                </View>
              );
            })
          }

        </View>
      </KeyboardAwareScrollView>
        <ActionButton
            buttonColor="#1abc9c"
            backdrop={true}
            offsetX={30}
            offsetY={20}
            style={{marginTop: 300}}
            onPress={() => Actions.writeComment({data: this.props.data, posttype: this.props.posttype, userData: this.props.userData})}
            icon={<Icon name="ios-create" size={30}/>}
          />
      </View>
    );
  }
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
