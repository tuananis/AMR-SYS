import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector1 = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "solid",
    borderColor: Color.colorLightblue,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 40,
    transform: [
      {
        rotate: "28.2deg",
      },
    ],
  },
});

export default Vector1;
