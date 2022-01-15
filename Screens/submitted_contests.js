import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions,
} from 'react-native';
import { Ionicons, Feather, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer } from 'native-base';
import SideBar from '../Includes/Sidebar';

export default class submitted_contests extends Component {
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
        <View style={{ paddingTop: 20, flexDirection: "row", paddingBottom:10 }}>
          <TouchableOpacity  style={{ width: "20%", alignItems: "center" }}>
          </TouchableOpacity>
          <View style={{ width: "70%", alignItems: "center" }}>
            <Text style={{color:"#fff", fontSize:16}}>Lineup Submitted</Text>
          </View>
          <TouchableOpacity style={{ width: "20%", flexDirection:"row", alignContent:"space-between" }}>
           <Text style={{fontSize:18, color:"#44A2F8"}}>Done</Text>
          </TouchableOpacity>

        </View>

<View style={{width:"100%", borderTopWidth:0.7, borderTopColor:"#252525", alignContent:"center", alignItems:"center"}}>
  <Text style={{color:"#fff", fontWeight:"bold"}}>CONTEST LOCK <Text style={{color:"#DDCC5E"}}>95:42:06</Text></Text>
</View>

      </View>




      <View style={styles.popbox1}>
        <View style={{}}>
          <Text style={{fontSize:14, fontWeight:"bold"}}>NBA $40K And -One [20 Entry Max]</Text>
        </View>
        
        <View style={{ flexDirection:"row", flexWrap:"wrap" }}>

        <View style={{ width:"33%", borderRightColor:"#DBDBDB", borderRightWidth:0.7, flexDirection:"row", paddingLeft:10 }}>
        <View style={{paddingTop:4}}>
        <Text style={{ fontSize: 8, color: "#000", fontWeight: "bold" }}>F</Text>

        </View>
        <View style={{marginLeft:5}}>
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>R. Bontroin</Text>

        </View>
          </View>
          
        <View style={{ width:"33%", borderRightColor:"#DBDBDB", borderRightWidth:0.7, flexDirection:"row", paddingLeft:10 }}>
        <View style={{paddingTop:4}}>
        <Text style={{ fontSize: 8, color: "#000", fontWeight: "bold" }}>F</Text>

        </View>
        <View style={{marginLeft:5}}>
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>R. Bontroin</Text>

        </View>
          </View>
          
        <View style={{ width:"33%", borderRightColor:"#DBDBDB", borderRightWidth:0.7, flexDirection:"row", paddingLeft:10 }}>
        <View style={{paddingTop:4}}>
        <Text style={{ fontSize: 8, color: "#000", fontWeight: "bold" }}>F</Text>

        </View>
        <View style={{marginLeft:5}}>
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>R. Bontroin</Text>

        </View>
          </View>
          
        <View style={{ width:"33%", borderRightColor:"#DBDBDB", borderRightWidth:0.7, flexDirection:"row", paddingLeft:10 }}>
        <View style={{paddingTop:4}}>
        <Text style={{ fontSize: 8, color: "#000", fontWeight: "bold" }}>F</Text>

        </View>
        <View style={{marginLeft:5}}>
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>R. Bontroin</Text>

        </View>
          </View>

          
        <View style={{ width:"33%", borderRightColor:"#DBDBDB", borderRightWidth:0.7, flexDirection:"row", paddingLeft:10 }}>
        <View style={{paddingTop:4}}>
        <Text style={{ fontSize: 8, color: "#000", fontWeight: "bold" }}>F</Text>

        </View>
        <View style={{marginLeft:5}}>
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>R. Bontroin</Text>

        </View>
          </View>
          
        <View style={{ width:"33%", borderRightColor:"#DBDBDB", borderRightWidth:0.7, flexDirection:"row", paddingLeft:10 }}>
        <View style={{paddingTop:4}}>
        <Text style={{ fontSize: 8, color: "#000", fontWeight: "bold" }}>F</Text>

        </View>
        <View style={{marginLeft:5}}>
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>R. Bontroin</Text>

        </View>
          </View>
          
         

        </View>
       
        

      </View>
     
      
      <View style={{width:"100%", paddingVertical:10, alignItems:"center", alignContent:"center", justifyContent:"center"}}>
        <View>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#808080"}}>Recommended Contests</Text>
        </View>
        <View style={{marginTop:5}}>
          <Text style={{fontSize:10, fontWeight:"bold", color:"#808080"}}>Use your lineup to quickly join these contests</Text>
        </View>
      </View>

      <View style={{width:"100%", backgroundColor:"#fff", paddingHorizontal:15, paddingVertical:10, marginTop:5}}>
        <View style={{flexDirection:"row"}}>
        <View style={{width:"95%", flexDirection:"row"}}>
        <View>
          <Entypo name="star" size={14} color="#F4CF3C" />
          </View>
          <View style={{paddingLeft:3}}>
            <Text style={{fontSize:14, fontWeight:"bold"}}>
              UFC $333K Throwdown [$100K to 1st]
            </Text>
          </View>
        </View>
          
          <View>
          <MaterialCommunityIcons name="dots-vertical" size={18} color="black" />
          </View>
        </View>

        <View style={{flexDirection:"row", marginTop:3}}>
        <View style={{width:"70%", flexDirection:"row"}}>
        <View style={{width:"50%"}}>
         <Text style={{fontSize:12, color:"#3F3F3F", fontWeight:"bold"}}>3,198/26,117</Text>
         <Text style={{fontSize:10, color:"grey", fontWeight:"bold"}}>ENTRIES (0/150)</Text>
          </View>
          <View style={{width:"50%"}}>
         <Text style={{fontSize:16, color:"#295E00", fontWeight:"bold"}}>$333,000</Text>
         <Text style={{fontSize:10, color:"grey", fontWeight:"bold",}}>TOTAL PRIZES</Text>
          </View>
        </View>
          
          <View style={{width:"30%", paddingHorizontal:5}}>
            <View style={{width:"100%", backgroundColor:"#77CE52", borderRadius:3, padding:5, alignContent:"center", alignItems:"center", justifyContent:"center"}}>
              <Text style={{fontSize:12, fontWeight:"bold"}}>Enter | $15</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize:10, color:"#7d7c7d", fontWeight:"bold"}}>STARTS: <Text style={{fontSize:9}}>Sat 4:00 PM EST</Text></Text>
        </View>
      </View>
      <View style={{width:"100%", backgroundColor:"#fff", paddingHorizontal:15, paddingVertical:10, marginTop:5}}>
        <View style={{flexDirection:"row"}}>
        <View style={{width:"95%", flexDirection:"row"}}>
        <View>
          <Entypo name="star" size={14} color="#F4CF3C" />
          </View>
          <View style={{paddingLeft:3}}>
            <Text style={{fontSize:14, fontWeight:"bold"}}>
              UFC $333K Throwdown [$100K to 1st]
            </Text>
          </View>
        </View>
          
          <View>
          <MaterialCommunityIcons name="dots-vertical" size={18} color="black" />
          </View>
        </View>

        <View style={{flexDirection:"row", marginTop:3}}>
        <View style={{width:"70%", flexDirection:"row"}}>
        <View style={{width:"50%"}}>
         <Text style={{fontSize:12, color:"#3F3F3F", fontWeight:"bold"}}>3,198/26,117</Text>
         <Text style={{fontSize:10, color:"grey", fontWeight:"bold"}}>ENTRIES (0/150)</Text>
          </View>
          <View style={{width:"50%"}}>
         <Text style={{fontSize:16, color:"#295E00", fontWeight:"bold"}}>$333,000</Text>
         <Text style={{fontSize:10, color:"grey", fontWeight:"bold",}}>TOTAL PRIZES</Text>
          </View>
        </View>
          
          <View style={{width:"30%", paddingHorizontal:5}}>
            <View style={{width:"100%", backgroundColor:"#77CE52", borderRadius:3, padding:5, alignContent:"center", alignItems:"center", justifyContent:"center"}}>
              <Text style={{fontSize:12, fontWeight:"bold"}}>Enter | $15</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize:10, color:"#7d7c7d", fontWeight:"bold"}}>STARTS: <Text style={{fontSize:9}}>Sat 4:00 PM EST</Text></Text>
        </View>
      </View>
      <View style={{width:"100%", backgroundColor:"#fff", paddingHorizontal:15, paddingVertical:10, marginTop:5}}>
        <View style={{flexDirection:"row"}}>
        <View style={{width:"95%", flexDirection:"row"}}>
        <View>
          <Entypo name="star" size={14} color="#F4CF3C" />
          </View>
          <View style={{paddingLeft:3}}>
            <Text style={{fontSize:14, fontWeight:"bold"}}>
              UFC $333K Throwdown [$100K to 1st]
            </Text>
          </View>
        </View>
          
          <View>
          <MaterialCommunityIcons name="dots-vertical" size={18} color="black" />
          </View>
        </View>

        <View style={{flexDirection:"row", marginTop:3}}>
        <View style={{width:"70%", flexDirection:"row"}}>
        <View style={{width:"50%"}}>
         <Text style={{fontSize:12, color:"#3F3F3F", fontWeight:"bold"}}>3,198/26,117</Text>
         <Text style={{fontSize:10, color:"grey", fontWeight:"bold"}}>ENTRIES (0/150)</Text>
          </View>
          <View style={{width:"50%"}}>
         <Text style={{fontSize:16, color:"#295E00", fontWeight:"bold"}}>$333,000</Text>
         <Text style={{fontSize:10, color:"grey", fontWeight:"bold",}}>TOTAL PRIZES</Text>
          </View>
        </View>
          
          <View style={{width:"30%", paddingHorizontal:5}}>
            <View style={{width:"100%", backgroundColor:"#77CE52", borderRadius:3, padding:5, alignContent:"center", alignItems:"center", justifyContent:"center"}}>
              <Text style={{fontSize:12, fontWeight:"bold"}}>Enter | $15</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize:10, color:"#7d7c7d", fontWeight:"bold"}}>STARTS: <Text style={{fontSize:9}}>Sat 4:00 PM EST</Text></Text>
        </View>
      </View>


    </View>



    );



  }

}
const styles = StyleSheet.create({
  popbox1: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 1,
    padding: 5,
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