import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Sleep1 = () => {
  return (
    <View style={styles.sleep}>
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon.png")}
      />
      <Image
        style={styles.sleepChild}
        contentFit="cover"
        source={require("../assets/ellipse-2313.png")}
      />
      <Image
        style={styles.sleepChild}
        contentFit="cover"
        source={require("../assets/ellipse-2318.png")}
      />
      <Text style={[styles.l, styles.lFlexBox]}>L</Text>
      <Text style={[styles.text, styles.lFlexBox]}>500</Text>
      <Text
        style={[styles.totalWaterUsage, styles.lTypo]}
      >{`Total Water Usage  By Day `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  lTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_3xs,
  },
  walkIcon: {
    top: 6,
    left: 6,
    borderRadius: Border.br_9xs,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
    overflow: "hidden",
  },
  l: {
    top: 83,
    left: 86,
    width: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_3xs,
  },
  text: {
    marginLeft: -13.5,
    top: 64,
    left: "50%",
    fontSize: FontSize.subHeading1Medium_size,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_600,
  },
  totalWaterUsage: {
    top: 14,
    left: 13,
    textAlign: "center",
    width: 151,
    height: 9,
    position: "absolute",
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

export default Sleep1;
