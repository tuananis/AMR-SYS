import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Aug = () => {
  return <Text style={styles.aug}>Aug</Text>;
};

const styles = StyleSheet.create({
  aug: {
    fontSize: FontSize.size_7xs,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default Aug;
