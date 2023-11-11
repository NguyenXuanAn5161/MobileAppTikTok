import React from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import VideoItem from "../../component/VideoItem";
import { data } from "../../video/constain";

const Home = () => {
  console.log(data);
  return <FlatList 
      data={data} //past cai mang data
      pagingEnabled //cho phep phan trang
      renderItem={({ item }) =>( //ung voi moi item thi se render video day ra ngoai
          <VideoItem data={item} />
      )}
  />
};

export default Home;