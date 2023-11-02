import { StyleSheet } from "react-native";
import { fontSizeText, iconSize } from "../_allcss/_allCss";

const styles = StyleSheet.create({
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  body__avatar: {
    paddingVertical: "2%",
    width: "50%",
    alignItems: "center",
  },
  body__video: {
    paddingVertical: "2%",
    width: "50%",
    alignItems: "center",
  },
  img__avatar: {
    backgroundColor: "gray",
    width: "70%",
    aspectRatio: 1, // Đảm bảo tỷ lệ khung hình 1:1 (tạo hình tròn)
    borderRadius: "50%", // Đặt border-radius để tạo hình tròn
    resizeMode: "contain",
    opacity: 0.6,
  },
  icon: {
    position: "absolute",
    bottom: "50%",
    color: "#fff",
    padding: "2%",
    fontSize: iconSize,
  },
  text__name: {
    marginTop: "3%",
    color: "#000",
    fontSize: fontSizeText,
  },
});

export default styles;
