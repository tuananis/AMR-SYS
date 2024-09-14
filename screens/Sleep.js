import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Sleep = () => {
  return (
    <View style={styles.sleep}>
      <Image
        style={[styles.walkIcon, styles.walkIconPosition]}
        contentFit="cover"
        source={require("../assets/walk-icon.png")}
      />
      <Text style={[styles.energyIntensity, styles.textFlexBox]}>
        ENERGY INTENSITY
      </Text>
      <Image
        style={[styles.sleepChild, styles.walkIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2313.png")}
      />
      <Image
        style={[styles.sleepChild, styles.walkIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-23181.png")}
      />
      <Text style={[styles.kwhsqft, styles.textFlexBox]}>kWh/Sqft</Text>
      <Text style={[styles.text, styles.textFlexBox]}>1.6</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  walkIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  walkIcon: {
    top: 6,
    left: 6,
    borderRadius: Border.br_9xs,
    width: 30,
    height: 30,
  },
  energyIntensity: {
    top: 16,
    left: 47,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  sleepChild: {
    height: "83.74%",
    width: "51.46%",
    top: "36.59%",
    right: "23.98%",
    bottom: "-20.33%",
    left: "24.56%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  kwhsqft: {
    top: 83,
    left: 65,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  text: {
    marginLeft: -11.5,
    top: 64,
    left: "50%",
    fontSize: FontSize.subHeading1Medium_size,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_600,
  },
  sleep: {
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
    flex: 1,
    width: "100%",
    height: 123,
    overflow: "hidden",
  },
});

export default Sleep;
