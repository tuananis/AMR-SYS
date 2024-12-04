import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Navbar from "../components/Navbar";
import Top2 from "../components/Top2";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Home2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.state}>
        <Text style={[styles.status, styles.statusFlexBox]}>Status</Text>
      </View>
      <Text style={[styles.welcomeBack, styles.statusFlexBox]}>
        Welcome Back!
      </Text>
      <Text style={[styles.hiAnisSabordeen, styles.totalTypo1]}>
        Hi, Anis Sabordeen
      </Text>
      <Navbar
        apps1={require("../assets/apps-11.png")}
        profile={require("../assets/profile2.png")}
        status1={require("../assets/status.png")}
        activity={require("../assets/activity1.png")}
      />
      <View style={[styles.top, styles.topFlexBox]}>
        <Image
          style={styles.menuBarIconLayout}
          contentFit="cover"
          source={require("../assets/menu-bar.png")}
        />
        <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        <View style={[styles.avatar, styles.avatarLayout]}>
          <Image
            style={[styles.image1Icon, styles.yearPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Image
            style={styles.image3Icon}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBar, styles.topPosition]}>
        <View style={[styles.icons, styles.topFlexBox]}>
          <Top2 signal={require("../assets/signal2.png")} textColor="#f7f7f7" />
        </View>
      </View>
      <View style={[styles.date, styles.dateShadowBox]}>
        <View style={styles.dateInnerPosition}>
          <View style={[styles.groupChild, styles.dateInnerPosition]} />
        </View>
      </View>
      <Text style={styles.month}>Month</Text>
      <Pressable
        style={styles.yearPosition}
        onPress={() => navigation.navigate("Home1")}
      >
        <Text style={[styles.year1, styles.year1Typo]}>Year</Text>
      </Pressable>
      <Pressable
        style={styles.yearPosition}
        onPress={() => navigation.navigate("Home3")}
      >
        <Text style={[styles.today1, styles.year1Typo]}>Today</Text>
      </Pressable>
      <View style={[styles.state1, styles.stateShadowBox]}>
        <Text style={[styles.floatSensor, styles.statusFlexBox]}>
          Float Sensor
        </Text>
        <Image
          style={styles.walkIconLayout}
          contentFit="cover"
          source={require("../assets/walk-icon1.png")}
        />
      </View>
      <View style={[styles.state2, styles.stateShadowBox]}>
        <Text style={[styles.floatSensor, styles.statusFlexBox]}>
          Current Sensor
        </Text>
        <Image
          style={styles.walkIconLayout}
          contentFit="cover"
          source={require("../assets/walk-icon4.png")}
        />
        <Text style={[styles.active, styles.textTypo1]}>Active</Text>
        <Text style={[styles.active, styles.textTypo1]}>Active</Text>
      </View>
      <View style={[styles.sleep, styles.sleepShadowBox]}>
        <Image
          style={styles.walkIconLayout}
          contentFit="cover"
          source={require("../assets/walk-icon.png")}
        />
        <Image
          style={[styles.sleepChild, styles.homeChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2313.png")}
        />
        <Image
          style={[styles.sleepChild, styles.homeChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2318.png")}
        />
        <Text style={[styles.kwh, styles.lTypo]}>kWh</Text>
        <Text style={[styles.text, styles.textPosition]}>105</Text>
      </View>
      <View style={[styles.sleep1, styles.sleepShadowBox]}>
        <Image
          style={styles.walkIconLayout}
          contentFit="cover"
          source={require("../assets/walk-icon.png")}
        />
        <Image
          style={[styles.sleepChild, styles.homeChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2313.png")}
        />
        <Image
          style={[styles.sleepChild, styles.homeChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2318.png")}
        />
        <Text style={[styles.l, styles.lTypo]}>L</Text>
        <Text style={[styles.text, styles.textPosition]}>500</Text>
        <Text
          style={[styles.totalWaterUsage, styles.totalTypo]}
        >{`Total Water Usage  By Month `}</Text>
      </View>
      <Text
        style={[styles.totalElectricUsage, styles.totalTypo]}
      >{`Total Electric Usage  By Month `}</Text>
      <View style={[styles.water, styles.walkShadowBox]}>
        <Image
          style={styles.walkIconLayout}
          contentFit="cover"
          source={require("../assets/walk-icon5.png")}
        />
        <Text style={[styles.changeInCost, styles.costTypo]}>
          CHANGE IN COST
        </Text>
        <Image
          style={styles.waterChild}
          contentFit="cover"
          source={require("../assets/group-2276.png")}
        />
        <View style={styles.waterItem} />
        <View style={[styles.waterInner, styles.waterInnerPosition]} />
        <View style={[styles.rectangleView, styles.waterInnerPosition]} />
        <Text style={[styles.text2, styles.text2Typo]}>15.07%</Text>
        <Text style={styles.decreaseInCost}>DECREASE IN COST</Text>
        <View style={[styles.waterParent, styles.waterLayout]}>
          <Text style={[styles.water1, styles.water1Typo]}>Water</Text>
          <Text style={[styles.current, styles.water1Typo]}>Current</Text>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <Image
        style={[styles.homeChild, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-631.png")}
      />
      <Image
        style={[styles.homeItem, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-641.png")}
      />
      <Text style={[styles.july, styles.augTypo]}>July</Text>
      <Text style={[styles.aug, styles.augTypo]}>Aug</Text>
      <Text style={[styles.sep, styles.augTypo]}>Sep</Text>
      <View style={[styles.walk, styles.walkShadowBox]}>
        <Image
          style={styles.circleIcon}
          contentFit="cover"
          source={require("../assets/circle4.png")}
        />
        <View style={[styles.walkIcon5, styles.walkIconLayout]}>
          <View style={[styles.nounWalk18006521, styles.yearPosition]}>
            <Image
              style={styles.image2Icon}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
        </View>
        <Text style={[styles.costCalculated, styles.costTypo]}>
          COST CALCULATED
        </Text>
        <Text style={[styles.total, styles.textPosition]}>Total</Text>
        <Text style={[styles.text3, styles.textTypo]}>3000</Text>
        <Text style={[styles.text4, styles.textTypo]}>4500</Text>
        <Text style={[styles.rs7500, styles.text2Typo]}>RS 7500</Text>
        <View style={[styles.waterGroup, styles.waterLayout]}>
          <Text style={[styles.water1, styles.water1Typo]}>Water</Text>
          <Text style={[styles.current, styles.water1Typo]}>Current</Text>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <Text style={[styles.august, styles.home1Typo]}>{`August `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  totalTypo1: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.robotoRegular,
  },
  topFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  home1Typo: {
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  avatarLayout: {
    height: 40,
    width: 40,
  },
  yearPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  topPosition: {
    width: 390,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
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
  dateInnerPosition: {
    height: 26,
    width: 72,
    marginLeft: -36,
    marginTop: -13,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  year1Typo: {
    width: 81,
    color: Color.colorGray_400,
    marginTop: -234,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  stateShadowBox: {
    height: 82,
    width: 171,
    top: 639,
    backgroundColor: Color.style01,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.09)",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.subHeading1Medium_size,
    color: Color.colorGray_600,
  },
  sleepShadowBox: {
    height: 123,
    borderRadius: Border.br_8xs,
    top: 225,
    width: 171,
    backgroundColor: Color.style01,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.09)",
    position: "absolute",
    overflow: "hidden",
  },
  homeChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lTypo: {
    width: 20,
    fontSize: FontSize.size_3xs,
    top: 83,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textPosition: {
    marginLeft: -13.5,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  totalTypo: {
    height: 9,
    width: 151,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  walkShadowBox: {
    height: 240,
    top: 359,
    borderRadius: Border.br_8xs,
    width: 171,
    backgroundColor: Color.style01,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.09)",
    position: "absolute",
    overflow: "hidden",
  },
  costTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_600,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  waterInnerPosition: {
    backgroundColor: Color.data1,
    width: "18.13%",
    bottom: "30%",
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_600,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  waterLayout: {
    height: 11,
    top: 41,
    width: 24,
    position: "absolute",
  },
  water1Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_9xs,
    left: 10,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 9,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  augTypo: {
    top: 528,
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  walkIconLayout: {
    height: 30,
    width: 30,
    borderRadius: Border.br_9xs,
    top: 6,
    left: 6,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    transform: [
      {
        rotate: "-51.7deg",
      },
    ],
    fontSize: FontSize.size_7xs,
    left: "50%",
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  status: {
    top: 8,
    left: 14,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  state: {
    top: 610,
    width: 379,
    height: 120,
    backgroundColor: Color.style01,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    left: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    position: "absolute",
    overflow: "hidden",
  },
  welcomeBack: {
    top: 126,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_500,
    fontSize: FontSize.size_xl,
    left: 16,
  },
  hiAnisSabordeen: {
    top: 151,
    left: 17,
    textAlign: "left",
    position: "absolute",
  },
  menuBarIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home1: {
    fontSize: FontSize.size_xl,
  },
  image1Icon: {
    marginTop: -20,
    marginLeft: -20,
    borderRadius: Border.br_xl,
    height: 40,
    width: 40,
  },
  image3Icon: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    height: 40,
    width: 40,
    position: "absolute",
  },
  avatar: {
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowRadius: 3,
    elevation: 3,
    borderRadius: Border.br_6xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    overflow: "hidden",
  },
  top: {
    top: 37,
    shadowRadius: 9,
    elevation: 9,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    width: 390,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
    shadowColor: "rgba(0, 0, 0, 0.07)",
    backgroundColor: Color.style01,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  icons: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  statusBar: {
    backgroundColor: Color.colorSlateblue_100,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    overflow: "hidden",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorSlateblue_300,
    elevation: 8,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    overflow: "hidden",
  },
  date: {
    width: 356,
    height: 38,
    top: 173,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    backgroundColor: Color.style01,
    left: 16,
    borderRadius: Border.br_3xs,
    elevation: 8,
    shadowRadius: 8,
    position: "absolute",
  },
  month: {
    marginLeft: -18,
    width: 80,
    color: Color.colorGray_400,
    marginTop: -234,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  year1: {
    marginLeft: 98,
  },
  today1: {
    marginLeft: -128,
  },
  floatSensor: {
    top: 16,
    left: 50,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  state1: {
    left: 16,
  },
  active: {
    marginLeft: -14.5,
    top: 41,
    fontWeight: "700",
    fontSize: FontSize.subHeading1Medium_size,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  state2: {
    left: 205,
  },
  sleepChild: {
    height: "83.74%",
    width: "51.46%",
    top: "36.59%",
    right: "23.98%",
    bottom: "-20.33%",
    left: "24.56%",
  },
  kwh: {
    left: 76,
  },
  text: {
    top: 64,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.subHeading1Medium_size,
    color: Color.colorGray_600,
  },
  sleep: {
    left: 21,
  },
  l: {
    left: 86,
  },
  totalWaterUsage: {
    top: 14,
    left: 20,
  },
  sleep1: {
    left: 201,
  },
  totalElectricUsage: {
    top: 239,
    left: 46,
  },
  changeInCost: {
    marginLeft: -38.5,
    top: 17,
  },
  waterChild: {
    height: "38.75%",
    width: "92.98%",
    top: "31.25%",
    right: "4.09%",
    left: "2.92%",
    bottom: "30%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  waterItem: {
    height: "31.75%",
    top: "38.46%",
    right: "73.1%",
    bottom: "29.79%",
    left: "8.77%",
    backgroundColor: Color.colorDarkslateblue_100,
    width: "18.13%",
    position: "absolute",
  },
  waterInner: {
    height: "26.67%",
    top: "43.33%",
    right: "46.2%",
    left: "35.67%",
  },
  rectangleView: {
    height: "28.75%",
    top: "41.25%",
    right: "18.13%",
    left: "63.74%",
  },
  text2: {
    marginLeft: -30.5,
    top: 191,
  },
  decreaseInCost: {
    top: 213,
    left: 58,
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  water1: {
    top: 0,
  },
  current: {
    top: 6,
    fontWeight: "600",
    fontSize: FontSize.size_9xs,
    left: 10,
  },
  groupItem: {
    top: 4,
    borderColor: Color.colorLightblue,
  },
  groupInner: {
    top: 10,
    borderColor: Color.colorViolet,
  },
  waterParent: {
    left: 136,
  },
  water: {
    left: 21,
  },
  homeChild: {
    height: "10.75%",
    width: "31.92%",
    top: "52.13%",
    right: "58.59%",
    bottom: "37.12%",
    left: "9.49%",
  },
  homeItem: {
    height: "2.87%",
    width: "31.69%",
    top: "55.4%",
    right: "59.08%",
    bottom: "41.73%",
    left: "9.23%",
  },
  july: {
    left: 46,
  },
  aug: {
    left: 93,
  },
  sep: {
    left: 141,
  },
  circleIcon: {
    top: 66,
    width: 130,
    height: 130,
    left: 21,
    position: "absolute",
  },
  image2Icon: {
    top: 3,
    left: 4,
    width: 15,
    height: 18,
    position: "absolute",
  },
  nounWalk18006521: {
    marginTop: -12,
    marginLeft: -12,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  walkIcon5: {
    shadowColor: "rgba(0, 0, 0, 0.11)",
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 6,
    shadowRadius: 6,
    height: 30,
    width: 30,
    borderRadius: Border.br_9xs,
  },
  costCalculated: {
    marginLeft: -42.5,
    top: 18,
  },
  total: {
    top: 111,
    color: Color.colorGray_200,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.robotoRegular,
  },
  text3: {
    marginLeft: 38.5,
    top: 173,
  },
  text4: {
    marginLeft: -47.4,
    top: 162,
  },
  rs7500: {
    marginLeft: -33.5,
    top: 131,
  },
  waterGroup: {
    left: 138,
  },
  august: {
    marginLeft: -23.5,
    top: 203,
    left: "50%",
    color: Color.colorGray_600,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  walk: {
    left: 201,
  },
  home: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Home2;
