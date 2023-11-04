import { StyleSheet } from "react-native";
import { fontSizeText, fontSizeTitle, iconSize } from "../_allcss/_allCss";

const styles = StyleSheet.create({
  component: {
    width: "100%",
    paddingVertical: "2%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: fontSizeTitle,
    fontWeight: "400",
    left: "3%",
    flex: 1,
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    right: "3%",
    flex: 6,
  },
  value: { fontSize: fontSizeText, color: "#ccc", marginRight: "2%" },
  icon: {
    fontSize: iconSize,
    color: "#ccc",
  },
});
export default styles;
