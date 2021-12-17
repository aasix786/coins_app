import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage, Button, Switch, Linking
} from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, MaterialCommunityIcons, Octicons, Feather, Entypo, AntDesign, FontAwesome5, Zocial } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer } from 'native-base';
import SideBar from '../Includes/Sidebar';

export default class contest extends Component {
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



      <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar navigation={this.props.navigation} />} onClose={() => this.closeDrawer()}  >
        <View style={{ width: screenWidth, height: screenHeight, alignItems: "center", backgroundColor: "#fbfbfb" }}>

          <View style={{ width: "100%", alignContent: "center", alignItems: "center", marginTop: 30, backgroundColor: "#000", paddingBottom: 15 }}>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <TouchableOpacity onPress={() => this.openDrawer()} style={{ width: "10%", alignItems: "center" }}>
                <Entypo name="menu" size={24} color="#fff" />
              </TouchableOpacity>
              <View style={{ width: "70%", alignContent: "center", alignItems: "center" }}>
                {/* <Image style={{ width: 25, height: 25, resizeMode: "cover" }} source={require('../assets/images/demo_2.png')} /> */}
                <Ionicons name="people-sharp" size={24} color="#fff" />
              </View>
              <TouchableOpacity onPress={() => this.openDrawer()} style={{ width: "10%", alignItems: "center" }}>
                <Feather name="bell" size={24} color="#fff" />
              </TouchableOpacity>

            </View>



          </View>

          <View style={{ width: "90%", paddingTop: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#808080" }}>Welcome</Text>
          </View>


          <TouchableOpacity style={styles.SignUp_button} 
          // onPress={() => this.submit()}
          >

            <Text style={{ color: '#fff', fontSize: 18 }}>Deposit</Text>

          </TouchableOpacity>

          <View style={{ width: "100%", alignContent: "center", alignItems: "center", marginTop: 5 }}>
            <View style={{ width: "90%", marginTop: 10, flexDirection: "row" }}>
              <View style={{ width: "35%", borderBottomColor: "#aeaeae", borderBottomWidth: 1 }}>

              </View>
              <View style={{ width: "30%", alignContent: "center", alignItems: "center", flexDirection: "row" }}>
                <View style={{ width: "25%", alignContent: "center", alignItems: "center" }}>
                  <Entypo name="star-outlined" size={24} color="black" />
                </View>
                <View style={{ width: "50%", paddingTop: 5 }}>
                  <Text style={{ fontSize: 12, fontWeight: "bold", color: "#808080", textAlign: "center" }}>Featured</Text>
                </View>
                <TouchableOpacity style={{ width: "25%", alignContent: "center", alignItems: "center" }}
               
                >
                  <Entypo name="star-outlined" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{ width: "35%", borderBottomColor: "#aeaeae", borderBottomWidth: 1 }}>

              </View>

            </View>



          </View>

          <View style={styles.popbox1}>
            <View style={{ width: "15%", alignItems: "center" }}>
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <Image style={styles.box} source={require('../assets/images/people.png')} />
              </View>
            </View>
            <View style={{ width: "70%", }}>

              <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>Contest Lobby</Text>
              </View>
              <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Browse and Enter Contest</Text>
              </View>

            </View>
            <TouchableOpacity style={{ width: "15%", alignItems: "center" }} 
             onPress={()=>this.props.navigation.navigate("home")}
             >
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <AntDesign name="rightcircle" size={22} color="#e6e6e6" />
              </View>
            </TouchableOpacity>

          </View>
          <View style={styles.popbox}>
            <View style={{ width: "15%", alignItems: "center" }}>
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <Image style={styles.box} source={require('../assets/images/list.png')} />
              </View>
            </View>
            <View style={{ width: "60%", }}>

              <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>My Contest</Text>
              </View>
              <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Live,Upcoming & History</Text>
              </View>

            </View>
            <View style={{ width: "25%", alignItems: "center" ,flexDirection:"row"}}>
            <View style={{ width: "50%", paddingTop: 10,alignItems:'center' }}>
            <View style={{ width: "50%", backgroundColor: "#ef8c3a" }}>

<Text style={{ fontSize: 13, color: "#fff", textAlign: "center" }}>6</Text>
</View>
</View>
              <TouchableOpacity style={{ width: "50%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}
                   onPress={()=>this.props.navigation.navigate("home")}
              >
                <AntDesign name="rightcircle" size={22} color="#e6e6e6" />
              </TouchableOpacity>
            </View>
           

          </View>
          <View style={styles.popbox}>
            <View style={{ width: "15%", alignItems: "center" }}>
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <Image style={styles.box} source={require('../assets/images/to-do-list.png')} />
              </View>
            </View>
            <View style={{ width: "60%", }}>

              <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>My Linups</Text>
              </View>
              <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Edit & Enter</Text>
              </View>

            </View>
            <View style={{ width: "25%", alignItems: "center" ,flexDirection:"row"}}>
            <View style={{ width: "50%", paddingTop: 10,alignItems:'center' }}>
            <View style={{ width: "50%", backgroundColor: "#ef8c3a" }}>

<Text style={{ fontSize: 13, color: "#fff", textAlign: "center" }}>6</Text>
</View>
</View>
<TouchableOpacity style={{ width: "50%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}
                   onPress={()=>this.props.navigation.navigate("home")}
              >
                <AntDesign name="rightcircle" size={22} color="#e6e6e6" />
              </TouchableOpacity>
            </View>
           

          </View>

          <View style={styles.popbox}>
            <View style={{ width: "15%", alignItems: "center" }}>
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <Image style={styles.box} source={require('../assets/images/plus.png')} />
              </View>
            </View>
            <View style={{ width: "70%", }}>

              <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>Create Linups</Text>
              </View>
              <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Build Todays WinningFantasy Team!</Text>
              </View>

            </View>
            <TouchableOpacity style={{ width: "15%", alignItems: "center" }} 
             onPress={()=>this.props.navigation.navigate("home")}
             >
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <AntDesign name="rightcircle" size={22} color="#e6e6e6" />
              </View>
            </TouchableOpacity>
           

          </View>
          <View style={styles.popbox}>
            <View style={{ width: "15%", alignItems: "center" }}>
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <Image style={styles.box} source={require('../assets/images/group.png')} />
              </View>
            </View>
            <View style={{ width: "70%", }}>

              <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>Create Linups</Text>
              </View>
              <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Create Hed to head or League contest pulic or private</Text>
              </View>

            </View>
            <TouchableOpacity style={{ width: "15%", alignItems: "center" }} 
             onPress={()=>this.props.navigation.navigate("home")}
             >
              <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                <AntDesign name="rightcircle" size={22} color="#e6e6e6" />
              </View>
            </TouchableOpacity>
           

          </View>

          <View style={{ width: "90%", marginTop: 20}}>
                <Text style={{  fontSize: 13, color: "#a9a9a9",textAlign:"center"}}>
                REFER-A-FRIEND and earn up to 35% commission for every friend who plays! 
          </Text>
                </View>
                <View style={{ width: "90%", marginTop: 10}}>
                <Text style={{  fontSize: 13, color: "#a9a9a9",textAlign:"center"}}>
               Limited Time Offer
          </Text>
                </View>
                <View style={{ width: "90%"}}>
                <Text style={{  fontSize: 13, color: "#a9a9a9",textAlign:"center"}}>
                For EVERY friend you refer,you'll BOTH get $25
          </Text>
                </View>
                <View style={{ width: "90%"}}>
                <Text style={{  fontSize: 13, color: "#a9a9a9",textAlign:"center"}}>
                Draft Kings Dollars
          </Text>
                </View>
                <View style={{ width: "90%"}}>
                <Text style={{  fontSize: 13, color: "#a9a9a9",textAlign:"center"}}>
               (Expire 10:00am ET8 /20/2021)
          </Text>
                </View>

        </View>
      </Drawer>



    );



  }

}
const styles = StyleSheet.create({
  popbox1: {
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
    marginTop: 15,
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