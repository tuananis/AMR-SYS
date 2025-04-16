import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const July = () => {
  return <Text style={styles.july}>July</Text>;
};

const styles = StyleSheet.create({
  july: {
    fontSize: FontSize.size_7xs,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default July;
