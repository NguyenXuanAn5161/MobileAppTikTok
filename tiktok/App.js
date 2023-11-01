import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import {data, windowHeight} from './src/video/constain'
import VideoItem from './src/component/VideoItem';
import { FlatList } from 'react-native';
import { useState } from 'react';
import ProfileScreenComponent from './src/component/ProfileScreenComponent';


const BottomTab = createBottomTabNavigator();

const HomeScreen = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();

  return <FlatList 
    data={data}
    pagingEnabled
    renderItem={({ item, index }) => (
      <VideoItem data={item} isActive={activeVideoIndex === index}/>
    )}
    onScroll={e => {
      const index = Math.round(
        e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight),
      );
      setActiveVideoIndex(index);
    }}
  />;
};

const ProfileScreen = () => {
  return (
    <ProfileScreenComponent />
  );
};




export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        tabBarStyle: {backgroundColor: 'black'},
        headerShown: false,
        tabBarActiveTintColor: 'white',
      }}>
        {/* Nut Home */}
        <BottomTab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <Image 
              source={require('./assets/images/home.png')} 
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          )
        }}/>

        {/* Nut Search */}  
        <BottomTab.Screen name="Discover" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <Image 
              source={require('./assets/images/search.png')} 
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          )
        }}/>  

         {/* Nut them video */}  
         <BottomTab.Screen name="NewVideo" component={HomeScreen} options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image 
              source={require('./assets/images/new-video.png')} 
              style={[
                styles.newVideoButton,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          )
        }}/>  

        {/* Nut message */}  
        <BottomTab.Screen name="inbox" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <Image 
              source={require('./assets/images/message.png')} 
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          )
        }}/>  

        {/* Nut profie */}  
        <BottomTab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({focused}) => (
            <Image 
              source={require('./assets/images/user.png')} 
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          )
        }}/>               
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey'
  },
  bottomTabIconFocused: {
    tintColor: 'white',
  },
  newVideoButton: {
    width: 48,
    height: 24,
  }
});
