import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// SVG 아이콘 import
import HomeIcon from "../../assets/icons/unSelectHome.svg";
import HomeIconSelected from "../../assets/icons/selectHome.svg";

import LockIcon from "../../assets/icons/unSelectLock.svg";
import LockIconSelected from "../../assets/icons/selectLock.svg";

import HeartIcon from "../../assets/icons/unSelectHeart.svg";
import HeartIconSelected from "../../assets/icons/selectHeart.svg";

type TabKey = "home" | "anonymous" | "mypage";

const TabBar = () => {
  const [active, setActive] = useState<TabKey>("home");

  const tabs: {
    key: TabKey;
    label: string;
    icon: { default: React.FC<any>; selected: React.FC<any> };
  }[] = [
    { key: "home", label: "홈", icon: { default: HomeIcon, selected: HomeIconSelected } },
    { key: "anonymous", label: "익명감정공유", icon: { default: LockIcon, selected: LockIconSelected } },
    { key: "mypage", label: "마이페이지", icon: { default: HeartIcon, selected: HeartIconSelected } },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const Icon = active === tab.key ? tab.icon.selected : tab.icon.default;
        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActive(tab.key)}
            style={styles.tab}
          >
            <Icon width={24} height={24} />
            <Text
              style={[
                styles.label,
                { color: active === tab.key ? "#007AFF" : "#666" },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  tab: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
  },
});

export default TabBar;
