import React, { useMemo } from "react";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const On = ({
  onPosition,
  onTop,
  onLeft,
  frameViewBackgroundColor,
  frameViewBorderColor,
}) => {
  const onStyle = useMemo(() => {
    return {
      ...getStyleValue("position", onPosition),
      ...getStyleValue("top", onTop),
      ...getStyleValue("left", onLeft),
    };
  }, [onPosition, onTop, onLeft]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frameViewBackgroundColor),
    };
  }, [frameViewBackgroundColor]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", frameViewBorderColor),
    };
  }, [frameViewBorderColor]);

  return (
    <View style={[styles.on, onStyle]}>
      <View style={[styles.onChild, styles.onItemPosition, frameViewStyle]} />
      <View style={[styles.onItem, styles.onItemPosition, frameView1Style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  onItemPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  onChild: {
    height: "75.58%",
    width: "83.79%",
    top: "13.95%",
    right: "16.21%",
    bottom: "10.47%",
    left: "0%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.orange2,
  },
  onItem: {
    height: "100%",
    width: "59.31%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "40.69%",
    borderRadius: Border.br_lgi,
    backgroundColor: Color.style01,
    borderStyle: "solid",
    borderColor: "#f9b343",
    borderWidth: 1.5,
  },
  on: {
    width: 29,
    height: 17,
  },
});

export default On;
