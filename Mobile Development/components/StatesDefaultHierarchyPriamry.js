import React, { useMemo } from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatesDefaultHierarchyPriamry = ({
  statesDefaultHierarchyPriaPosition,
  statesDefaultHierarchyPriaBorderRadius,
  statesDefaultHierarchyPriaBackgroundColor,
  statesDefaultHierarchyPriaTop,
  statesDefaultHierarchyPriaLeft,
  statesDefaultHierarchyPriaWidth,
  button,
}) => {
  const statesDefaultHierarchyPriaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statesDefaultHierarchyPriaPosition),
      ...getStyleValue("borderRadius", statesDefaultHierarchyPriaBorderRadius),
      ...getStyleValue(
        "backgroundColor",
        statesDefaultHierarchyPriaBackgroundColor
      ),
      ...getStyleValue("top", statesDefaultHierarchyPriaTop),
      ...getStyleValue("left", statesDefaultHierarchyPriaLeft),
      ...getStyleValue("width", statesDefaultHierarchyPriaWidth),
    };
  }, [
    statesDefaultHierarchyPriaPosition,
    statesDefaultHierarchyPriaBorderRadius,
    statesDefaultHierarchyPriaBackgroundColor,
    statesDefaultHierarchyPriaTop,
    statesDefaultHierarchyPriaLeft,
    statesDefaultHierarchyPriaWidth,
  ]);

  return (
    <View
      style={[
        styles.statesdefaultHierarchypria,
        statesDefaultHierarchyPriaStyle,
      ]}
    >
      <Text style={styles.button}>{button}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.subHeading1Medium_size,
    fontWeight: "500",
    fontFamily: FontFamily.subHeading1Medium,
    color: Color.style01,
    textAlign: "center",
  },
  statesdefaultHierarchypria: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.orange1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default StatesDefaultHierarchyPriamry;
