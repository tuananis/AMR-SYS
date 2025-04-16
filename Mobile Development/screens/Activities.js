import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import Top1 from "../components/Top1";
import Top2 from "../components/Top2";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Activities = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activities}>
      <View style={[styles.steps, styles.dateLayout]}>
        <Text style={styles.steps1}>Steps</Text>
        <Text style={styles.text}>2,314</Text>
        <View style={[styles.totalCalcutaions, styles.statusBarPosition]}>
          <View style={styles.parentShadowBox}>
            <Text style={[styles.distance, styles.distanceTypo]}>Distance</Text>
            <Text style={styles.text1}>3,314</Text>
          </View>
          <View style={styles.parentShadowBox}>
            <Text style={[styles.calories, styles.distanceTypo]}>Calories</Text>
            <Text style={styles.text1}>1,754</Text>
          </View>
          <View style={styles.parentShadowBox}>
            <Text style={styles.points}>Points</Text>
            <Text style={styles.text1}>2,632</Text>
          </View>
        </View>
        <Text style={[styles.text4, styles.textPosition]}>00:00</Text>
        <Text style={[styles.text5, styles.textPosition]}>12:00</Text>
        <Text style={[styles.text6, styles.textPosition]}>23:59</Text>
        <Image
          style={[styles.stepsChild, styles.stepsChildLayout2]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={[styles.stepsItem, styles.stepsChildLayout3]}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
        <Image
          style={[styles.stepsInner, styles.stepsChildLayout3]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.stepsChildLayout2]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={styles.stepsChild1}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
        <Image
          style={[styles.stepsChild2, styles.stepsChildLayout3]}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
        <Image
          style={[styles.stepsChild3, styles.stepsChildLayout3]}
          contentFit="cover"
          source={require("../assets/vector-14.png")}
        />
        <Image
          style={[styles.stepsChild4, styles.stepsChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Image
          style={[styles.stepsChild5, styles.stepsChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-20.png")}
        />
        <Image
          style={[styles.stepsChild6, styles.stepsChildPosition3]}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
        <Image
          style={[styles.stepsChild7, styles.stepsChildPosition3]}
          contentFit="cover"
          source={require("../assets/vector-19.png")}
        />
        <Image
          style={[styles.stepsChild8, styles.stepsChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-7.png")}
        />
        <Image
          style={[styles.stepsChild9, styles.stepsChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-18.png")}
        />
        <Image
          style={[styles.stepsChild10, styles.stepsChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-9.png")}
        />
        <Image
          style={[styles.stepsChild11, styles.stepsChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-17.png")}
        />
        <Image
          style={[styles.stepsChild12, styles.stepsChildPosition1]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.stepsChild13, styles.stepsChildPosition1]}
          contentFit="cover"
          source={require("../assets/vector-16.png")}
        />
        <Image
          style={[styles.stepsChild14, styles.stepsChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-13.png")}
        />
        <Image
          style={[styles.stepsChild15, styles.stepsChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-15.png")}
        />
      </View>
      <Navbar
        apps1={require("../assets/apps-1.png")}
        profile={require("../assets/profile.png")}
        status1={require("../assets/status.png")}
        activity={require("../assets/activity.png")}
        onFramePressablePress={() => navigation.navigate("Stats")}
      />
      <View style={[styles.date, styles.dateShadowBox]}>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={[styles.text7, styles.textTypo]}>07</Text>
          <Text style={[styles.text8, styles.textTypo]}>08</Text>
          <Text style={[styles.text9, styles.textTypo]}>09</Text>
          <Text style={[styles.text10, styles.textTypo]}>11</Text>
          <Text style={[styles.text11, styles.textTypo]}>12</Text>
          <Text style={[styles.text12, styles.textTypo]}>13</Text>
          <View style={[styles.today10FebWrapper, styles.parentPosition]}>
            <Text style={[styles.today10Feb, styles.textTypo]}>
              Today, 10 Feb
            </Text>
          </View>
        </View>
      </View>
      <Top1 yourActivities="Your Activities" />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.icons}>
          <Top2 signal={require("../assets/signal.png")} textColor="#f7f7f7" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateLayout: {
    width: 358,
    backgroundColor: Color.style01,
    position: "absolute",
  },
  statusBarPosition: {
    position: "absolute",
    left: "50%",
  },
  distanceTypo: {
    fontSize: FontSize.size_xs,
    top: 16,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 524,
    color: Color.colorGray_700,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  stepsChildLayout2: {
    height: 309,
    maxWidth: "100%",
    top: 191,
    position: "absolute",
    overflow: "hidden",
  },
  stepsChildLayout3: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stepsChildLayout1: {
    height: 74,
    left: 46,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stepsChildPosition3: {
    left: 100,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stepsChildPosition2: {
    left: 152,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stepsChildLayout: {
    height: 81,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stepsChildPosition1: {
    left: 262,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stepsChildPosition: {
    left: 314,
    height: 96,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dateShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    overflow: "hidden",
  },
  parentPosition: {
    height: 26,
    top: "50%",
    marginTop: -13,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_2xs,
    marginTop: -4,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  steps1: {
    marginLeft: -16,
    top: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -50,
    top: 50,
    fontSize: 40,
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  distance: {
    marginLeft: -23.5,
  },
  text1: {
    top: 33,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_700,
    marginLeft: -17.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  parentShadowBox: {
    height: 57,
    width: 101,
    backgroundColor: Color.colorWhitesmoke_100,
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    overflow: "hidden",
  },
  calories: {
    marginLeft: -21.5,
  },
  points: {
    marginLeft: -17.5,
    fontSize: FontSize.size_xs,
    top: 16,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  totalCalcutaions: {
    marginLeft: -177,
    top: 102,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_lg,
    flexDirection: "row",
    left: "50%",
  },
  text4: {
    marginLeft: -167,
  },
  text5: {
    marginLeft: -15,
  },
  text6: {
    marginLeft: 142,
  },
  stepsChild: {
    left: 18,
  },
  stepsItem: {
    top: 379,
    height: 121,
    left: 74,
  },
  stepsInner: {
    top: 268,
    left: 124,
    height: 109,
  },
  vectorIcon: {
    left: 180,
  },
  stepsChild1: {
    left: 235,
    height: 96,
    top: 404,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stepsChild2: {
    top: 224,
    left: 289,
    height: 228,
  },
  stepsChild3: {
    top: 377,
    left: 343,
    height: 123,
  },
  stepsChild4: {
    top: 279,
  },
  stepsChild5: {
    top: 191,
  },
  stepsChild6: {
    height: 107,
    top: 191,
  },
  stepsChild7: {
    top: 312,
    height: 155,
  },
  stepsChild8: {
    top: 332,
    height: 127,
  },
  stepsChild9: {
    top: 240,
    height: 78,
  },
  stepsChild10: {
    top: 357,
    left: 208,
  },
  stepsChild11: {
    top: 257,
    left: 207,
  },
  stepsChild12: {
    height: 122,
    top: 191,
  },
  stepsChild13: {
    top: 330,
    height: 135,
  },
  stepsChild14: {
    top: 404,
    left: 314,
  },
  stepsChild15: {
    top: 291,
  },
  steps: {
    marginLeft: -179,
    top: 185,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowRadius: 6,
    elevation: 6,
    borderRadius: Border.br_8xs,
    height: 566,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: Color.style01,
    left: "50%",
    overflow: "hidden",
  },
  text7: {
    left: 0,
  },
  text8: {
    left: 37,
  },
  text9: {
    left: 74,
  },
  text10: {
    left: 228,
  },
  text11: {
    left: 265,
  },
  text12: {
    left: 302,
  },
  today10Feb: {
    marginLeft: -33.5,
    left: "50%",
  },
  today10FebWrapper: {
    marginLeft: -46.5,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: "#efe8e8",
    width: 93,
    elevation: 8,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    overflow: "hidden",
    borderRadius: Border.br_xs,
    height: 26,
    top: "50%",
    marginTop: -13,
    left: "50%",
  },
  parent: {
    left: 22,
    width: 315,
  },
  date: {
    top: 104,
    left: 1,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    borderRadius: Border.br_10xs,
    height: 50,
    width: 358,
    backgroundColor: Color.style01,
    position: "absolute",
  },
  icons: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  statusBar: {
    marginLeft: -195,
    top: 0,
    backgroundColor: Color.colorSlateblue_100,
    width: 390,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    left: "50%",
    overflow: "hidden",
  },
  activities: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Activities;
