import React, { useMemo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Top2 = ({ signal, textColor }) => {
  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={styles.top}>
      <Image style={styles.signalIcon} contentFit="cover" source={signal} />
      <Text style={[styles.text, textStyle]}>9:30</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  text: {
    top: "5.88%",
    left: "0%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    color: "#424040",
    textAlign: "left",
    position: "absolute",
  },
  top: {
    width: 340,
    height: 17,
  },
});

export default Top2;
