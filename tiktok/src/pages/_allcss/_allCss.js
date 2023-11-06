import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const fontSizeTitle = width * 0.05;
export const fontSizeText = width * 0.04; // Ví dụ: cỡ chữ chiếm 4% chiều rộng màn hình
export const iconSize = width * 0.04; // Ví dụ: kích thước icon chiếm 10% chiều rộng màn hình
