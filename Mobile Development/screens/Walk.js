import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Walk = () => {
  return (
    <View style={[styles.walk, styles.walkShadowBox]}>
      <Image
        style={styles.circleIcon}
        contentFit="cover"
        source={require("../assets/circle1.png")}
      />
      <View style={[styles.walkIcon, styles.walkShadowBox]}>
        <View style={[styles.nounWalk18006521, styles.waterParentLayout]}>
          <Image
            style={styles.image2Icon}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
      </View>
      <Text style={[styles.costPredicted, styles.rs7500Typo]}>
        COST PREDICTED
      </Text>
      <Text style={styles.total}>Total</Text>
      <Text style={[styles.text, styles.textTypo]}>3000</Text>
      <Text style={[styles.text1, styles.textTypo]}>4500</Text>
      <Text style={[styles.rs7500, styles.rs7500Typo]}>RS 7500</Text>
      <View style={[styles.waterParent, styles.waterParentLayout]}>
        <Text style={[styles.water, styles.waterTypo]}>Water</Text>
        <Text style={[styles.current, styles.waterTypo]}>Current</Text>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Text style={[styles.august, styles.rs7500Typo]}>{`August `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  walkShadowBox: {
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  waterParentLayout: {
    width: 24,
    position: "absolute",
  },
  rs7500Typo: {
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    transform: [
      {
        rotate: "-51.7deg",
      },
    ],
    fontSize: FontSize.size_7xs,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  waterTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_9xs,
    left: 10,
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
  circleIcon: {
    top: 66,
    left: 21,
    width: 130,
    height: 130,
    position: "absolute",
  },
  image2Icon: {
    top: 3,
    left: 4,
    width: 15,
    height: 18,
    position: "absolute",
  },
  nounWalk18006521: {
    marginTop: -12,
    marginLeft: -12,
    top: "50%",
    height: 24,
    left: "50%",
    width: 24,
    overflow: "hidden",
  },
  walkIcon: {
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_100,
    width: 30,
    height: 30,
    top: 6,
    position: "absolute",
  },
  costPredicted: {
    marginLeft: -42.5,
    top: 18,
    fontSize: FontSize.size_smi,
  },
  total: {
    marginLeft: -13.5,
    top: 111,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: 38.5,
    top: 173,
  },
  text1: {
    marginLeft: -47.4,
    top: 162,
  },
  rs7500: {
    marginLeft: -33.5,
    top: 131,
    fontSize: FontSize.size_lg,
  },
  water: {
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
    left: 138,
    height: 11,
  },
  august: {
    marginLeft: -23.5,
    top: 203,
    fontSize: FontSize.size_sm,
  },
  walk: {
    shadowColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.style01,
    flex: 1,
    width: "100%",
    height: 240,
  },
});

export default Walk;
