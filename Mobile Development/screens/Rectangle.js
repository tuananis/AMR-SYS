import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#d9d9d9",
    flex: 1,
    width: "100%",
    height: 38,
  },
});

export default Rectangle;
