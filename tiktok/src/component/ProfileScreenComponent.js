import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'
import {Avatar} from 'react-native-paper'
import { AntDesign, MaterialIcons, Ionicons, Entypo} from '@expo/vector-icons'
import VideoItem from "../../src/component/VideoItem";
import { data, windowHeight } from "../../src/video/constain";

const BottomTab = createBottomTabNavigator();


export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign name="adduser" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Xuan An</Text>
          </TouchableOpacity>
          <AntDesign name="caretdown" size={10} color="black" style={styles.text1}/>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.userName}>
        <Avatar.Icon size={80} icon={"account"}/>
        <Text style={styles.accountText}>@xuanan</Text>
      </View>
      <View style={styles.counterCount}>
        <View style={styles.counterItems}>
          <TouchableOpacity>
          <Text style={styles.countText}>14</Text>
          </TouchableOpacity>
          <Text style={styles.countLabel}>Following</Text>
        </View>
        <View style={styles.counterItems}>
          <TouchableOpacity>
          <Text style={styles.countText}>38</Text>
          </TouchableOpacity>
          <Text style={styles.countLabel}>Followers</Text>
        </View>
        <View style={styles.counterItems}>
          <TouchableOpacity>
          <Text style={styles.countText}>91</Text>
          </TouchableOpacity>
          <Text style={styles.countLabel}>Likes</Text>
        </View>
      </View>
      <View style={styles.userButton}>
        <View>
          <TouchableOpacity style={styles.grayOutLineButton}>
            <Text style={{fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Edit profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft:30}}>
          <TouchableOpacity style={styles.grayOutLineButton1}>
            <Feather name="bookmark" size={18} color="black" style={{textAlign: 'center'}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <TouchableOpacity>
          <Text style={styles.bioText}>To tap add bio</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Feather name="menu" size={22}/>  
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>
      <View style={styles.underLine}>
          <Text style={{ fontWeight: 'bold', fontSize:10, marginTop:'-10px'}}>__________</Text>
      </View>
      <FlatList
          data={data}
          numColumns={3}
          renderItem={({ item}) => (
          <Image source={item.avatarUri} style={{ width: 100, height: 200, flex: 1/3}}/>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white',
    },
    navbar:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'black',
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
    userName:{
      paddingVertical: 20,
      alignItems: 'center',
      backgroundColor: 'white',
      borderColor: 'black',
    },
    accountText:{
      padding: 3,
      fontWeight: 'bold',
      fontSize: 17,
      paddingBottom: 20,
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
      justifyContent:'center',
    },
    grayOutLineButton:{
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 4,
      paddingVertical: 10,
      paddingHorizontal: 30,
      width: '115%',
      
    },
    grayOutLineButton1:{
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 4,
      width: '45px',
      paddingVertical: 10,
    },
    bioContainer:{
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    bioText:{
      textAlign: 'center',
      padding: 15,
      color: 'gray',
      fontSize: 11,
    },
    listContainer:{
      backgroundColor: 'white',
      flexDirection:'row',
      paddingTop: 10,
      justifyContent:'space-around',
    },
    underLine:{
      backgroundColor:'white',
      paddingLeft: 77,
      paddingBottom: 3,
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    videoThumbnail:{
      backgroundColor:'white',
    },

      

})