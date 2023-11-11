import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./styleHeader";
import { useNavigation } from "@react-navigation/native";

function Header({ iconLeft, title, iconRight }) {
  const navigation = useNavigation();
  const IconComponentLeft = iconLeft;
  const IconComponentRight = iconRight;
  return (
    <View style={styles.component}>
      <Pressable onPress={console.log("ok")}>
        <IconComponentLeft style={styles.headerIcon} />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      {iconRight ? <IconComponentRight style={styles.headerIcon} /> : null}
    </View>
  );
}

export default Header;
