import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Sep = () => {
  return <Text style={styles.sep}>Sep</Text>;
};

const styles = StyleSheet.create({
  sep: {
    fontSize: FontSize.size_7xs,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default Sep;
