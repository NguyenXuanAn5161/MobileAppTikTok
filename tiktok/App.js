import React from 'react';
import { Image, StyleSheet, View } from "react-native";

import ProfileScreenComponent from "./src/component/ProfileScreenComponent";

import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


const BottomTab = createBottomTabNavigator();
const HomeScreen = () => {
  return null;
};
const ProfileScreen = () => {
  return <ProfileScreenComponent />;
};
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "black" },
          headerShown: false,
          tabBarActiveTintColor: "white",
        }}
      >
        {/* Nut Home */}
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/image/home.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />

        {/* Nut Search */}
        <BottomTab.Screen
          name="Discover"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/image/search.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />

        {/* Nut them video */}
        <BottomTab.Screen
          name="NewVideo"
          component={HomeScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/image/new-video.png')}
                style={[
                  styles.newVideoButton,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />

        {/* Nut message */}
        <BottomTab.Screen
          name="inbox"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/image/message.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />

        {/* Nut profie */}
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/image/user.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  bottomTabIconFocused: {
    tintColor: "white",
  },
  newVideoButton: {
    width: 48,
    height: 24,
  },
});
