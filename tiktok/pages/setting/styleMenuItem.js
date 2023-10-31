import { StyleSheet } from "react-native";
import { fontSizeText, fontSizeTitle, iconSize } from "../_allcss/_allCss";

const styles = StyleSheet.create({
  component: {
    width: "100%",
    paddingVertical: "2%",
    // backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    marginLeft: "3%",
    marginRight: "3%",
    width: "94%",
  },
  txtTitle: { color: "gray", fontSize: fontSizeTitle },
  rowAcc: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
    marginTop: "2%",
    marginRight: "3%",
    width: "94%",
  },
  textCustom: { marginLeft: "3%", fontSize: fontSizeText },
  iconLeft: { fontSize: iconSize },
  iconCustom: { marginLeft: "auto", fontSize: iconSize },
});

export default styles;
