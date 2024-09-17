import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TotalElectricUsageByDay = () => {
  return (
    <Text
      style={styles.totalElectricUsage}
    >{`Total Electric Usage  By Day `}</Text>
  );
};

const styles = StyleSheet.create({
  totalElectricUsage: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 151,
    height: 9,
  },
});

export default TotalElectricUsageByDay;
