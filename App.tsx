import React from "react";
import { View, StyleSheet } from "react-native";
import TabBar from "./src/components/TabBar/tabBar";

export default function App() {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // 탭바가 아래쪽에 위치
  },
});
