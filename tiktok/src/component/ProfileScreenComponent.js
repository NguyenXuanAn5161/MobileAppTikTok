import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import { data } from "../../src/video/constain";

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
        <AntDesign
          name="caretdown"
          size={10}
          color="black"
          style={styles.text1}
        />
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.userName}>
        <Avatar.Icon size={80} icon={"account"} />
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
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Edit profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 30 }}>
          <TouchableOpacity style={styles.grayOutLineButton1}>
            <Feather
              name="bookmark"
              size={18}
              color="black"
              style={{ textAlign: "center" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <TouchableOpacity>
          <Text style={styles.bioText}>To tap add bio</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Feather name="menu" size={22} />
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>
      <View style={styles.underLine}>
        <Text style={{ fontWeight: "bold", fontSize: 10, marginTop: "-10px" }}>
          __________
        </Text>
      </View>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => (
          <Image
            source={item.avatarUri}
            style={{ width: 100, height: 200, flex: 1 / 3 }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "black",
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 19,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  text1: {
    marginLeft: "-90px",
    marginTop: "10px",
  },
  text2: {
    marginTop: "5px",
  },
  userName: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "black",
  },
  accountText: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
  counterCount: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingBottom: 10,
    marginTop: "-30px",
  },
  counterItems: {
    flex: 1,
    alignItems: "center",
  },
  countText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  countLabel: {
    color: "gray",
    fontSize: 11,
  },
  userButton: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
  },
  grayOutLineButton: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  grayOutLineButton1: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 4,
    width: "45px",
    paddingVertical: 10,
  },
});
