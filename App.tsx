// App.tsx
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/pages/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF1EF" />
      <HomeScreen />
    </SafeAreaProvider>
  );
}
