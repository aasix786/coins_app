import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage, Button, Linking, Switch, FlatList
} from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, MaterialCommunityIcons, Fontisto, Octicons, Feather, Entypo, AntDesign, FontAwesome, FontAwesome5, Zocial } from '@expo/vector-icons';
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
            onPress={()=>this.props.navigation.goBack()}
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

          <View style={{ width: "97%", marginTop: 5 }}>
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
                  <View style={{ paddingLeft: 10 }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                  </View>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>9</Text>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={{ borderTopWidth: 1, borderTopColor: "#000", borderBottomWidth: 1, borderBottomColor: "#000", width: 50, paddingVertical: 10 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>R4</Text>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>10</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>11</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, padding: 8, marginHorizontal: 5, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>12</Text>
                </View>
              </View>

              <View style={styles.popbox}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text style={{ color: '#9AEC2E', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>On the clock:</Text>
                    <Text style={{ color: '#fff', fontSize: 15, textAlign: "center", fontWeight: "bold", paddingTop: 5 }}>DK-ZSmith</Text>
                  </View>
                  <View style={{ paddingLeft: 10 }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                  </View>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>9</Text>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={{ borderTopWidth: 1, borderTopColor: "#000", borderBottomWidth: 1, borderBottomColor: "#000", width: 50, paddingVertical: 10 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>R4</Text>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>10</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>11</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, padding: 8, marginHorizontal: 5, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>12</Text>
                </View>
              </View>

            </ScrollView>


          </View>
          <View style={{ width: '90%', marginTop: 15, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ color: '#cccccc', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>Last Pick : </Text>
              </View>
              <View>
                <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>K.Golaaday</Text>
              </View>
              <View>
                <Text style={{ color: '#cccccc', fontSize: 14, textAlign: "center", fontWeight: "bold", paddingLeft: 5 }}>K.Golaaday</Text>
              </View>
            </View>

          </View>
        </View>

        <View style={{ width: "100%", flexDirection: "row", borderTopWidth: 1, borderTopColor: '#D1D1D1', paddingVertical: 1, paddingHorizontal: 5}}>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 8, paddingBottom: 12, alignItems: "center" }}>
                <Feather name="search" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 8, paddingBottom: 12, alignItems: "center" }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >ALL </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 8, paddingBottom: 12, alignItems: "center" }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >QB </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 8, paddingBottom: 12, alignItems: "center" }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >RB </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", alignItems: "center", backgroundColor: "#D1D1D1", borderRadius: 20 }}>
                <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }} >WR</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 8, paddingBottom: 12, alignItems: "center" }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >TE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: "100%", flexDirection: "row", paddingVertical: 1,backgroundColor:"#f5f5f5" }}>
        
        <View style={{   width: "64%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Text style={{ color: "#000", textAlign: "center", fontSize: 12,fontWeight:"bold" }} >Player </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "17%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Text style={{ color: "#000", textAlign: "center", fontSize: 12,fontWeight:"bold" }} >RANK</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "17%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Text style={{ color: "#000", textAlign: "center", fontSize: 12,fontWeight:"bold" }} >ADP</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "97%", height: "90%", marginTop: 5,paddingBottom:165 }} >
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* {this.state.entries.length > 0 ?
      this.state.entries.map((item,index)=>{

        return( */}
         <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row",backgroundColor:"#e0e0e0" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star-outlined" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#a6a6a6 ", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
        
        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#71a330" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}} >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >M.Thomas</Text>
              <Text style={{ color: "#cccccc", fontSize: 12,fontWeight:"bold" }} >WR NO(BYE 10)</Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
{/* 
)
})
:null

} */}

         

          </ScrollView>
 </View>





        <Footer title={"player"} back={false} navigation={this.props.navigation} />



      </View>


    );



  }

}
const styles = StyleSheet.create({

  searchicon: {

    width: "16.66%",
    alignItems: "center",
    justifyContent: "center",


  },
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