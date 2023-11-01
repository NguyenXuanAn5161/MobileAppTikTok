import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();


export default function Profile() {
  return (
    <View styles={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../../assets/images/addUser.png')} 
                style={styles.addUser} />
        <Text style={styles.textNavbar}> Xuan An</Text>
        {/* nut setting */}
        <TouchableOpacity>
            <Image source={require('../../assets/images/setting.png')} 
                style={styles.setting} />
        </TouchableOpacity>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    navbar:{
        backgroundColor: 'white',
        borderBottomColor: 'red',
        flexDirection: 'row',
    },
    addUser:{
        marginLeft: 30,
        width: 30,
        height: 30,
    },
    textNavbar:{
        fontWeight: 'bold',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    setting:{
        width: 30,
        height: 30,
    }
})