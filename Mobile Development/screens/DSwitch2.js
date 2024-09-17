import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import SwitchBody1 from "../components/SwitchBody1";
import { Border } from "../GlobalStyles";

const DSwitch2 = () => {
  return (
    <View style={styles.dSwitch}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <SwitchBody1
          switchBodyPosition="absolute"
          switchBodyHeight="100%"
          switchBodyTop="0%"
          switchBodyRight="0%"
          switchBodyBottom="0%"
          switchBodyLeft="0%"
          switchBodyBackgroundColor="#efefef"
        />
        <Image
          style={[styles.switchIcon, styles.switchIconLayout]}
          contentFit="cover"
          source={require("../assets/switch.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <SwitchBody1
          switchBodyPosition="absolute"
          switchBodyHeight="100%"
          switchBodyTop="0%"
          switchBodyRight="0%"
          switchBodyBottom="0%"
          switchBodyLeft="0%"
          switchBodyBackgroundColor="#5546af"
        />
        <Image
          style={[styles.switchIcon1, styles.switchIconLayout]}
          contentFit="cover"
          source={require("../assets/switch.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 40,
    width: 80,
    left: 20,
    position: "absolute",
  },
  switchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "11.25%",
    top: "11%",
    width: "35%",
    height: "77.75%",
    position: "absolute",
    overflow: "hidden",
  },
  switchIcon: {
    right: "60%",
    left: "5%",
  },
  property1default: {
    top: 20,
  },
  switchIcon1: {
    right: "7.5%",
    left: "57.5%",
  },
  property1variant2: {
    top: 80,
  },
  dSwitch: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 140,
    overflow: "hidden",
  },
});

export default DSwitch2;
