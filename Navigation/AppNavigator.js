import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signup from '../Screens/signup';
import login from '../Screens/login';
import contest from '../Screens/contest';
import home from "../Screens/home";
import player from "../Screens/player";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" headerMode={"none"}>
      <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="contest" component={contest} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="player" component={player} />
      


      </Stack.Navigator>
    </NavigationContainer>
  );
}
