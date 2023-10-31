import { StyleSheet } from "react-native";
import { fontSizeTitle, iconSize } from "../_allcss/_allCss";

const styles = StyleSheet.create({
  component: {
    width: "100%",
    paddingVertical: "2%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerIcon: {
    position: "absolute",
    left: "3%",
    fontSize: iconSize,
  },
  headerTitle: {
    fontSize: fontSizeTitle,
    fontWeight: "bold",
  },
});
export default styles;
