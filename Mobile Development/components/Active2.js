import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Active2 = () => {
  return <Text style={styles.active}>Active</Text>;
};

const styles = StyleSheet.create({
  active: {
    fontSize: FontSize.subHeading1Medium_size,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_600,
    textAlign: "left",
  },
});

export default Active2;
