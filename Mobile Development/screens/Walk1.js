import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Walk1 = () => {
  return (
    <View style={[styles.walk, styles.walkShadowBox]}>
      <Image
        style={styles.circleIcon}
        contentFit="cover"
        source={require("../assets/circle3.png")}
      />
      <View style={[styles.walkIcon, styles.walkShadowBox]}>
        <View style={styles.nounWalk18006521}>
          <Image
            style={styles.image2Icon}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
      </View>
      <Text style={[styles.costPredicted, styles.totalTypo]}>
        COST PREDICTED
      </Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.rs7500, styles.totalTypo]}>RS 7500</Text>
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
  totalTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
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
    width: 24,
    height: 24,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  walkIcon: {
    top: 6,
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_100,
    width: 30,
    height: 30,
    position: "absolute",
  },
  costPredicted: {
    marginLeft: -42.5,
    top: 18,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  total: {
    marginLeft: -13.5,
    top: 111,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  rs7500: {
    marginLeft: -33.5,
    top: 131,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  walk: {
    shadowColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.style01,
    flex: 1,
    width: "100%",
    height: 208,
  },
});

export default Walk1;
