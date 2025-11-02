import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BogumiLogo from "../assets/icons/logo.svg";
import CircleButtons from "../components/CircleButtons";
import { colors } from "../constants/colors";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <View style={styles.header}>
        <BogumiLogo width={120} height={120} />
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>오늘 17커플이 다시 이어졌어요</Text>
      </View>
      <CircleButtons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
  },
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  banner: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.normalPink,
    borderRadius: 30,
    marginHorizontal: 96,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    color: colors.normalPink,
    fontSize: 14,
    fontFamily: "Pretendard-Regular",
    textAlign: "center",
  },
});

export default HomeScreen;

