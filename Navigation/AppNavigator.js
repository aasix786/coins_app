import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signup from '../Screens/signup';
import login from '../Screens/login';
import contest from '../Screens/contest';
import contest_detail from '../Screens/contest_detail';
import home from "../Screens/home";
import player from "../Screens/player";
import coin_selection from "../Screens/coin_selection";
import my_contests from "../Screens/my_contests";
import submitted_contests from "../Screens/submitted_contests";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" headerMode={"none"}>
      <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="contest" component={contest} />
        <Stack.Screen name="contest_detail" component={contest_detail} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="player" component={player} />
        <Stack.Screen name="coin_selection" component={coin_selection} />
        <Stack.Screen name="my_contests" component={my_contests} />
        <Stack.Screen name="submitted_contests" component={submitted_contests} />
      


      </Stack.Navigator>
    </NavigationContainer>
  );
}
