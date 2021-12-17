import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage, Button, Linking, Switch, FlatList
} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Footer from './footer'

export default class player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      is_favorite: false,
      toggle_search: false,
      entries: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      toggle: [1, 2, 3, 4, 5],
      admin_post: [],
      search: "",
      tags: [],
      total_pro_pages: "",
      tag_selected: 0,
      current_page: 1,
      show_pageNo: false,
      hidePass: true

    }

  }


  render() {



    return (

      <View style={{ flex: 1, alignItems: "center", alignContent: "center", backgroundColor: "#fff" }}>
        <View style={{ width: "100%", alignContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 50, backgroundColor: "#222222", paddingVertical: 5 }}>
          <TouchableOpacity style={{ width: '15%', justifyContent: 'center', alignItems: "center" }}
          // onPress={()=>this.props.navigation.push("rider_availabiliy")}
          >
            <Entypo name="cross" size={22} color="#FFF" />
          </TouchableOpacity>
          <View style={{ width: '85%', paddingRight: 40 }}>
            <Text style={{ color: '#9AEC2E', fontSize: 18, textAlign: "center", fontWeight: "bold" }}>00:52 </Text>

            <Text style={{ color: '#cccccc', fontSize: 14, fontWeight: "bold", textAlign: "center" }}>Round 3 , Pack 2</Text>
          </View>
        </View>

        <View style={{ width: "100%", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#424242", paddingVertical: 5 }}>

          <View style={{ width: '90%' }}>
            <Text style={{ color: '#cccccc', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>Autodraft would be D.Adams</Text>
          </View>

          <View style={{ width: "90%", marginTop: 5 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >

              <View style={styles.popbox}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text style={{ color: '#9AEC2E', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>On the clock:</Text>
                    <Text style={{ color: '#fff', fontSize: 15, textAlign: "center", fontWeight: "bold", paddingTop: 5 }}>DK-ZSmith</Text>
                  </View>
                  <View style={{ paddingLeft:10 }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                  </View>
                </View>
              </View>
              <View style={{ borderRadius: 10,marginHorizontal:10, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
   
                    <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80,backgroundColor:"#424242",alignItems:"center",justifyContent:"center" }} >
                    <FontAwesome name="refresh" size={18} color="#fff" />
                    </View>
                    <View style={{ paddingTop:5 }}>
            <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>9</Text>
          </View>

                </View>


            </ScrollView>


          </View>
        </View>









        <Footer title={"home"} back={false} navigation={this.props.navigation} />



      </View>


    );



  }

}
const styles = StyleSheet.create({
  popbox1: {

    width: "100%",

    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 1,

    paddingVertical: 5,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 2.62,
    elevation: 6,
  },

  pic: {

    height: 200,
    width: 200,
    resizeMode: "cover"


  },
  login_button: {
    width: "80%",
    paddingVertical: 13,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#00a2fb",
    borderWidth: 1
  },
  SignUp_button: {
    padding: 5,
    marginHorizontal: 15,
    marginTop: 15,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#00a2fb",
    backgroundColor: "#00a2fb",
    borderWidth: 1
  },
  search: {

    width: "100%",
    marginTop: 10,
    paddingVertical: 10,

    backgroundColor: "#ededed",
    borderRadius: 10,
  },
  popbox: {
    padding: 10, alignContent: "center", alignItems: "center", backgroundColor: "#648035", marginTop: 10, borderWidth: 2, borderColor: "#def28a",
    shadowColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 2.60,
    shadowRadius: 2.62,
    elevation: 6,
  },

  document: {
    width: 18, height: 18, borderRadius: 50, backgroundColor: "#E6E8FA",
    marginHorizontal: 10

  },
  toggle: {
    padding: 5, borderRadius: 50,
    // backgroundColor: "#E6E8FA", 
    marginHorizontal: 10

  },
  popbox2: {
    // width: "100%",
    // // borderBottomWidth:1,
    // borderWidth:0.5,
    //  flexDirection: "row",
    //  paddingBottom:10,
    //   marginTop: 20, borderColor: "#DBDBDB",

    // paddingVertical: 5,
    // shadowColor: "grey",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // // shadowOpacity: 1,
    // shadowRadius: 1,
    // elevation: 2,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 3,
    marginBottom: 1,

    paddingVertical: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 2.62,
    elevation: 6,
  }
});