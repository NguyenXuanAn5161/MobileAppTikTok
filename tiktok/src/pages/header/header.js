import React from "react";
import { Text, View } from "react-native";
import styles from "./styleHeader";

function Header({ iconLeft, title, iconRight }) {
  const IconComponentLeft = iconLeft;
  const IconComponentRight = iconRight;
  return (
    <View style={styles.component}>
      <IconComponentLeft style={styles.headerIcon} />
      <Text style={styles.headerTitle}>{title}</Text>
      {iconRight ? <IconComponentRight style={styles.headerIcon} /> : null}
    </View>
  );
}

export default Header;
