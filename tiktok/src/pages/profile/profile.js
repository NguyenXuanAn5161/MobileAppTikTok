import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { SafeAreaView, View } from "react-native";
import Header from "../header/header";
import Avatar from "./avatar";
import Information from "./information";
import styles from "./style";

function Profile() {
  const header = [
    {
      iconLeft: FaAngleLeft,
      title: "Sửa hồ sơ",
      iconRight: null,
    },
  ];
  const avatar = [
    {
      image: require("../../assets/image/avatar_Naruto.png"),
      video: require("../../assets/video/KAKA.mp4"),
    },
  ];
  const [information, setInformation] = useState([
    { title: "Name", value: "Xuan An", iconRight: FaAngleRight },
    { title: "Username", value: "xuanan", iconRight: FaAngleRight },
    { title: "Bio", value: null, iconRight: FaAngleRight },
    { title: "Instagram", value: null, iconRight: FaAngleRight },
    { title: "Youtube", value: null, iconRight: FaAngleRight },
  ]);

  const [hasChecked, setHasChecked] = useState(false);

  const setInformationDefault = (index) => {
    if (!hasChecked) {
      const valueDefault = information[index].value;
      if (index === 2 && valueDefault === null) {
        information[index].value = "Thêm tiểu sử vào hồ sơ";
      } else if (index === 3 && valueDefault === null) {
        information[index].value = "Thêm Instagram vào hồ sơ";
      } else if (index === 4 && valueDefault === null) {
        information[index].value = "Thêm Youtube vào hồ sơ";
      }
      setHasChecked(true);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.header}>
        {header.map((header, index) => (
          <Header
            key={index}
            iconLeft={header.iconLeft}
            title={header.title}
            iconRight={header.iconRight}
          />
        ))}
      </View>
      <View style={styles.body}>
        <View style={styles.avatar}>
          {avatar.map((avatar, index) => (
            <Avatar key={index} image={avatar.image} video={avatar.video} />
          ))}
        </View>
        <View style={styles.information}>
          {information.map(
            (information, index) => (
              setInformationDefault(index),
              (
                <Information
                  key={index}
                  title={information.title}
                  value={information.value}
                  iconRight={information.iconRight}
                />
              )
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
