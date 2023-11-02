import React from "react";
import { FaCamera, FaVideo } from "react-icons/fa";
import { Image, Text, View } from "react-native";
import styles from "./styleAvatar";

function Avatar({ image, video }) {
  return (
    <View style={styles.body}>
      <View style={styles.body__avatar}>
        <Image style={styles.img__avatar} source={image ? image : null} />
        <FaCamera style={styles.icon} />
        <Text style={styles.text__name}>Thay đổi ảnh</Text>
      </View>
      <View style={styles.body__video}>
        <Image style={styles.img__avatar} source={video ? video : null} />
        <FaVideo style={styles.icon} />
        <Text style={styles.text__name}>Thay đổi video</Text>
      </View>
    </View>
  );
}

export default Avatar;
