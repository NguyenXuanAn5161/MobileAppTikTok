import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, UserStackNavigator} from "./StackNavigation";
import Ionicons from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown: false, //Khong hien hader
            tabBarStyle: {backgroundColor: 'black'},
            tabBarActiveTintColor: 'white',
    }}>
      <Tab.Screen name="Home" component={MainStackNavigator}
      options={{
        tabBarIcon: ({focused}) => (
          <Ionicons 
                name="home-outline" 
                color={focused ? 'white' : 'gray'}
                size={20}
                /> // Sử dụng biểu tượng ngôi nhà
        ),
      }}
      />

    <Tab.Screen name="Search" component={MainStackNavigator}
      options={{
        tabBarIcon: ({focused}) => (
          <Ionicons 
                name="search-outline" 
                color={focused ? 'white' : 'gray'}
                size={20}
                /> // Sử dụng biểu tượng tìm kiếm
        ),
      }}
      />

    <Tab.Screen name="User" component={UserStackNavigator}
      options={{
        tabBarIcon: ({focused}) => (
          <Ionicons 
                name="person-outline" 
                color={focused ? 'white' : 'gray'}
                size={20}
                /> // Sử dụng biểu tượng người dùng
        ),
      }}  
      />
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;