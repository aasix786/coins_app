import React, { Component } from "react";
import AppNavigator from './Navigation/AppNavigator';
import LoginNavigator from './Navigation/LoginNavigator';
import AppLoading from 'expo-app-loading'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      loggedIn:false
    };
  }
  async componentDidMount() {

    const val = await AsyncStorage.getItem("user_data");
    let user_data = JSON.parse(val);
    let isOk = false;
    if(user_data){
isOk = true;
    }
    this.setState({ loggedIn: isOk, loading:false })
  }
  render(){
    if (this.state.loading) {
      return <AppLoading />;
    }
    if(!this.state.loggedIn){
      return(
        <AppNavigator/>
      )
    }else{
      return(
        <LoginNavigator/>
      )
    }
    


  }

}

