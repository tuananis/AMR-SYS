import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Navbar = ({
  apps1,
  profile,
  status1,
  activity,
  onFramePressablePress,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={[styles.navbar1, styles.navbarLayout]}>
        <Image
          style={[styles.navbarChild, styles.navbarLayout]}
          contentFit="cover"
          source={require("../assets/vector-171.png")}
        />
        <View style={[styles.home, styles.homeLayout]}>
          <Image
            style={[styles.apps1Icon, styles.goPosition]}
            contentFit="cover"
            source={apps1}
          />
        </View>
        <Image
          style={[styles.profileIcon, styles.iconLayout]}
          contentFit="cover"
          source={profile}
        />
        <Image
          style={[styles.statusIcon, styles.homeLayout]}
          contentFit="cover"
          source={status1}
        />
        <Image
          style={[styles.activityIcon, styles.iconLayout]}
          contentFit="cover"
          source={activity}
        />
      </View>
      <Pressable
        style={[styles.goWrapper, styles.goPosition]}
        onPress={onFramePressablePress}
      >
        <Text style={[styles.go, styles.goPosition]}>GO</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarLayout: {
    height: 72,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homeLayout: {
    width: 78,
    overflow: "hidden",
    top: 0,
    height: 72,
    position: "absolute",
  },
  goPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 77,
    overflow: "hidden",
    top: 0,
    height: 72,
    position: "absolute",
  },
  navbarChild: {
    top: 0,
  },
  apps1Icon: {
    marginTop: -12,
    marginLeft: -12,
    width: 24,
    height: 24,
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  home: {
    left: 16,
    overflow: "hidden",
  },
  profileIcon: {
    left: 297,
  },
  statusIcon: {
    left: 203,
    overflow: "hidden",
  },
  activityIcon: {
    left: 110,
  },
  navbar1: {
    top: 34,
  },
  go: {
    marginTop: -8,
    marginLeft: -16,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.style01,
    textAlign: "left",
    top: "50%",
    left: "50%",
  },
  goWrapper: {
    marginLeft: -34,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: -1,
      height: -1,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorSlateblue_100,
    width: 70,
    height: 70,
    overflow: "hidden",
    top: 0,
  },
  navbar: {
    top: 738,
    height: 106,
    width: 390,
    left: 0,
    position: "absolute",
  },
});

export default Navbar;
