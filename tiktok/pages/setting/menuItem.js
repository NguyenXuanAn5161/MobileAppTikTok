import React from "react";
import { Text, View } from "react-native";
import styles from "./styleMenuItem";

function MenuItem({ iconLeft, text, title, iconRight }) {
  const IconComponentLeft = iconLeft;
  const IconComponentRight = iconRight;
  return (
    <View style={styles.component}>
      {title ? (
        <View style={styles.title}>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
      ) : null}
      <View style={styles.rowAcc}>
        <IconComponentLeft style={styles.iconLeft} />
        <Text style={styles.textCustom}>{text}</Text>
        <IconComponentRight style={styles.iconCustom} />
      </View>
    </View>
  );
}

export default MenuItem;
