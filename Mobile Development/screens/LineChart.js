import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LineChart = () => {
  return (
    <View style={styles.lineChart}>
      <View style={styles.rectangle} />
      <Image
        style={[styles.xAxisGridIcon, styles.axisIconLayout1]}
        contentFit="cover"
        source={require("../assets/xaxis-grid.png")}
      />
      <Image
        style={[styles.xAxisGridIcon1, styles.axisIconLayout1]}
        contentFit="cover"
        source={require("../assets/xaxis-grid.png")}
      />
      <Image
        style={[styles.xAxisGridIcon2, styles.axisIconLayout1]}
        contentFit="cover"
        source={require("../assets/xaxis-grid.png")}
      />
      <Image
        style={[styles.xAxisGridIcon3, styles.axisIconLayout1]}
        contentFit="cover"
        source={require("../assets/xaxis-grid.png")}
      />
      <Image
        style={[styles.xAxisGridIcon4, styles.axisIconLayout1]}
        contentFit="cover"
        source={require("../assets/xaxis-grid.png")}
      />
      <Image
        style={[styles.yAxisGridIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/yaxis-grid.png")}
      />
      <Image
        style={[styles.yAxisGridIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/yaxis-grid.png")}
      />
      <Image
        style={[styles.yAxisGridIcon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/yaxis-grid.png")}
      />
      <Image
        style={[styles.yAxisGridIcon3, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/yaxis-grid.png")}
      />
      <Image
        style={[styles.yAxisGridIcon4, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/yaxis-grid.png")}
      />
      <Image
        style={[styles.yAxisGridIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/yaxis-grid.png")}
      />
      <Image
        style={[styles.xAxisGridIcon, styles.axisIconLayout1]}
        contentFit="cover"
        source={require("../assets/xaxis-grid.png")}
      />
      <Text style={[styles.text, styles.textTypo2]}>Text</Text>
      <Text style={[styles.text1, styles.textTypo2]}>Text</Text>
      <Text style={[styles.text2, styles.textTypo2]}>Text</Text>
      <Text style={[styles.text3, styles.textTypo2]}>Text</Text>
      <Text style={[styles.text4, styles.textTypo2]}>Text</Text>
      <Text style={[styles.text5, styles.textTypo1]}>0</Text>
      <Text style={[styles.text6, styles.textTypo]}>25</Text>
      <Text style={[styles.text7, styles.textTypo]}>50</Text>
      <Text style={[styles.text8, styles.textTypo]}>75</Text>
      <Text style={[styles.text9, styles.textTypo1]}>100</Text>
      <Image
        style={[styles.lineIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/line.png")}
      />
      <Image
        style={[styles.markerIcon, styles.markerIconLayout]}
        contentFit="cover"
        source={require("../assets/marker.png")}
      />
      <Image
        style={[styles.markerIcon1, styles.markerIconLayout]}
        contentFit="cover"
        source={require("../assets/marker.png")}
      />
      <Image
        style={[styles.markerIcon2, styles.markerIconLayout]}
        contentFit="cover"
        source={require("../assets/marker.png")}
      />
      <Image
        style={[styles.markerIcon3, styles.markerIconLayout]}
        contentFit="cover"
        source={require("../assets/marker.png")}
      />
      <Image
        style={[styles.markerIcon4, styles.markerIconLayout]}
        contentFit="cover"
        source={require("../assets/marker.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  axisIconLayout1: {
    height: 281,
    overflow: "hidden",
    maxWidth: "100%",
    top: 6,
    position: "absolute",
  },
  iconPosition: {
    width: 473,
    left: 27,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_3xs,
    top: 295,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "right",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo: {
    left: 5,
    textAlign: "right",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  markerIconLayout: {
    height: 8,
    width: 8,
    position: "absolute",
  },
  rectangle: {
    width: 500,
    height: 300,
    left: 0,
    top: 6,
    position: "absolute",
  },
  xAxisGridIcon: {
    left: 27,
    height: 281,
    overflow: "hidden",
    maxWidth: "100%",
  },
  xAxisGridIcon1: {
    left: 145,
  },
  xAxisGridIcon2: {
    left: 264,
  },
  xAxisGridIcon3: {
    left: 382,
  },
  xAxisGridIcon4: {
    left: 501,
  },
  yAxisGridIcon: {
    top: 288,
    maxHeight: "100%",
    width: 473,
  },
  yAxisGridIcon1: {
    top: 218,
    maxHeight: "100%",
    width: 473,
  },
  yAxisGridIcon2: {
    top: 148,
    maxHeight: "100%",
    width: 473,
  },
  yAxisGridIcon3: {
    top: 77,
    maxHeight: "100%",
    width: 473,
  },
  yAxisGridIcon4: {
    maxHeight: "100%",
    width: 473,
    top: 6,
  },
  text: {
    left: 17,
  },
  text1: {
    left: 135,
  },
  text2: {
    left: 254,
  },
  text3: {
    left: 372,
  },
  text4: {
    left: 481,
  },
  text5: {
    top: 281,
    left: 11,
  },
  text6: {
    top: 211,
  },
  text7: {
    top: 141,
  },
  text8: {
    top: 71,
  },
  text9: {
    top: 0,
    left: 0,
  },
  lineIcon: {
    top: 51,
    height: 230,
  },
  markerIcon: {
    top: 47,
    left: 23,
  },
  markerIcon1: {
    top: 120,
    left: 141,
  },
  markerIcon2: {
    top: 277,
    left: 259,
  },
  markerIcon3: {
    top: 151,
    left: 377,
  },
  markerIcon4: {
    top: 95,
    left: 496,
  },
  lineChart: {
    flex: 1,
    width: "100%",
    height: 307,
  },
});

export default LineChart;
