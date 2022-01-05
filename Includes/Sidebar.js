import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Linking,Alert
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.disableYellowBox = true

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      token: "",
      profile_image: "",
      name: ""

    }

  }


  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
        <View style={{ width: "100%", marginTop: 40 }}>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{ width: "80%", paddingLeft: 15 }}>
              <Image style={{ width: 80, height: 80, resizeMode: "contain", }} source={require('../assets/logo.png')} />
            </View>
           
          </View>
        

          
        </View>



     

        








      </View>


    );
  }

}
const styles = StyleSheet.create({
  pic: {


    height: 250,
    width: "100%",


  },
  login_button: {
    width: "90%",

    marginTop: 10,
    paddingVertical: 13,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#808080",
    borderRadius: 10
  },
  facebook: {

    width: "90%",

    marginTop: 30,
    paddingVertical: 13,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#005f9A",
    borderRadius: 10
  },
  box: {

    width: "35%",
    height: 90,
    resizeMode: "cover",
    borderRadius: 80,

    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 2.60,
    shadowRadius: 2.62,
    elevation: 6,


  },
});