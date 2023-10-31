import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCommentAlt,
  FaExchangeAlt,
  FaFlag,
  FaLanguage,
  FaLock,
  FaRegBell,
  FaShare,
  FaShoppingCart,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { SafeAreaView, View } from "react-native";
import Header from "../header/header";
import MenuItem from "./menuItem";
import styles from "./style";

function Setting() {
  const header = [
    {
      iconLeft: FaAngleLeft,
      title: "Quyền riêng tư và cài đặt",
      iconRight: null,
    },
  ];
  const account = [
    { title: "Tài khoản" },
    { iconLeft: FaUser, text: "Quản lý tài khoản", iconRight: FaAngleRight },
    {
      iconLeft: FaLock,
      text: "Quyền riêng tư và bảo mật",
      iconRight: FaAngleRight,
    },
    { iconLeft: FaShoppingCart, text: "Đặt hàng", iconRight: FaAngleRight },
    { iconLeft: FaShare, text: "Chia sẻ hồ sơ", iconRight: FaAngleRight },
  ];

  const titleAccount = account.shift().title;

  const general = [
    { title: "Nội dung & Hiển thị" },
    { iconLeft: FaRegBell, text: "Thông báo", iconRight: FaAngleRight },
    {
      iconLeft: FaLanguage,
      text: "Ngôn ngữ",
      iconRight: FaAngleRight,
    },
  ];

  const titleGeneral = general.shift().title;

  const support = [
    { title: "Hỗ trợ" },
    { iconLeft: FaFlag, text: "Báo cáo", iconRight: FaAngleRight },
    {
      iconLeft: FaCommentAlt,
      text: "Hỗ trợ",
      iconRight: FaAngleRight,
    },
  ];

  const titleSupport = support.shift().title;

  const log = [
    { title: "Đăng Nhập" },
    {
      iconLeft: FaExchangeAlt,
      text: "Chuyển đổi tài khoản",
      iconRight: FaAngleRight,
    },
    {
      iconLeft: FaSignOutAlt,
      text: "Đăng xuất",
      iconRight: FaAngleRight,
    },
  ];

  const titleLog = log.shift().title;

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
        <View>
          {account.map((account, index) => (
            <MenuItem
              key={index}
              iconLeft={account.iconLeft}
              text={account.text}
              iconRight={account.iconRight}
              title={index === 0 ? titleAccount : null}
            />
          ))}
        </View>
        <View>
          {general.map((general, index) => (
            <MenuItem
              key={index}
              iconLeft={general.iconLeft}
              text={general.text}
              iconRight={general.iconRight}
              title={index === 0 ? titleGeneral : null}
            />
          ))}
        </View>
        <View>
          {support.map((support, index) => (
            <MenuItem
              key={index}
              iconLeft={support.iconLeft}
              text={support.text}
              iconRight={support.iconRight}
              title={index === 0 ? titleSupport : null}
            />
          ))}
        </View>
        <View>
          {log.map((log, index) => (
            <MenuItem
              key={index}
              iconLeft={log.iconLeft}
              text={log.text}
              iconRight={log.iconRight}
              title={index === 0 ? titleLog : null}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Setting;
