import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();


export default function Profile() {
  return (
    <View styles={styles.container}>
      
     
        Hi
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})