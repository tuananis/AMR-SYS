import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const LightPieChart = () => {
  return (
    <View style={styles.lightPieChart}>
      <View style={[styles.sleep, styles.sleepPosition]} />
      <Image
        style={[styles.doughnutIcon, styles.sleepPosition]}
        contentFit="cover"
        source={require("../assets/doughnut.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sleepPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  sleep: {
    height: "73.21%",
    width: "82.21%",
    top: "-23.21%",
    right: "17.79%",
    bottom: "50%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.style01,
  },
  doughnutIcon: {
    height: "61.73%",
    width: "43.22%",
    top: "-17.86%",
    right: "37.07%",
    bottom: "56.13%",
    left: "19.71%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  lightPieChart: {
    flex: 1,
    width: "100%",
    height: 168,
  },
});

export default LightPieChart;
