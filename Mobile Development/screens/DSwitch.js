import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import SwitchBody1 from "../components/SwitchBody1";

const DSwitch = () => {
  return (
    <View style={styles.dSwitch}>
      <SwitchBody1
        switchBodyPosition="absolute"
        switchBodyHeight={90}
        switchBodyTop={0}
        switchBodyRight="unset"
        switchBodyBottom="unset"
        switchBodyLeft={0}
        switchBodyBackgroundColor="#efefef"
      />
      <Image
        style={styles.switchIcon}
        contentFit="cover"
        source={require("../assets/switch1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 70,
    height: 70,
  },
  dSwitch: {
    flex: 1,
    width: "100%",
    height: 90,
  },
});

export default DSwitch;
