import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { SafeAreaView, View } from "react-native";
import Header from "../header/header";
import Avatar from "./avatar";
import styles from "./style";

function profile() {
  const header = [
    {
      iconLeft: FaAngleLeft,
      title: "Sửa hồ sơ",
      iconRight: null,
    },
  ];
  const avatar = [
    {
      image: require("../../assets/image/avatar_Naruto.png"),
      video: require("../../assets/image/avatar_Gojo.png"),
    },
  ];
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.header}>
        {header.map((header, index) => (
          <Header
            key={index}
            iconLeft={header.iconLeft}
            title={header.title}
            iconRight={header.iconRight}
          />
        ))}
      </View>
      <View style={styles.body}>
        {avatar.map((avatar, index) => (
          <Avatar key={index} image={avatar.image} video={avatar.video} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default profile;
