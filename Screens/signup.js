import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, CheckBox, TextInput, Alert, AsyncStorage, Button, Switch, Linking
} from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, MaterialCommunityIcons, Octicons, Feather, Entypo, AntDesign, FontAwesome5, Zocial } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default class signup extends Component {
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
 

  


  render() {
  
    return (
      

      <View style={{ width: screenWidth, height: screenHeight, alignItems: "center", backgroundColor: "#fff" }}>

        <KeyboardAwareScrollView
          contentContainerStyle={{ width: screenWidth, height: screenHeight, alignItems: "center" }}>
          <View style={{ width: "100%", alignContent: "center", alignItems: "center", marginTop: 50, flexDirection: "row", }} >
            <TouchableOpacity
              style={{ width: "15%", alignItems: "center" }} onPress={() => this.props.navigation.navigate('login')}
            >
              <Image style={{ width: 25, height: 25, resizeMode: "cover" }} source={require('../assets/images/remove.png')} />

            </TouchableOpacity>
          </View>

          <View style={{ width: "100%", marginTop: 15, paddingHorizontal: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25, color: "#000" }}>
              Register
            </Text>
            <Text style={{ fontSize: 15, color: "#7e7e7e" }}>
              Register yourself and enjoy
            </Text>
          </View>

          <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 20 }}>
            <View style={{ width: "90%", backgroundColor: "#f5f7f9", paddingVertical: 10 }}>
              <View style={{ width: "100%" }}>
                <TextInput
                  style={{ color: '#000', fontSize: 15, padding: 5, paddingLeft: 15 }}
                  placeholder={"Full Name"}
                  placeholderTextColor="#9eb0be"
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
                />
              </View>

            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 15 }}>
            <View style={{ width: "90%", backgroundColor: "#f5f7f9", paddingVertical: 10 }}>
              <View style={{ width: "100%" }}>
                <TextInput
                  keyboardType="decimal-pad"
                  style={{ color: '#000', fontSize: 15, padding: 5, paddingLeft: 15 }}
                  placeholder={"Contact No"}
                  placeholderTextColor="#9eb0be"
                  onChangeText={(contact) => this.setState({ contact })}
                  value={this.state.contact}
                />
              </View>

            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 15 }}>
            <View style={{ width: "90%", backgroundColor: "#f5f7f9", paddingVertical: 10 }}>
              <View style={{ width: "100%" }}>
                <TextInput
                  keyboardType="email-address"
                  style={{ color: '#000', fontSize: 15, padding: 5, paddingLeft: 15 }}
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
                  style={{ color: '#000', fontSize: 15, padding: 5, paddingLeft: 15 }}
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

          <View style={{ width: "100%", alignItems: "center", alignContent: "center", marginTop: 15 }}>
            <View style={{ width: "90%", backgroundColor: "#f5f7f9", paddingVertical: 10, flexDirection: "row" }}>
              <View style={{ width: "85%" }}>
                <TextInput
                  style={{ color: '#000', fontSize: 15, padding: 5, paddingLeft: 15 }}
                  secureTextEntry={this.state.hide_confirm_password ? true : false}
                  placeholder={"Confirm Password"}
                  placeholderTextColor="#9eb0be"
                  onChangeText={(confirm_password) => this.setState({ confirm_password })}
                  value={this.state.confirm_password}
                />
              </View>
              <TouchableOpacity style={{ width: "15%", alignItems: "center" }} >
                <Ionicons name={this.state.hide_confirm_password ? "eye-off-sharp" : "eye"} size={24} color="#bcbcbc" onPress={() => this.hide_Confirm_Password()} />
              </TouchableOpacity>
            </View>
          </View>
        
         

          <View style={{ width: "100%", marginTop: 25, alignItems: "center" }}>
            <View style={{ width: "90%", alignItems: "center", flexDirection: "row" }}>

              <CheckBox onPress={() => this.updateFavourite()} checked={this.state.is_check} />

              <View>
                <Text style={{ paddingLeft: 18, fontWeight: "bold", fontSize: 15 }}>Do you Agree with </Text>
              </View>
              <TouchableOpacity 
              // onPress={() => this.props.navigation.navigate('term_user')}
               >

                <Text style={{ fontSize: 16, color: "#c9d67c" }}>Term and Conditions</Text>
              </TouchableOpacity>
            </View>


          </View>

          <TouchableOpacity style={styles.SignUp_button} onPress={() => this.props.navigation.navigate('login')}>

            <Text style={{ color: '#fff', fontSize: 18 }}>Sign Up</Text>

          </TouchableOpacity>
          <View style={{ width: "100%", marginTop: 25, alignItems: "center" }}>
            <View style={{ width: "70%", alignItems: "center", flexDirection: "row", paddingLeft: 40 }}>
              <Text style={{ fontSize: 15 }}>You have an account.</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                <Text style={{ fontWeight: "bold", paddingLeft: 2, marginTop: 3 }}>Login</Text>
              </TouchableOpacity>
            </View>


          </View>

        </KeyboardAwareScrollView>


      </View>


    );



  }

}
const styles = StyleSheet.create({
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
    borderColor: "#000",
    borderWidth: 1
  },
  SignUp_button: {
    width: "80%",
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#000",
    backgroundColor: "#000",
    borderWidth: 1
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
   paddingLeft:20,
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
     paddingLeft:20,
      paddingBottom: 10,
      borderWidth: 1,
      borderColor: '#044184',
      borderRadius: 4,
      // backgroundColor: '#044184',
      color: '#000',
}
});