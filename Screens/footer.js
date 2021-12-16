import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, TextInput, ScrollView,activeMenu,AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Ionicons, EvilIcons, MaterialCommunityIcons, Octicons, Feather, Entypo,SimpleLineIcons,AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
console.disableYellowBox = true
// import { color } from 'react-native-reanimated';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      page : "",
      user_id : null,
    }

  
  }

  render(){
    return (
      
        <View style={{ width: "100%", flexDirection: "row", position: "absolute", bottom: 0, backgroundColor: '#000',borderTopWidth :1, borderTopColor: '#D1D1D1',paddingVertical:1,paddingHorizontal:5,zIndex:0 }}>
          <View style={styles.searchicon}>
          <TouchableOpacity style={{ width: "100%",alignItems:"center" }} 
            // onPress={() => this.props.navigation.push('star')}
            >
              
            <View style={{width:"95%",paddingTop:8,paddingBottom:12,alignItems:"center"}}>
            <View >
            <MaterialIcons name="people-alt" size={24} color={this.props.title == "star" ? "#ffd700" : "#9e9e9e"} />
              </View>
              <Text style={{  color: this.props.title == "home" ? "#fff" : "#B1B1B1",textAlign:"center",fontSize:12 }} >Players </Text>
              </View> 
            </TouchableOpacity>

          </View>
          <View style={styles.searchicon}>
          <TouchableOpacity style={{ width: "100%",alignItems:"center" }} 
            // onPress={() => this.props.navigation.push('star')}
            >
              
            <View style={{width:"95%",paddingTop:8,paddingBottom:12,alignItems:"center"}}>
            <View >
            <MaterialIcons name="people-alt" size={24} color={this.props.title == "star" ? "#ffd700" : "#9e9e9e"} />
              </View>
              <Text style={{  color: this.props.title == "home" ? "#fff" : "#B1B1B1",textAlign:"center",fontSize:12 }} >Queue</Text>
              </View> 
            </TouchableOpacity>

          </View>
          <View style={styles.searchicon}>
          <TouchableOpacity style={{ width: "100%",alignItems:"center" }} 
            // onPress={() => this.props.navigation.push('star')}
            >
              
            <View style={{width:"95%",paddingTop:8,paddingBottom:12,alignItems:"center"}}>
            <View >
            <MaterialIcons name="people-alt" size={24} color={this.props.title == "star" ? "#ffd700" : "#9e9e9e"} />
              </View>
              <Text style={{  color: this.props.title == "home" ? "#fff" : "#B1B1B1",textAlign:"center",fontSize:12 }} >Roaster</Text>
              </View> 
            </TouchableOpacity>

          </View>
           
          <View style={styles.searchicon}>
          <TouchableOpacity style={{ width: "100%",alignItems:"center" }} 
            // onPress={() => this.props.navigation.push('star')}
            >
              
            <View style={{width:"95%",paddingTop:8,paddingBottom:12,alignItems:"center"}}>
            <View >
            <MaterialIcons name="people-alt" size={24} color={this.props.title == "star" ? "#ffd700" : "#9e9e9e"} />
              </View>
              <Text style={{  color: this.props.title == "home" ? "#fff" : "#B1B1B1",textAlign:"center",fontSize:12 }} >Home</Text>
              </View> 
            </TouchableOpacity>

          </View>
          </View>
     
        
    );
  }
  
}
const styles = StyleSheet.create({
icon: {

  width: "20%",
  alignItems: "center",
  justifyContent: "center",
 
  

},
searchicon: {

  width: "25%",
  alignItems: "center",
  justifyContent: "center",
    

},
})