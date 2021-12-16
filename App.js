import React, { Component } from "react";
import AppNavigator from './Navigation/AppNavigator';
import AppLoading from 'expo-app-loading'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
    };
  }
  async componentDidMount() {
     this.setState({loading:false});
  }
  render(){
    if (this.state.loading) {
      return <AppLoading />;
    }
    return(
      <AppNavigator/>
    )


  }

}

