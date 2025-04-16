import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import Top2 from "../components/Top2";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const Stats = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.stats, styles.iconLayout]}>
      <View style={[styles.sleep, styles.sleepShadowBox]}>
        <View style={[styles.frameParent, styles.statusBarSpaceBlock]}>
          <View style={styles.walkIconParent}>
            <Image
              style={styles.walkIcon}
              contentFit="cover"
              source={require("../assets/walk-icon.png")}
            />
            <Text style={[styles.sleep1, styles.textFlexBox]}>Sleep</Text>
          </View>
          <View style={styles.groupFlexBox}>
            <Text style={styles.hours}>Hours</Text>
            <Text style={[styles.text, styles.textFlexBox]}>4-8</Text>
          </View>
        </View>
        <View style={styles.days}>
          <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
          <Text style={[styles.tue, styles.monTypo]}>Tue</Text>
          <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
          <Text style={[styles.thu, styles.monTypo]}>Thu</Text>
          <Text style={[styles.fri, styles.monTypo]}>Fri</Text>
          <Text style={[styles.sat, styles.monTypo]}>Sat</Text>
          <Text style={[styles.sun, styles.monTypo]}>Sun</Text>
        </View>
        <Image
          style={[styles.sleepChild, styles.sleepChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-173.png")}
        />
        <Image
          style={[styles.sleepItem, styles.sleepItemPosition]}
          contentFit="cover"
          source={require("../assets/vector-192.png")}
        />
        <Image
          style={[styles.sleepInner, styles.innerPosition]}
          contentFit="cover"
          source={require("../assets/vector-181.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.sleepChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-202.png")}
        />
        <Image
          style={[styles.groupIcon, styles.sleepItemPosition]}
          contentFit="cover"
          source={require("../assets/vector-192.png")}
        />
        <Image
          style={[styles.sleepChild1, styles.sleepChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-22.png")}
        />
        <Image
          style={[styles.sleepChild2, styles.sleepChildLayout]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <View style={[styles.perviousWeekParent, styles.perviousShadowBox]}>
          <Text style={[styles.perviousWeek, styles.maxTypo]}>
            Pervious Week
          </Text>
          <View style={[styles.hoursGroup, styles.groupFlexBox]}>
            <Text style={styles.hours}>Hours</Text>
            <Text style={[styles.text, styles.textFlexBox]}>4-8</Text>
          </View>
        </View>
      </View>
      <Navbar
        apps1={require("../assets/apps-1.png")}
        profile={require("../assets/profile.png")}
        status1={require("../assets/status1.png")}
        activity={require("../assets/activity1.png")}
        onFramePressablePress={() => navigation.navigate("PersonalInfo")}
      />
      <View style={[styles.heartBeat, styles.sleepShadowBox]}>
        <View style={[styles.frameParent, styles.statusBarSpaceBlock]}>
          <View style={styles.walkIconParent}>
            <Image
              style={styles.walkIcon}
              contentFit="cover"
              source={require("../assets/walk-icon2.png")}
            />
            <Text style={[styles.sleep1, styles.textFlexBox]}>Heart Beat</Text>
          </View>
          <View style={styles.groupFlexBox}>
            <Text style={styles.hours}>SPM</Text>
            <Text style={[styles.text, styles.textFlexBox]}>50-125</Text>
          </View>
        </View>
        <Text style={[styles.max, styles.maxTypo]}>Max</Text>
        <Text style={[styles.min, styles.maxTypo]}>Min</Text>
        <Text style={[styles.mon1, styles.mon1Typo]}>Mon</Text>
        <Text style={[styles.tue1, styles.mon1Typo]}>Tue</Text>
        <Text style={[styles.wed1, styles.mon1Typo]}>Wed</Text>
        <Text style={[styles.thu1, styles.mon1Typo]}>Thu</Text>
        <Text style={[styles.fri1, styles.mon1Typo]}>Fri</Text>
        <Text style={[styles.sat1, styles.mon1Typo]}>Sat</Text>
        <Text style={[styles.sun1, styles.mon1Typo]}>Sun</Text>
        <Image
          style={[styles.heartBeatChild, styles.sleepChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-174.png")}
        />
        <Image
          style={[styles.heartBeatItem, styles.sleepChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-193.png")}
        />
        <Image
          style={[styles.heartBeatInner, styles.innerPosition]}
          contentFit="cover"
          source={require("../assets/vector-182.png")}
        />
        <Image
          style={[styles.heartBeatChild1, styles.sleepChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-203.png")}
        />
        <Image
          style={[styles.heartBeatChild2, styles.heartChildLayout]}
          contentFit="cover"
          source={require("../assets/group-6.png")}
        />
        <Image
          style={[styles.heartBeatChild3, styles.sleepItemPosition]}
          contentFit="cover"
          source={require("../assets/vector-221.png")}
        />
        <Image
          style={[styles.heartBeatChild4, styles.heartChildLayout]}
          contentFit="cover"
          source={require("../assets/group-51.png")}
        />
        <View style={[styles.perviousWeekGroup, styles.perviousShadowBox]}>
          <Text style={[styles.perviousWeek, styles.maxTypo]}>
            Pervious Week
          </Text>
          <View style={[styles.spmGroup, styles.spmGroupPosition]}>
            <Text style={styles.hours}>SPM</Text>
            <Text style={[styles.text, styles.textFlexBox]}>50-125</Text>
          </View>
        </View>
      </View>
      <View style={[styles.top, styles.topPosition]}>
        <Pressable
          style={styles.arrowLeft1}
          onPress={() => navigation.navigate("Home2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowleft-11.png")}
          />
        </Pressable>
        <Text style={[styles.statsForWeek, styles.textFlexBox]}>
          Stats For Week
        </Text>
        <Pressable
          style={styles.bell11}
          onPress={() => navigation.navigate("Activities")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bell-1-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.topPosition]}>
        <View style={[styles.icons, styles.topFlexBox]}>
          <Top2 signal={require("../assets/signal.png")} textColor="#f7f7f7" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  sleepShadowBox: {
    height: 345,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    left: "50%",
    marginLeft: -179,
    width: 358,
    backgroundColor: Color.style01,
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    overflow: "hidden",
  },
  statusBarSpaceBlock: {
    paddingVertical: 0,
    top: 0,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorGray_600,
  },
  monTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    position: "absolute",
  },
  sleepChildLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sleepItemPosition: {
    top: 124,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  innerPosition: {
    left: 125,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  perviousShadowBox: {
    height: 32,
    width: 338,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_7xs,
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginLeft: -169,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  maxTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  groupFlexBox: {
    gap: Gap.gap_sm,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  mon1Typo: {
    top: 280,
    color: Color.colorGray_200,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  heartChildLayout: {
    width: 10,
    position: "absolute",
  },
  spmGroupPosition: {
    marginTop: -5,
    top: "50%",
  },
  topPosition: {
    width: 390,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
  },
  topFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  walkIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  sleep1: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_600,
    fontSize: FontSize.size_smi,
  },
  walkIconParent: {
    gap: Gap.gap_md,
    alignItems: "center",
    flexDirection: "row",
  },
  hours: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_smi,
  },
  frameParent: {
    height: 46,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    width: 358,
    top: 0,
    position: "absolute",
  },
  mon: {
    left: 0,
  },
  tue: {
    left: 58,
  },
  wed: {
    left: 107,
  },
  thu: {
    left: 160,
  },
  fri: {
    left: 214,
  },
  sat: {
    left: 267,
  },
  sun: {
    left: 323,
  },
  days: {
    top: 269,
    width: 342,
    height: 8,
    left: 7,
    position: "absolute",
  },
  sleepChild: {
    top: 173,
    height: 75,
    left: 74,
    maxWidth: "100%",
  },
  sleepItem: {
    left: 177,
    height: 124,
  },
  sleepInner: {
    height: 148,
    top: 100,
  },
  vectorIcon: {
    top: 195,
    left: 228,
    height: 53,
  },
  groupIcon: {
    left: 283,
    height: 124,
  },
  sleepChild1: {
    top: 160,
    left: 340,
    height: 88,
  },
  sleepChild2: {
    left: 18,
    height: 121,
    top: 127,
  },
  perviousWeek: {
    left: 14,
    top: "50%",
    marginTop: -5,
  },
  hoursGroup: {
    marginTop: -4.5,
    left: 268,
    top: "50%",
    position: "absolute",
  },
  perviousWeekParent: {
    top: 292,
  },
  sleep: {
    top: 469,
  },
  max: {
    top: 55,
    left: 272,
  },
  min: {
    top: 261,
    left: 7,
  },
  mon1: {
    left: 7,
  },
  tue1: {
    left: 65,
  },
  wed1: {
    left: 114,
  },
  thu1: {
    left: 167,
  },
  fri1: {
    left: 221,
  },
  sat1: {
    left: 274,
  },
  sun1: {
    left: 330,
  },
  heartBeatChild: {
    height: 153,
    top: 71,
    left: 74,
    maxWidth: "100%",
  },
  heartBeatItem: {
    top: 114,
    left: 176,
    height: 73,
  },
  heartBeatInner: {
    top: 84,
    height: 127,
  },
  heartBeatChild1: {
    left: 227,
    height: 111,
    top: 100,
  },
  heartBeatChild2: {
    left: 278,
    top: 71,
    height: 124,
  },
  heartBeatChild3: {
    left: 339,
    height: 63,
  },
  heartBeatChild4: {
    left: 13,
    height: 126,
    top: 127,
  },
  spmGroup: {
    left: 255,
    top: "50%",
    gap: Gap.gap_sm,
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  perviousWeekGroup: {
    top: 302,
  },
  heartBeat: {
    top: 112,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    width: 24,
    height: 24,
  },
  statsForWeek: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_600,
  },
  bell11: {
    width: 31,
    height: 30,
  },
  top: {
    top: 37,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowRadius: 9,
    elevation: 9,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.style01,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 390,
    marginLeft: -195,
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
  stats: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Stats;
