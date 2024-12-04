import React, { useMemo } from "react";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SwitchBody1 = ({
  switchBodyPosition,
  switchBodyHeight,
  switchBodyTop,
  switchBodyRight,
  switchBodyBottom,
  switchBodyLeft,
  switchBodyBackgroundColor,
}) => {
  const switchBodyStyle = useMemo(() => {
    return {
      ...getStyleValue("position", switchBodyPosition),
      ...getStyleValue("height", switchBodyHeight),
      ...getStyleValue("top", switchBodyTop),
      ...getStyleValue("right", switchBodyRight),
      ...getStyleValue("bottom", switchBodyBottom),
      ...getStyleValue("left", switchBodyLeft),
    };
  }, [
    switchBodyPosition,
    switchBodyHeight,
    switchBodyTop,
    switchBodyRight,
    switchBodyBottom,
    switchBodyLeft,
  ]);

  const switchBody1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", switchBodyBackgroundColor),
    };
  }, [switchBodyBackgroundColor]);

  return (
    <View style={[styles.property13dProperty2on, switchBodyStyle]}>
      <View style={styles.switchPosition}>
        <View
          style={[styles.switchBody1, styles.switchPosition, switchBody1Style]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  switchBody1: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.switchGreen,
  },
  property13dProperty2on: {
    width: 200,
    height: 90,
  },
});

export default SwitchBody1;
