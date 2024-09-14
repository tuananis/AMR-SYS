import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "solid",
    borderColor: Color.colorViolet,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 20,
    transform: [
      {
        rotate: "-2.9deg",
      },
    ],
  },
});

export default Vector;
