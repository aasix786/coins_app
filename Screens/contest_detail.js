import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView,
} from 'react-native';
import { Ionicons, Feather, Entypo, AntDesign} from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer } from 'native-base';
import SideBar from '../Includes/Sidebar';

export default class contest_detail extends Component {
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
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} style={{ width: "10%", alignItems: "center" }}>
              <AntDesign name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={{ width: "75%", alignContent: "center", alignItems: "center" }}>
              {/* <Image style={{ width: 25, height: 25, resizeMode: "cover" }} source={require('../assets/images/demo_2.png')} /> */}
              <Text style={{fontSize:18, fontWeight:"bold", color:"#fff"}}>Create Lineup</Text>
            </View>
            <TouchableOpacity style={{ width: "15%" }} onPress={()=> this.props.navigation.navigate('submitted_contests')}>
            <Text style={{fontSize:18, fontWeight:"bold", color:"#149aff"}}>Submit</Text>

            </TouchableOpacity>

          </View>
        </View>

        <View style={{ width: "90%", paddingTop: 10, flexDirection:"row" }}>
         <View style={{width:"90%"}}>
         <Text style={{ fontSize: 16, fontWeight: "bold", color: "#808080" }}>UFC $333K Throwdown [$100K to 1st]</Text>

         </View>
         <View style={{width:"10%", alignItems:"flex-end"}}>
         <Entypo name="dots-three-vertical" size={24} color="#808080" />
         </View>
        </View>
        <View style={styles.popbox}>
          <View style={{ width: "25%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>Entry $18</Text>

          </View>
         
          <View style={{ width: "40%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>Sat 1/15, 2:00 PM CST</Text>

          </View>
          <View style={{ width: "15%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>287:36:...</Text>

          </View>
          <View style={{ width: "20%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>1,096/26,117</Text>

          </View>

        </View>
<ScrollView>
<View style={styles.popbox1}>
          <View style={{ width: "15%", alignItems: "center" }}>
            <View style={{ width: "90%", justifyContent: "center", alignItems: "center" }}>
              <Image style={styles.box} source={require('../assets/12.png')} />
            </View>
          </View>
          <View style={{ width: "47%" }}>

            <View style={{ width:"100%",paddingLeft: 15, paddingTop: 5, borderRightColor:"#e6e6e6", borderRightWidth:1, borderStyle:"dotted" }}>
              <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>F T. Brown</Text>
              <Text style={{ fontSize: 12, color: "#000" }}>vs Benitez</Text>
              <Text style={{ fontSize: 15, color: "#000" }}>Sat 3:00 PM CST</Text>
            </View>
  

          </View>
          <View style={{ width: "50%", flexDirection:"row" }} >
          <View style={{ width:"42%", paddingTop: 5, paddingLeft:10 }}>
              <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>$7,100</Text>
              <Text style={{ fontSize: 12, color: "#000" }}>FPPF 58..3</Text>
            </View>
            <View style={{  paddingTop: 5, alignContent:"center", alignItems:"center", justifyContent:"center" }}>
            <Entypo name="circle-with-cross" size={22} color="grey" />
  </View>
         
            {/* <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
              <AntDesign name="right" size={20} color="#e6e6e6" />
            </View> */}
          </View>

        </View>
        <View style={styles.popbox1}>
          <View style={{ width: "15%", alignItems: "center" }}>
            <View style={{ width: "90%", justifyContent: "center", alignItems: "center" }}>
              <Image style={styles.box} source={require('../assets/images/f.png')} />
            </View>
          </View>
          <View style={{ width: "60%", alignItems:"center" }}>

            <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
              <Text style={{ fontSize: 16, color: "#b9b9b9", fontWeight: "bold" }}>SELECT FIGHTER</Text>
            </View>
  

          </View>
          <TouchableOpacity style={{ width: "15%", alignItems: "center" }} 
           onPress={()=>this.props.navigation.navigate("coin_selection")}
           >
            <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
              <AntDesign name="right" size={20} color="#e6e6e6" />
            </View>
          </TouchableOpacity>

        </View>
        
</ScrollView>
       

<View style={{width:"100%", alignContent:"center", alignItems:"center", justifyContent:"center", position:"absolute", bottom:0}}>

<View style={{width:"100%", backgroundColor:"#282828", paddingHorizontal:10}}>
<View style={{flexDirection:"row", width:"100%"}}>
<View style={{width:"50%", paddingVertical:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff"}}>Positions Filled: <Text>0</Text>/<Text>6</Text> </Text>

</View>
<View style={{width:"50%", alignItems:"flex-end", paddingVertical:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff", textAlign:"right"}}>Rem Salary: <Text style={{color:"#7ABC6F", fontWeight:"bold"}}>$50,000</Text></Text>


</View>

</View>

<View style={{flexDirection:"row", width:"100%"}}>
<View style={{width:"50%", paddingBottom:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff"}}>Under Salary Cap</Text>

</View>
<View style={{width:"50%", alignItems:"flex-end", paddingBottom:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff", textAlign:"right"}}>Avg Rem/Player: <Text style={{color:"#7ABC6F", fontWeight:"bold"}}>$8,333</Text></Text>


</View>

</View>
</View>


<View style={{width:"100%", backgroundColor:"#000"}}>
<View style={{flexDirection:"row", width:"100%"}}>
<View style={{width:"25%", alignItems:"center", paddingVertical:12}}>
<Text style={{fontSize:18, fontWeight:"bold", color:"#fff"}}>Clear</Text>

</View>
<View style={{width:"25%", alignItems:"center", paddingVertical:12}}>
<Text style={{fontSize:18, fontWeight:"bold", color:"#fff"}}>Import</Text>

</View>
<View style={{width:"25%", alignItems:"center", paddingVertical:12}}>
<Text style={{fontSize:18, fontWeight:"bold", color:"#149aff"}}>Reserve</Text>

</View>
<TouchableOpacity style={{width:"25%", alignItems:"center", paddingVertical:12}}
onPress={()=> this.props.navigation.navigate('submitted_contests')}
>
<Text style={{fontSize:18, fontWeight:"bold", color:"#149aff"}}>Submit</Text>

</TouchableOpacity>
</View>
</View>

</View>
       
       

      </View>



    );



  }

}
const styles = StyleSheet.create({
  popbox1: {
    
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 1,

    paddingVertical: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  popbox: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent:"center",
    marginTop: 15,
    marginBottom: 1,
   paddingVertical:5,
   height:40
  },
  box: {

    width: "100%",
    height: 50,
    resizeMode: "contain",



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