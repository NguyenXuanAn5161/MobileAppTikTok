import { AntDesign, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

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
      <View style={styles.userName}>
        <Avatar.Icon size={80} icon={"account"}/>
        <Text style={styles.accountText}>@xuanan</Text>
      </View>
      <View style={styles.counterCount}>
        <View style={styles.counterItems}>
          <Text style={styles.countText}>14</Text>
          <Text style={styles.countLabel}>Following</Text>
        </View>
        <View style={styles.counterItems}>
          <Text style={styles.countText}>38</Text>
          <Text style={styles.countLabel}>Followers</Text>
        </View>
        <View style={styles.counterItems}>
          <Text style={styles.countText}>91</Text>
          <Text style={styles.countLabel}>Likes</Text>
        </View>
      </View>
      <View style={styles.userButton}>
        <View>
        <TouchableOpacity style={styles.grayOutLineButton}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Edit profile</Text>
        </TouchableOpacity>
        </View>
        <View style={{paddingLeft:30}}>
        <TouchableOpacity style={styles.grayOutLineButton1}>
        <Feather name="bookmark" size={18} color="black" style={{textAlign: 'center'}} />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
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
    userName:{
      paddingVertical: 20,
      alignItems: 'center',
      backgroundColor: 'white',
      borderColor: 'black',
    },
    accountText:{
      padding: 20,
      fontWeight: 'bold',
      fontSize: 17,
    },
    counterCount:{
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingHorizontal: 50,
      paddingBottom: 10,
      marginTop:'-30px'
    },
    counterItems:{
      flex: 1,
      alignItems: 'center',
    },
    countText:{
      fontWeight: 'bold',
      fontSize: 16,
    },
    countLabel:{
      color: 'gray',
      fontSize: 11,
    },
    userButton:{
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent:'center'
    },
    grayOutLineButton:{
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 4,
      paddingVertical: 10,
      paddingHorizontal: 30,
      
    },
    grayOutLineButton1:{
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 4,
      width: '45px',
      paddingVertical: 10,
    }
      

})