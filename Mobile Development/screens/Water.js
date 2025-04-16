import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Water = () => {
  return (
    <View style={styles.water}>
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon5.png")}
      />
      <Text style={[styles.changeInCost, styles.textTypo]}>CHANGE IN COST</Text>
      <Image
        style={styles.waterChild}
        contentFit="cover"
        source={require("../assets/group-2276.png")}
      />
      <View style={styles.waterItem} />
      <View style={[styles.waterInner, styles.waterInnerPosition]} />
      <View style={[styles.rectangleView, styles.waterInnerPosition]} />
      <Text style={[styles.text, styles.textTypo]}>15.07%</Text>
      <Text style={styles.decreaseInCost}>DECREASE IN COST</Text>
      <View style={styles.waterParent}>
        <Text style={[styles.water1, styles.water1Typo]}>Water</Text>
        <Text style={[styles.current, styles.water1Typo]}>Current</Text>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  waterInnerPosition: {
    backgroundColor: Color.data1,
    width: "18.13%",
    bottom: "30%",
    position: "absolute",
  },
  water1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_9xs,
    left: 10,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 9,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  walkIcon: {
    left: 6,
    borderRadius: Border.br_9xs,
    width: 30,
    height: 30,
    top: 6,
    position: "absolute",
    overflow: "hidden",
  },
  changeInCost: {
    marginLeft: -38.5,
    top: 17,
    fontSize: FontSize.size_smi,
  },
  waterChild: {
    height: "38.75%",
    width: "92.98%",
    top: "31.25%",
    right: "4.09%",
    left: "2.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "30%",
    position: "absolute",
    overflow: "hidden",
  },
  waterItem: {
    height: "31.75%",
    top: "38.46%",
    right: "73.1%",
    bottom: "29.79%",
    left: "8.77%",
    backgroundColor: Color.colorDarkslateblue_100,
    width: "18.13%",
    position: "absolute",
  },
  waterInner: {
    height: "26.67%",
    top: "43.33%",
    right: "46.2%",
    left: "35.67%",
  },
  rectangleView: {
    height: "28.75%",
    top: "41.25%",
    right: "18.13%",
    left: "63.74%",
  },
  text: {
    marginLeft: -30.5,
    top: 191,
    fontSize: FontSize.size_lg,
  },
  decreaseInCost: {
    top: 213,
    left: 58,
    fontSize: FontSize.size_7xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  water1: {
    top: 0,
  },
  current: {
    top: 6,
  },
  groupChild: {
    top: 4,
    borderColor: Color.colorLightblue,
  },
  groupItem: {
    top: 10,
    borderColor: Color.colorViolet,
  },
  waterParent: {
    top: 41,
    left: 136,
    width: 24,
    height: 11,
    position: "absolute",
  },
  water: {
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
    height: 240,
    overflow: "hidden",
  },
});

export default Water;
