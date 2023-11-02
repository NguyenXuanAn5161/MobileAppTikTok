import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'
import {Avatar} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();


export default function Profile() {
  return (
    <View styles={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign name="adduser" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Xuan An</Text>
          </TouchableOpacity>
          <AntDesign name="caretdown" size={10} color="black" style={styles.text1}/>
        <TouchableOpacity>
          <Feather name="menu" size={22} style={styles.text2} />
        </TouchableOpacity>
      </View>
      <View style={styles.midbar}>
        <Avatar.Icon size={80} icon={"account"}/>

      </View>

        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    navbar:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'black',
        flex: 1,
        justifyContent:'space-between'
       
    },
    text:{
      fontSize: 19,
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    text1:
    {
      marginLeft:'-90px',
      marginTop:'10px'
    },
    text2:{
      marginTop: '5px'
    },
    midbar:{
      paddingVertical: 20,
      alignItems: 'center',
      backgroundColor: 'white',
    }

})