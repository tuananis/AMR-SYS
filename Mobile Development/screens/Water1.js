import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Water1 = () => {
  return (
    <View style={styles.water}>
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon5.png")}
      />
      <Text style={[styles.changeInCost, styles.costTypo]}>CHANGE IN COST</Text>
      <Image
        style={styles.waterChild}
        contentFit="cover"
        source={require("../assets/group-22761.png")}
      />
      <View style={[styles.waterItem, styles.waterPosition]} />
      <View style={[styles.waterInner, styles.waterPosition]} />
      <Text style={[styles.text, styles.costTypo]}>15.07%</Text>
      <Text style={[styles.decreaseInCost, styles.costTypo]}>
        DECREASE IN COST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  costTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  waterPosition: {
    width: "18.13%",
    bottom: "29.81%",
    position: "absolute",
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
  changeInCost: {
    marginLeft: -38.5,
    top: 17,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_600,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  waterChild: {
    height: "38.94%",
    width: "56.73%",
    top: "31.25%",
    right: "40.35%",
    left: "2.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "29.81%",
    position: "absolute",
    overflow: "hidden",
  },
  waterItem: {
    height: "31.73%",
    top: "38.46%",
    right: "73.1%",
    left: "8.77%",
    backgroundColor: Color.colorDarkslateblue_100,
  },
  waterInner: {
    height: "23.08%",
    top: "47.12%",
    right: "46.2%",
    left: "35.67%",
    backgroundColor: Color.data1,
  },
  text: {
    marginLeft: 20.5,
    top: 88,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_600,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  decreaseInCost: {
    top: 110,
    left: 109,
    fontSize: FontSize.size_7xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
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
    height: 208,
    overflow: "hidden",
  },
});

export default Water1;
