import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class datafeedItem extends Component {

  renderImage() {
    if (this.props.data.val().uri) {
      return (
        <View style={{flex: 1, alignSelf: "stretch", height: 300, marginTop: 10}}>
          <Image source={{uri: this.props.data.val().uri}} style={{...StyleSheet.absoluteFillObject}}/>
        </View>
      );
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

  renderText() {
    if (!this.props.data.val().image || this.props.data.val().image != "") {
      return (
        <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 14, color: "black", marginBottom: 10}}>
          {this.props.data.val().text}
        </Text>
      )
    } else {
      return (
        <Text style={{fontFamily: "Montserrat-Regular", fontSize: 12, color: "black", marginBottom: 10}}>
          {this.props.data.val().text}
        </Text>
      );
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}
        onPress={() => Actions.post({data: this.props.data, posttype: this.props.posttype, userData: this.props.userData})}
      >
        <View>
          <View style={[styles.userinfo, {margin: 15, marginBottom: 0}]}>
            <Image
              source={require('../assets/user.jpg')}
              style={styles.userimage}
            />
            <View style={styles.namelocation}>
              <Text style={{fontSize: 16, fontFamily: "Montserrat-Bold", color: "black"}}>
                {this.props.data.val().username}
              </Text>
              <Text style={{fontFamily: "Montserrat-Regular", fontSize: 14, marginBottom: 10}}>
                {this.renderDate()} ago
              </Text>
            </View>
          </View>
          <View style={{padding: 15, paddingTop: 0}}>
            {this.renderText()}
          </View>

          {this.renderImage()}

          
        </View>
      </TouchableOpacity>
    );
  }
}

/*
<View style={{padding: 15, paddingTop: 0}}>
  {this.renderText()}
  <View style={styles.actions}>
    <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, alignItems: "center", borderRadius: 5}}>
      <Icon style={styles.action} name="ios-arrow-up" size={36} />
    </TouchableOpacity>
    <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, alignItems: "center", marginLeft: 10, borderRadius: 5}}>
      <Icon style={[styles.action]} name="ios-arrow-down" size={36} />
    </TouchableOpacity>
    <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, paddingTop: 3, alignItems: "center", marginLeft: 10, borderRadius: 5}}
      onPress={() => alert("Comments")}
    >
      <Icon style={[styles.action]} name="ios-chatbubbles-outline" size={30} />
    </TouchableOpacity>
  </View>
</View>
*/

/*
<View style={styles.actions}>
              <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, alignItems: "center", borderRadius: 5}}>
                <Icon style={styles.action} name="ios-arrow-up" size={36} />
              </TouchableOpacity>
              <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, alignItems: "center", marginLeft: 10, borderRadius: 5}}>
                <Icon style={[styles.action]} name="ios-arrow-down" size={36} />
              </TouchableOpacity>
              <TouchableOpacity style={{borderColor: "gray", borderWidth: 1, paddingLeft: 10, paddingRight: 5, paddingTop: 3, alignItems: "center", marginLeft: 10, borderRadius: 5}}
                onPress={() => alert("Comments")}
              >
                <Icon style={[styles.action]} name="ios-chatbubbles-outline" size={30} />
              </TouchableOpacity>
            </View>
 */

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    paddingBottom: 0,
    alignItems: 'stretch',
    elevation: 1,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#2ecc71",
    margin: 5,
    borderRadius: 2,
  },
  userinfo: {
    flexDirection: "row",
  },
  namelocation: {
    flex: 1,
  },
  location: {
    fontSize: 12,
    marginTop: 0,
  },
  userimage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 5,
  },
  username: {
    fontWeight: "900",
    fontSize: 16,
    marginBottom: 0,
    color: "black"
  },
  text: {
    fontWeight: "200",
    marginTop: 10,
    marginBottom: 10
  },
  actions: {
    flexDirection: "row"
  },
  action: {
    marginRight: 5,
  },
  likesCount: {
    padding: 2,
    marginRight: 20,
  },
});
