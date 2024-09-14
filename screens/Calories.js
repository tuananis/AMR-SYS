import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Calories = () => {
  return (
    <View style={styles.calories}>
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  walkIcon: {
    position: "absolute",
    top: 6,
    left: 6,
    borderRadius: Border.br_9xs,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  calories: {
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
    height: 123,
    overflow: "hidden",
  },
});

export default Calories;
