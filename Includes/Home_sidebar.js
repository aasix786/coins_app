import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, ScrollView,Dimensions, ImageBackground, TextInput, Linking, AsyncStorage,Alert
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.disableYellowBox = true

export default class Home_sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      token: "",
      profile_image: "",
      name: "",
      top_100_writers:[],
      get_most_rated:[]

    }

  }
  componentDidMount() {
    AsyncStorage.getItem("userID").then(user_data => {
      const val = JSON.parse(user_data);
      if (val) {
        this.setState({ token:val.token,name:val.user.name })
      }
      this.top_100_writers()
    });
    AsyncStorage.getItem("user_image").then(response => {
      const val_image = JSON.parse(response);
      if (val_image) {
        this.setState({
          profile_image: val_image.data.image
        });
   

      }
    });
  }
  // get_highlights = () => {

  //   fetch(URL + "get-sidebar-highlights", {
  //     method: "Get",
  //     headers: new Headers({
  //       'Authorization': 'Bearer ' + this.state.token,
  //       // 'Authorization': 'Basic '+this.state.token,
  //       'Accept': 'application/json',  // It can be used to overcome cors errors
  //       // 'Content-Type': 'multipart/form-data',
  //       'Content-Type': 'application/json'
  //     }),

  //   })
  //     .then(res => res.json())
  //     .then(async response => {
   
  //       if (response.message == "Unauthenticated.") {
  //         // clearInterval(this.intervalState);
  //         // AsyncStorage.clear()
  //         // this.props.navigation.push("login")
  //         this.props.navigation.reset({
  //           index: 0,
  //           routes: [{ name: 'login' }],
  //         })

  //       }
  //       else {
  //         if (response.status_code == 500) {
  //           // clearInterval(this.intervalState);

  //           this.props.navigation.replace("packages", { package_data: response.package_details })

  //         }
  //         else {
  //           if (response.success == true) {
  //             this.setState({
  //               get_most_viewed:response.data.most_viewed,
  //               get_most_rated:response.data.most_rated
                
  //             })
  //             // // console.log("?????????????shared_tip????????")
  //             // // console.log(this.state.shared_tip)
  //             ////// console.log("?????????????others_tips????????")
  //             ////// console.log(this.state.others_tips)

  //           }
  //           else {
  //             Alert.alert(
  //               "Sorry",
  //               response.message,
  //               [

  //                 { text: "OK" }
  //               ],
  //               { cancelable: false }
  //             );
  //           }
  //         }
  //       }



  //     })
  //     .catch(error => {
  //       // console.log(error);
  //     });


  // }
  top_100_writers = () => {

    fetch(URL + "get-top-writers", {
      method: "Get",
      headers: new Headers({
        'Authorization': 'Bearer ' + this.state.token,
        // 'Authorization': 'Basic '+this.state.token,
        'Accept': 'application/json',  // It can be used to overcome cors errors
        // 'Content-Type': 'multipart/form-data',
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }),

    })
      .then(res => res.json())
      .then(async response => {
        console.log(">>>>>>>>>>>>>>>>>>top_100_writers>>>>");
        console.log(response);
        if (response.success == true) {
          this.setState({ top_100_writers: response.data })
        }
        else {
          Alert.alert(
            "Sorry",
            response.message,
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK" }
            ],
            { cancelable: false }
          );
        }

      })
      .catch(error => {
        alert("Please check internet connection");
      });


  }

  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
        <View style={{ width: "100%", marginTop: 40 ,flexDirection:"row"}}>
            <View style={{ width: "30%", paddingLeft: 15 }}>
              <Image style={{ width: 80, height: 80, resizeMode: "contain", }} source={require('../assets/images/logo.png')} />
            </View>
            {/* <View style={{ width: "70%", alignItems: "center"}} >
                <View style={{ width: "90%",paddingTop:25}}>
           
                  <TouchableOpacity style={styles.top_100} 
                  onPress={()=>this.props.navigation.push("top_100_writers")}
                    >
                    <Text style={{ color: '#fff', alignItems: "center", marginTop: 2, fontSize: 18}}>Top 100 Writers</Text>
                  </TouchableOpacity>
                
                </View>

              </View> */}

               </View>

               

        
        
        <ScrollView   showsVerticalScrollIndicator={false} style={{ width: "97%" }}>
        <View style={{ width: "100%", marginTop: 20, paddingLeft: 15 }} 
        // onPress={() => this.props.navigation.push('editProfile')}
         >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000",textAlign:"center" }}>Top 100 Writers</Text>
        </View>
              <View style={{ width: "100%", paddingTop: 5, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", paddingBottom: 25 }}>
                {this.state.top_100_writers.length > 0 ?
            this.state.top_100_writers.map((item, index) => {
            
                return (
                      <View key={index} style={styles.popbox}>

                        <TouchableOpacity style={{ width: "100%", alignItems: "center", paddingBottom: 2 }}
                   onPress={()=>this.props.navigation.push("profile",{others_profile:item.uuid})}>
                         
                          <View style={{ width: "90%", paddingTop: 10 }}>
                           

                            <Image style={styles.box} source={{ uri:IMAGE_URL+item.image }} />

                              <View style={{ width: "100%", paddingTop: 5 }}>
                                <View>
                                  <Text style={{ fontSize: 12, paddingLeft: 2, fontWeight: "bold",textAlign:"center" }}>{item.name}</Text>
                                </View>
                             
                              </View>
                              
                          </View>

                        </TouchableOpacity>
                        
                      </View>
                      
                    )}


                    ) : (
                      <View style={{ width: "100%", height: 200, alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                        <Text>Not Available</Text>
                      </View>
                    )}


                </View>

              </View>
        

            </ScrollView>
       
        

      
        
        
        
        
        
            <View style={{ width: "100%", alignItems: "center"}} >
                <View style={{ width: "90%", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
           
                  <TouchableOpacity style={styles.SignUp_button} 
                  onPress={()=>this.props.navigation.push("Documents")}
                    >
                    <Text style={{ color: '#fff', alignItems: "center", marginTop: 2, fontSize: 18, fontWeight: "bold" }}>View other Stories</Text>
                  </TouchableOpacity>
                
                </View>

              </View>

        








      </View>


    );
  }

}
const styles = StyleSheet.create({
  popbox: {
    width: '48%', alignContent: "center", alignItems: "center", backgroundColor: "#fff", marginTop: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 2.60,
    shadowRadius: 2.62,
    elevation: 6,
  },
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

    width: "100%",
    height: 90,
    resizeMode: "stretch",




  },
  SignUp_button: {

    width: "90%",


    paddingVertical: 10,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#00a2fb",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00a2fb"
  },
  top_100: {
    marginLeft:"auto",
   padding:5,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#00a2fb",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00a2fb"
  },
});