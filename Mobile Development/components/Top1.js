import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Top1 = ({ yourActivities }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.top}>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Home2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowleft-1.png")}
        />
      </Pressable>
      <Text style={styles.yourActivities}>{yourActivities}</Text>
      <Image
        style={styles.bell11}
        contentFit="cover"
        source={require("../assets/bell-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    width: 24,
    height: 24,
  },
  yourActivities: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_600,
    textAlign: "left",
  },
  bell11: {
    width: 31,
    height: 30,
    overflow: "hidden",
  },
  top: {
    position: "absolute",
    marginLeft: -195,
    top: 37,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    backgroundColor: Color.style01,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Top1;
