import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const WalkIcon = () => {
  return (
    <View style={styles.walkIcon}>
      <Image
        style={styles.dropIcon}
        contentFit="cover"
        source={require("../assets/drop.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropIcon: {
    position: "absolute",
    marginTop: -7,
    marginLeft: -6,
    top: "50%",
    left: "50%",
    width: 13,
    height: 15,
  },
  walkIcon: {
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 30,
    overflow: "hidden",
  },
});

export default WalkIcon;
