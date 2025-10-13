// App.tsx
import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BogumiLogo from "./src/assets/icons/logo.svg";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF1EF" />
      <View style={styles.header}>
        <BogumiLogo width={120} height={120} />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF1EF",
  },
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
});
