import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

type TabKey = "home" | "anonymous" | "mypage";

const TabBar = () => {
  const [active, setActive] = useState<TabKey>("home");

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "home", label: "홈", icon: "home-outline" },
  { key: "anonymous", label: "익명감정공유", icon: "chatbubble-ellipses-outline" },
  { key: "mypage", label: "마이페이지", icon: "person-outline" },
];


  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => setActive(tab.key)}
          style={styles.tab}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={active === tab.key ? "#007AFF" : "#666"}
          />
          <Text
            style={[
              styles.label,
              { color: active === tab.key ? "#007AFF" : "#666" },
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
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
