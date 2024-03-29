import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput,
} from 'react-native';
import {  Ionicons } from '@expo/vector-icons';
import { loginRequest } from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class login extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      email: "",
      password: "",
      hidePass: true,
     
    }

  }
  login = async () => {
    try {
      const { email, password } = this.state;

      if (email == "" && password == "") {
        alert("E-mail and Password is required")   
      }
      else if (email == "" && password != "") {
        alert("E-mail is required")     
      }
      else if (email != "" && password == "") {
        alert("Password is required")   
      }
      
      else{
        loginRequest(email, password)
        .then((res) => {
          console.log("Login Response ===>")
          console.log(res.data)
          if(res.data){
            let response = res.data;
            if(response.success){
              let user_data = response.data;
              AsyncStorage.setItem('user_data', JSON.stringify(user_data));
            this.props.navigation.push("home");
            }else{
              alert(response.message)
            }
            
          }
          
    
       
        })
        .catch((error) => {
        alert("Error: "+error)
        });
      }

     
      
    } catch (e) {
      alert("Failed Login")
    }
  }
  render() {

    return (

      <View style={{ width: screenWidth, height: screenHeight, alignItems: "center", backgroundColor: "#fff" }}>
      
      <View style={{ height: "35%",justifyContent:"center"}}>
        <View style={{width:"100%"}}>
        <View style={{width:"90%",alignItems:"center"}}>
        <Image style={styles.pic} source={require('../assets/logo.png')} />
        {/* <Text style={{textAlign:"center",fontSize:15}}>Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt utlabore et.</Text> */}
        </View>
        </View>
      </View>
        <View style={{ width: "100%", marginTop: 10, paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#000" }}>
            Login
          </Text>
          <Text style={{ fontSize: 15, color: "#7e7e7e" }}>
            Login yourself and enjoy
          </Text>
        </View>
     
        <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 20 }}>
          <View style={{ width: "90%", backgroundColor: "#f5f7f9", paddingVertical: 10 }}>
            <View style={{ width: "85%" }}>
              <TextInput
               keyboardType="email-address"
                style={{ color: '#000', fontSize: 15, padding:5,paddingLeft:15 }}
                placeholder={"Email"}
                placeholderTextColor="#9eb0be"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
            </View>
            
          </View>
        </View> 
        <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 15 }}>
          <View style={{ width: "90%", backgroundColor: "#f5f7f9", paddingVertical: 10, flexDirection: "row" }}>
            <View style={{ width: "85%" }}>
              <TextInput
                style={{ color: '#000', fontSize: 15, padding:5,paddingLeft:15 }}
                secureTextEntry={this.state.hidePass ? true : false}
                placeholder={"Password"}
                placeholderTextColor="#9eb0be"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
            </View>
            <TouchableOpacity style={{ width: "15%", alignItems: "center" }} >
              <Ionicons name={this.state.hidePass ? "eye-off-sharp" : "eye"} size={24} color="#bcbcbc" onPress={() => this.hidePassword()} />
            </TouchableOpacity>
          </View>
        </View>
   
        <TouchableOpacity style={styles.SignUp_button} 
        onPress={() => this.login()}
        // onPress={() => this.props.navigation.push("contest")}
        
        >

          <Text style={{ color: '#fff', fontSize: 18 }}>Login</Text>

        </TouchableOpacity>
        <View style={{ width: "100%", marginTop: 25, alignItems: "center" }}>
          <View style={{ width: "50%", alignItems: "center", flexDirection: "row" }}>
              <Text style={{ fontSize:15}}>Create account.</Text>
              <TouchableOpacity onPress={() => this.props.navigation.push('signup')}>
                <Text style={{fontWeight:"bold",paddingLeft:2,marginTop:3}}>Sign Up</Text>
              </TouchableOpacity>
          </View>
         

        </View>

      </View>


    );



  }

}
const styles = StyleSheet.create({
  pic: {

    height: 200,
    width: 200,
    resizeMode: "contain"


  },
  login_button: {
    width: "80%",
    paddingVertical: 13,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1
  },
  SignUp_button: {
    width: "80%",
    marginTop: 60,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#000",
    backgroundColor: "#000",
    borderWidth: 1
  },
});