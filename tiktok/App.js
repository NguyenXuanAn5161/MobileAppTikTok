import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import ProfileScreenComponent from "./src/component/ProfileScreenComponent";
import ProfileScreenComponentlikedpost from "./src/component/ProfileScreenComponent-liked-post";
import VideoItem from "./src/component/VideoItem";
import { data, windowHeight } from "./src/video/constain";

const BottomTab = createBottomTabNavigator();

const HomeScreen = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <FlatList
      data={data}
      pagingEnabled
      renderItem={({ item, index }) => (
        <VideoItem data={item} isActive={activeVideoIndex === index} />
      )}
      onScroll={(e) => {
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight)
        );
        setActiveVideoIndex(index);
      }}
    />
  );
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
                source={require("./assets/images/home.png")}
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
                source={require("./assets/images/search.png")}
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
                source={require("./assets/images/new-video.png")}
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
                source={require("./assets/images/message.png")}
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
                source={require("./assets/images/user.png")}
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

// import { StyleSheet, Text, View } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Screen1 from "./src/component/ProfileScreenComponent";
// import Screen2 from "./src/component/ProfileScreenComponent-liked-post";

// const stack = createNativeStackNavigator()
// export default function App() {
  
//   return (
//     <NavigationContainer>
//       <stack.Navigator initialRouteName='Screen1' screenOptions={{headerShown:false}}>
//         <stack.Screen name='Screen1' component={Screen1}/>
//         <stack.Screen name='Screen2' component={Screen2}/>
//       </stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
// });