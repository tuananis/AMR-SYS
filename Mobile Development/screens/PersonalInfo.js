import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Navbar1 from "../components/Navbar1";
import StatesDefaultHierarchyPriamry from "../components/StatesDefaultHierarchyPriamry";
import Weight from "../components/Weight";
import Top1 from "../components/Top1";
import Top2 from "../components/Top2";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const PersonalInfo = () => {
  return (
    <View style={styles.personalInfo}>
      <Navbar1 profile={require("../assets/profile.png")} />
      <StatesDefaultHierarchyPriamry
        statesDefaultHierarchyPriaPosition="absolute"
        statesDefaultHierarchyPriaBorderRadius={5}
        statesDefaultHierarchyPriaBackgroundColor="#5040a3"
        statesDefaultHierarchyPriaTop={583}
        statesDefaultHierarchyPriaLeft={17}
        statesDefaultHierarchyPriaWidth={357}
        button="Next"
      />
      <Weight
        weight="Weight"
        prop="105"
        prop1="104"
        prop2="103"
        prop3="106"
        prop4="107"
        pounds="Pounds"
        kg="Kg"
        onPosition="absolute"
        onTop="0"
        onLeft="45"
        frameViewBackgroundColor="#6dcb8f"
        frameViewBorderColor="#69c886"
      />
      <Weight
        onMarginTop={-107}
        weight="Height"
        propMarginLeft={-159}
        propWidth={319}
        prop="97”"
        propMarginLeft1={-9.5}
        prop1="96"
        propMarginLeft2={-83.5}
        prop2="95"
        propMarginLeft3={-159.5}
        prop3="98"
        propMarginLeft4={68.5}
        prop4="99"
        propMarginLeft5={145.5}
        propMarginLeft6={85}
        pounds="Meter"
        kg="Feet"
        propMarginLeft7={22.5}
        onPosition="absolute"
        onTop="0"
        onLeft="36"
        frameViewBackgroundColor="#6dcb8f"
        frameViewBorderColor="#69c886"
      />
      <View style={styles.age}>
        <Text style={styles.age1}>Age</Text>
        <View style={[styles.age2, styles.age2Layout]}>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={styles.text}>20</Text>
            <Text style={[styles.text1, styles.textPosition]}>19</Text>
            <Text style={[styles.text2, styles.textPosition]}>18</Text>
            <Text style={[styles.text3, styles.textPosition]}>21</Text>
            <Text style={[styles.text4, styles.textPosition]}>22</Text>
          </View>
          <Image
            style={styles.ageChild}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
        </View>
      </View>
      <View style={[styles.status, styles.statusShadowBox]}>
        <View style={[styles.maleWrapper, styles.statusShadowBox]}>
          <Text style={styles.male}>Male</Text>
        </View>
        <Text style={[styles.female, styles.otherPosition]}>Female</Text>
        <Text style={[styles.other, styles.otherPosition]}>Other</Text>
      </View>
      <Top1 yourActivities="Personal Info" />
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <Top2 signal={require("../assets/signal.png")} textColor="#f7f7f7" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  age2Layout: {
    backgroundColor: Color.style01,
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 358,
  },
  parentPosition: {
    top: "50%",
    left: "50%",
  },
  textPosition: {
    color: Color.colorSilver,
    fontSize: FontSize.size_xs,
    marginTop: -4.5,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  statusShadowBox: {
    elevation: 9,
    shadowRadius: 9,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    position: "absolute",
    overflow: "hidden",
  },
  otherPosition: {
    color: Color.colorGray_200,
    marginTop: -5,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  age1: {
    marginTop: -46,
    marginLeft: -178,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -7,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_xs,
    marginTop: -4.5,
    textAlign: "left",
    color: Color.colorGray_600,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text1: {
    marginLeft: -83,
  },
  text2: {
    marginLeft: -159,
  },
  text3: {
    marginLeft: 69,
  },
  text4: {
    marginLeft: 145,
  },
  parent: {
    marginTop: 15.5,
    width: 318,
    height: 9,
    marginLeft: -159,
    left: "50%",
    position: "absolute",
  },
  ageChild: {
    top: 10,
    left: 13,
    width: 332,
    height: 32,
    position: "absolute",
  },
  age2: {
    top: 25,
    left: 0,
    shadowRadius: 8,
    elevation: 8,
    height: 67,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.style01,
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
    overflow: "hidden",
  },
  age: {
    marginTop: -241,
    marginLeft: -179,
    height: 92,
    width: 358,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  male: {
    marginLeft: -14.5,
    color: Color.colorSlateblue_100,
    marginTop: -5,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  maleWrapper: {
    marginTop: -14,
    marginLeft: -42,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 85,
    height: 28,
    left: "50%",
    top: "50%",
  },
  female: {
    marginLeft: -147,
  },
  other: {
    marginLeft: 105,
  },
  status: {
    top: 115,
    left: 16,
    height: 42,
    backgroundColor: Color.style01,
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 358,
    elevation: 9,
    shadowRadius: 9,
  },
  icons: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  statusBar: {
    marginLeft: -195,
    top: 0,
    backgroundColor: Color.colorSlateblue_100,
    width: 390,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  personalInfo: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PersonalInfo;
