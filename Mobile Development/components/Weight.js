import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import On from "./On";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Weight = ({
  onMarginTop,
  weight,
  propMarginLeft,
  propWidth,
  prop,
  propMarginLeft1,
  prop1,
  propMarginLeft2,
  prop2,
  propMarginLeft3,
  prop3,
  propMarginLeft4,
  prop4,
  propMarginLeft5,
  propMarginLeft6,
  pounds,
  kg,
  propMarginLeft7,
  onPosition,
  onTop,
  onLeft,
  frameViewBackgroundColor,
  frameViewBorderColor,
}) => {
  const weightStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", onMarginTop),
    };
  }, [onMarginTop]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propMarginLeft, propWidth]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft2),
    };
  }, [propMarginLeft2]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft3),
    };
  }, [propMarginLeft3]);

  const text4Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft4),
    };
  }, [propMarginLeft4]);

  const text5Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft5),
    };
  }, [propMarginLeft5]);

  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft6),
    };
  }, [propMarginLeft6]);

  const kgStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft7),
    };
  }, [propMarginLeft7]);

  return (
    <View style={[styles.weight, styles.ageLayout, weightStyle]}>
      <Text style={styles.weight1}>{weight}</Text>
      <View style={[styles.age, styles.ageLayout]}>
        <View style={[styles.parent, styles.weightPosition, groupViewStyle]}>
          <Text style={[styles.text, styles.textPosition, text1Style]}>
            {prop}
          </Text>
          <Text style={[styles.text1, styles.textPosition, text2Style]}>
            {prop1}
          </Text>
          <Text style={[styles.text2, styles.textPosition, text3Style]}>
            {prop2}
          </Text>
          <Text style={[styles.text3, styles.textPosition, text4Style]}>
            {prop3}
          </Text>
          <Text style={[styles.text4, styles.textPosition, text5Style]}>
            {prop4}
          </Text>
        </View>
        <Image
          style={styles.ageChild}
          contentFit="cover"
          source={require("../assets/group-11.png")}
        />
      </View>
      <View style={[styles.poundsParent, groupView1Style]}>
        <Text style={[styles.pounds, styles.kgPosition]}>{pounds}</Text>
        <Text style={[styles.kg, styles.kgPosition, kgStyle]}>{kg}</Text>
        <On
          onPosition={onPosition}
          onTop={onTop}
          onLeft={onLeft}
          frameViewBackgroundColor={frameViewBackgroundColor}
          frameViewBorderColor={frameViewBorderColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ageLayout: {
    width: 358,
    position: "absolute",
  },
  weightPosition: {
    left: "50%",
    top: "50%",
  },
  textPosition: {
    fontSize: FontSize.size_xs,
    marginTop: -4.5,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  kgPosition: {
    marginTop: -4.6,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  weight1: {
    marginLeft: -178,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -46,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -13,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_600,
  },
  text1: {
    marginLeft: -88,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    marginTop: -4.5,
  },
  text2: {
    marginLeft: -163,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    marginTop: -4.5,
  },
  text3: {
    marginLeft: 65,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    marginTop: -4.5,
  },
  text4: {
    marginLeft: 142,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    marginTop: -4.5,
  },
  parent: {
    marginTop: 15.5,
    marginLeft: -162,
    width: 326,
    height: 9,
    position: "absolute",
  },
  ageChild: {
    top: 10,
    left: 13,
    width: 332,
    height: 32,
    position: "absolute",
  },
  age: {
    top: 25,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.style01,
    height: 67,
    overflow: "hidden",
  },
  pounds: {
    marginLeft: -46.5,
    color: Color.colorSilver,
  },
  kg: {
    marginLeft: 31.5,
    color: Color.colorGray_600,
  },
  poundsParent: {
    marginLeft: 86,
    width: 93,
    height: 17,
    marginTop: -46,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  weight: {
    marginTop: 27,
    marginLeft: -179,
    height: 92,
    left: "50%",
    top: "50%",
  },
});

export default Weight;
