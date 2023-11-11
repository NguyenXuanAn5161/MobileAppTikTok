import { useState } from "react";
import { StyleSheet } from "react-native";
import VideoItem from "../../component/VideoItem";
import { data } from "../../video/constain";

export default function Home({ navigation, route }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  return <VideoItem data={data} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
