import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions,
} from 'react-native';
import { Ionicons, Feather, Entypo, AntDesign} from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer } from 'native-base';
import SideBar from '../Includes/Sidebar';

export default class my_contests extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      name: "",
      contact: "",
      email: "",
      password: "",
      confirm_password: "",
      Favorite_Genres: "",
      promo_code: "",
      hidePass: true,
      hide_confirm_password: true,
      is_check: ""
    }

  }
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => { this.drawer._root.open() };


  render() {

    return (



      <View style={{ flex:1, alignItems: "center", backgroundColor: "#fbfbfb" }}>

      <View style={{ width: "100%", alignContent: "center", alignItems: "center", marginTop: 30, backgroundColor: "#000", paddingBottom: 15 }}>
        <View style={{ paddingTop: 20, flexDirection: "row" }}>
          <TouchableOpacity  style={{ width: "10%", alignItems: "center" }}>
          </TouchableOpacity>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Text style={{color:"#fff"}}>Upcoming</Text>
          </View>
          <TouchableOpacity style={{ width: "10%", flexDirection:"row", alignContent:"space-between" }}>
            <View style={{paddingHorizontal:5}}>
            <Entypo name="camera" size={24} color="#fff" />

            </View>
            <View style={{paddingHorizontal:5}}>
            <Feather name="bell" size={24} color="#fff" />

            </View>
          </TouchableOpacity>

        </View>



      </View>

<View style={{width:"90%", flexDirection:"row"}}>
<View style={{width:"50%", borderRightColor:"#cdcdcd", borderRightWidth:1, flexDirection:"row"}}>
<View>
  <Text style={{fontSize:12, fontWeight:"bold", color:"grey"}}>SPORT</Text>
  <Text style={{fontSize:13, fontWeight:"bold", color:"#000"}}>All</Text>
</View>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12, fontWeight:"bold", color:"grey"}}>STYLE</Text>
  <Text style={{fontSize:13, fontWeight:"bold", color:"#000"}}>All</Text>
</View>
</View>
<View style={{width:"50%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
  <Text style={{fontSize:14, fontWeight:"bold", color:"grey"}}>ENTERED:  <Text style={{fontSize:18, fontWeight:"bold", color:"#000"}}>$2</Text></Text>
</View>
</View>

<View style={{width:"95%", borderRadius:7, backgroundColor:"#CDCDCD", flexDirection:"row", height:27,padding:2, marginTop:10}}>
<View style={{width:"50%",height:"100%", borderRadius:5, backgroundColor:"#fff", alignContent:"center", alignItems:"center", justifyContent:"center"}}>
<Text style={{fontSize:14, color:"#000", fontWeight:"bold"}}>Contests</Text>
</View>
<View style={{width:"50%",height:"100%", borderRadius:5, backgroundColor:"#CDCDCD", alignContent:"center", alignItems:"center", justifyContent:"center"}}>
<Text style={{fontSize:14, color:"#000", fontWeight:"bold"}}>Lineups</Text>
</View>
</View>


      <View style={{ width: "90%", paddingTop: 10, flexDirection:"row" }}>
      <View style={{paddingHorizontal:5, paddingTop:3}}>
      <AntDesign name="clockcircleo" size={12} color="grey" />
      </View>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>UPCOMING CONTESTS</Text>
      </View>


      <View style={styles.popbox1}>
        <View style={{}}>
          <Text style={{fontSize:12, fontWeight:"bold"}}>NBA $40K And -One [20 Entry Max]</Text>
        </View>
        <View style={{ flexDirection:"row" }}>

          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 8, color: "grey", fontWeight: "bold" }}>Entry</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 8, color: "grey", fontWeight: "bold" }}>Prizes</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 8, color: "grey", fontWeight: "bold" }}>Entries</Text>
          </View>
         

        </View>
        <View style={{ flexDirection:"row" }}>

          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>$1</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>$40,000</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>307/2122</Text>
          </View>
          <View style={{ width:"40%", alignItems:"flex-end", alignContent:"flex-end" }}>
          <AntDesign name="right" size={14} color="grey" />

          </View>
         

        </View>
        <View style={{ flexDirection:"row", marginTop:5 }}>

          <View style={{ width:"30%" }}>
            <Text style={{ fontSize: 12, color: "#2870D6", fontWeight: "bold" }}>Edit Entry</Text>
          </View>
          <View style={{ width:"30%", flexDirection:"row", }}>
          
          <Entypo name="add-user" size={12} color="#2870D6" />
<View style={{paddingLeft:5}}>
<Text style={{ fontSize: 12, color: "#2870D6", fontWeight: "bold" }}>Invite</Text>

</View>
          </View>
          
          <View style={{ width:"40%", alignItems:"flex-end", alignContent:"flex-end" }}>
          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>Today at 7PM EST</Text>

          </View>
         

        </View>
        

      </View>
     
      <View style={styles.popbox1}>
        <View style={{}}>
          <Text style={{fontSize:12, fontWeight:"bold"}}>NBA $40K And -One [20 Entry Max]</Text>
        </View>
        <View style={{ flexDirection:"row" }}>

          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 8, color: "grey", fontWeight: "bold" }}>Entry</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 8, color: "grey", fontWeight: "bold" }}>Prizes</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 8, color: "grey", fontWeight: "bold" }}>Entries</Text>
          </View>
         

        </View>
        <View style={{ flexDirection:"row" }}>

          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>$1</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>$40,000</Text>
          </View>
          <View style={{ width:"20%" }}>
            <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>307/2122</Text>
          </View>
          <View style={{ width:"40%", alignItems:"flex-end", alignContent:"flex-end" }}>
          <AntDesign name="right" size={14} color="grey" />

          </View>
         

        </View>
        <View style={{ flexDirection:"row", marginTop:5 }}>

          <View style={{ width:"30%" }}>
            <Text style={{ fontSize: 12, color: "#2870D6", fontWeight: "bold" }}>Edit Entry</Text>
          </View>
          <View style={{ width:"30%", flexDirection:"row", }}>
          
          <Entypo name="add-user" size={12} color="#2870D6" />
<View style={{paddingLeft:5}}>
<Text style={{ fontSize: 12, color: "#2870D6", fontWeight: "bold" }}>Invite</Text>

</View>
          </View>
          
          <View style={{ width:"40%", alignItems:"flex-end", alignContent:"flex-end" }}>
          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>Today at 7PM EST</Text>

          </View>
         

        </View>
        

      </View>

    </View>



    );



  }

}
const styles = StyleSheet.create({
  popbox1: {
    width: "95%",
    borderRadius:5,
    borderLeftWidth:4,
    borderLeftColor:"#000",
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: 1,

    padding: 5,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 2.62,
    elevation: 6,
  },
  popbox: {
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

    paddingVertical: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 2.62,
    elevation: 6,
  },
  box: {

    width: 20,
    height: 20,
    resizeMode: "cover",



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
    borderColor: "#fad029",
    borderWidth: 1
  },
  SignUp_button: {
    width: "80%",
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#71a330",
    backgroundColor: "#71a330",
    borderWidth: 1
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingLeft: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#044184',
    borderRadius: 4,
    // backgroundColor: '#044184',
    color: '#000',
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingLeft: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#044184',
    borderRadius: 4,
    // backgroundColor: '#044184',
    color: '#000',
  }
});