import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Heart1 = () => {
  return (
    <View style={styles.heart}>
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon2.png")}
      />
      <Text style={styles.activeAppliances}>ACTIVE APPLIANCES</Text>
      <View style={[styles.heartChild, styles.heartChildBorder]} />
      <View style={[styles.heartItem, styles.heartChildBorder]} />
      <View style={[styles.heartInner, styles.heartChildBorder]} />
      <View style={[styles.rectangleView, styles.heartChildBorder]} />
      <View style={[styles.heartChild1, styles.heartChildBorder]} />
      <View style={[styles.heartChild2, styles.heartChildBorder]} />
      <Text style={[styles.kwh, styles.kwhTypo]}>1.4 kWh</Text>
      <Text style={[styles.kwh1, styles.kwhTypo]}>0.9 kWh</Text>
      <Text style={[styles.kwh2, styles.kwhTypo]}>0.8 kWh</Text>
      <Text style={[styles.kwh3, styles.kwhTypo]}>0.4 kWh</Text>
      <Text style={[styles.kwh4, styles.kwhTypo]}>0.3 kWh</Text>
      <Text style={[styles.kwh5, styles.kwhTypo]}>0.7 kWh</Text>
      <Text
        style={[styles.heatingAc, styles.othersTypo]}
      >{`Heating & AC`}</Text>
      <Text style={[styles.evCharge, styles.othersTypo]}>EV Charge</Text>
      <Text style={[styles.plugLoads, styles.othersTypo]}>Plug Loads</Text>
      <Text style={[styles.refrigeration, styles.othersTypo]}>
        Refrigeration
      </Text>
      <Text style={[styles.lighting, styles.othersTypo]}>Lighting</Text>
      <Text style={[styles.others, styles.othersTypo]}>Others</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heartChildBorder: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    height: "8.33%",
    position: "absolute",
  },
  kwhTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  othersTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 6,
    position: "absolute",
  },
  walkIcon: {
    top: 6,
    borderRadius: Border.br_9xs,
    width: 30,
    height: 30,
    left: 6,
    position: "absolute",
    overflow: "hidden",
  },
  activeAppliances: {
    marginLeft: -42.5,
    top: 17,
    left: "50%",
    fontSize: FontSize.size_smi,
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  heartChild: {
    width: "36.26%",
    top: "23.11%",
    right: "-16.37%",
    bottom: "68.56%",
    left: "80.12%",
    backgroundColor: Color.colorSlateblue_200,
  },
  heartItem: {
    width: "28.65%",
    top: "34.47%",
    right: "-1.17%",
    bottom: "57.2%",
    left: "72.51%",
    backgroundColor: Color.colorSlateblue_400,
  },
  heartInner: {
    width: "23.39%",
    top: "45.83%",
    right: "9.36%",
    bottom: "45.83%",
    left: "67.25%",
    backgroundColor: Color.colorSlateblue_500,
  },
  rectangleView: {
    width: "18.71%",
    top: "57.2%",
    right: "18.71%",
    bottom: "34.47%",
    left: "62.57%",
    backgroundColor: Color.colorSlateblue_600,
  },
  heartChild1: {
    width: "14.62%",
    top: "68.56%",
    right: "26.9%",
    bottom: "23.11%",
    left: "58.48%",
    backgroundColor: Color.colorSlateblue_700,
  },
  heartChild2: {
    width: "8.77%",
    top: "79.92%",
    right: "38.6%",
    bottom: "11.74%",
    left: "52.63%",
    backgroundColor: Color.colorSlateblue_800,
  },
  kwh: {
    top: 69,
    left: 142,
  },
  kwh1: {
    top: 100,
    left: 129,
  },
  kwh2: {
    top: 130,
    left: 121,
  },
  kwh3: {
    top: 190,
    left: 107,
  },
  kwh4: {
    top: 220,
    left: 97,
  },
  kwh5: {
    left: 111,
    top: 158,
  },
  heatingAc: {
    top: 67,
  },
  evCharge: {
    top: 96,
  },
  plugLoads: {
    top: 126,
  },
  refrigeration: {
    top: 158,
  },
  lighting: {
    top: 186,
  },
  others: {
    top: 216,
  },
  heart: {
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
    height: 264,
    overflow: "hidden",
  },
});

export default Heart1;
