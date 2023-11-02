import React from "react";
import { Text, View } from "react-native";
import styles from "./styleInformation";

function information({ title, value, iconRight }) {
  const IconComponentRight = iconRight;
  return (
    <View style={styles.component}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right}>
        <Text style={styles.value}>{value}</Text>
        {iconRight ? <IconComponentRight style={styles.icon} /> : null}
      </View>
    </View>
  );
}

export default information;
