// Stack navigation de chuyen cac trang

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/HomePage/Home";
import ProfileScreenComponent from "../component/ProfileScreenComponent";
import Profile from "../pages/profile/profile";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} /> 
      <Stack.Screen name="EditProfile" component={Profile} 
      /> 
    </Stack.Navigator>
  );
}

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreenComponent} /> 
    </Stack.Navigator>
  );
}




export { MainStackNavigator, UserStackNavigator };