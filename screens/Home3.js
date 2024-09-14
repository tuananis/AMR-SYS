import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Navbar from "../components/Navbar";
import Top2 from "../components/Top2";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Home3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.state}>
        <Text style={[styles.status, styles.kwhTypo2]}>Status</Text>
      </View>
      <Text style={styles.welcomeBack}>Welcome Back!</Text>
      <Text style={[styles.hiAnisSabordeen, styles.kwhTypo2]}>
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
        <Text style={styles.home1}>Home</Text>
        <View style={[styles.avatar, styles.iconLayout]}>
          <Image
            style={[styles.image1Icon, styles.monthPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Image
            style={[styles.image3Icon, styles.statusBarPosition]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.icons, styles.topFlexBox]}>
          <Top2 signal={require("../assets/signal2.png")} textColor="#f7f7f7" />
        </View>
      </View>
      <View style={[styles.date, styles.dateShadowBox]}>
        <View style={[styles.dateInner, styles.dateInnerPosition]}>
          <View style={[styles.groupChild, styles.dateInnerPosition]} />
        </View>
      </View>
      <Pressable
        style={styles.monthPosition}
        onPress={() => navigation.navigate("Home2")}
      >
        <Text style={styles.month1}>Month</Text>
      </Pressable>
      <Text style={[styles.year, styles.yearPosition]}>Year</Text>
      <Text style={[styles.today, styles.yearPosition]}>Today</Text>
      <View style={[styles.state1, styles.stateShadowBox]}>
        <Text style={[styles.floatSensor, styles.kwhTypo2]}>Float Sensor</Text>
        <Image
          style={[styles.walkIcon, styles.walkIconLayout]}
          contentFit="cover"
          source={require("../assets/walk-icon1.png")}
        />
        <Text style={[styles.active, styles.activeTypo]}>Active</Text>
      </View>
      <View style={[styles.state2, styles.stateShadowBox]}>
        <Text style={[styles.floatSensor, styles.kwhTypo2]}>
          Current Sensor
        </Text>
        <Image
          style={[styles.walkIcon, styles.walkIconLayout]}
          contentFit="cover"
          source={require("../assets/walk-icon4.png")}
        />
        <Text style={[styles.active1, styles.activeTypo]}>Active</Text>
      </View>
      <View style={[styles.heart, styles.heartShadowBox]}>
        <Text style={[styles.totalElectricUsage, styles.electricTypo]}>
          TOTAL ELECTRIC USAGE  BY DAY
        </Text>
        <View style={[styles.heartChild, styles.heartChildLayout1]} />
        <View style={[styles.heartItem, styles.heartChildPosition3]} />
        <View style={[styles.heartInner, styles.heartPosition]} />
        <View style={[styles.rectangleView, styles.heartChild7Position]} />
        <View style={[styles.heartChild1, styles.heartChildPosition2]} />
        <View style={[styles.heartChild2, styles.heartChildPosition1]} />
        <View style={[styles.heartChild3, styles.heartChildPosition]} />
        <Text style={[styles.kwh, styles.kwhTypo2]}>1.4 kWh</Text>
        <Text style={[styles.kwh1, styles.kwhTypo2]}>0.9 kWh</Text>
        <Text style={[styles.kwh2, styles.kwhTypo1]}>0.8 kWh</Text>
        <Text style={[styles.kwh3, styles.kwhTypo2]}>0.4 kWh</Text>
        <Text style={[styles.kwh4, styles.kwhPosition]}>0.4 kWh</Text>
        <Text style={[styles.kwh5, styles.kwhTypo]}>0.3 kWh</Text>
        <Text style={[styles.kwh6, styles.kwh6Position]}>0.7 kWh</Text>
        <Text style={[styles.monday, styles.kwhTypo2]}>Monday</Text>
        <Text style={[styles.tuesday, styles.kwhTypo2]}>Tuesday</Text>
        <Text style={styles.wednesday}>{`Wednesday `}</Text>
        <Text
          style={[styles.thursday, styles.kwh6Position]}
        >{`Thursday `}</Text>
        <Text style={[styles.friday, styles.kwhTypo2]}>Friday</Text>
        <Text style={[styles.saturday, styles.kwhTypo2]}>{`Saturday `}</Text>
        <Text style={[styles.sunday, styles.kwhPosition]}>Sunday</Text>
        <Image
          style={[styles.walkIcon, styles.walkIconLayout]}
          contentFit="cover"
          source={require("../assets/walk-icon4.png")}
        />
      </View>
      <View style={[styles.heart1, styles.heartShadowBox]}>
        <Text style={[styles.totalElectricUsage, styles.electricTypo]}>
          TOTAL WATER USAGE  BY DAY
        </Text>
        <View style={[styles.heartChild4, styles.heartChildLayout]} />
        <View style={[styles.heartChild5, styles.heartChildPosition3]} />
        <View style={[styles.heartChild6, styles.heartPosition]} />
        <View style={[styles.heartChild7, styles.heartChild7Position]} />
        <View style={[styles.heartChild8, styles.heartChildLayout]} />
        <View style={[styles.heartChild9, styles.heartChildPosition1]} />
        <View style={[styles.heartChild10, styles.heartChildPosition]} />
        <Text style={[styles.kwh, styles.kwhTypo2]}>1.4 kWh</Text>
        <Text style={[styles.kwh1, styles.kwhTypo2]}>0.9 kWh</Text>
        <Text style={[styles.kwh9, styles.kwhTypo1]}>0.8 kWh</Text>
        <Text style={[styles.kwh3, styles.kwhTypo2]}>0.4 kWh</Text>
        <Text style={[styles.kwh11, styles.kwhPosition]}>0.4 kWh</Text>
        <Text style={[styles.kwh12, styles.kwhTypo]}>0.3 kWh</Text>
        <Text style={[styles.kwh6, styles.kwh6Position]}>0.7 kWh</Text>
        <Text style={[styles.monday, styles.kwhTypo2]}>Monday</Text>
        <Text style={[styles.tuesday, styles.kwhTypo2]}>Tuesday</Text>
        <Text style={styles.wednesday}>{`Wednesday `}</Text>
        <Text
          style={[styles.thursday, styles.kwh6Position]}
        >{`Thursday `}</Text>
        <Text style={[styles.friday, styles.kwhTypo2]}>Friday</Text>
        <Text style={[styles.saturday, styles.kwhTypo2]}>{`Saturday `}</Text>
        <Text style={[styles.sunday, styles.kwhPosition]}>Sunday</Text>
        <Image
          style={[styles.walkIcon3, styles.walkIconLayout]}
          contentFit="cover"
          source={require("../assets/walk-icon1.png")}
        />
      </View>
      <View style={[styles.sleep, styles.sleepShadowBox]}>
        <View style={styles.walkIconShadowBox}>
          <View style={[styles.nounWalk18006521, styles.monthPosition]}>
            <Image
              style={styles.image2Icon}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
        </View>
        <Text
          style={[styles.electricCostPredicted, styles.electricTypo]}
        >{`ELECTRIC  COST PREDICTED `}</Text>
        <Text style={[styles.rs4500, styles.activeTypo]}>RS 4500</Text>
        <Text style={styles.september}>September</Text>
      </View>
      <View style={[styles.sleep1, styles.sleepShadowBox]}>
        <View style={styles.walkIconShadowBox}>
          <View style={[styles.nounWalk18006521, styles.monthPosition]}>
            <Image
              style={styles.image2Icon}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
        </View>
        <Text
          style={[styles.electricCostPredicted, styles.electricTypo]}
        >{`WATER  COST PREDICTED `}</Text>
        <Text style={[styles.rs4500, styles.activeTypo]}>RS 3000</Text>
        <Text style={styles.september}>September</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kwhTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  topFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 40,
    width: 40,
  },
  monthPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
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
    marginTop: -13,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  yearPosition: {
    width: 81,
    color: Color.colorGray_400,
    marginTop: -234,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
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
  walkIconLayout: {
    height: 30,
    width: 30,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  activeTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.subHeading1Medium_size,
    color: Color.colorGray_600,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  heartShadowBox: {
    height: 264,
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
  electricTypo: {
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_600,
    left: "50%",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  heartChildLayout1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    left: "80.12%",
    right: "-16.37%",
    width: "36.26%",
    height: "8.33%",
    position: "absolute",
  },
  heartChildPosition3: {
    left: "77.19%",
    right: "-10.53%",
    width: "33.33%",
  },
  heartPosition: {
    bottom: "45.83%",
    top: "45.83%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    height: "8.33%",
    position: "absolute",
  },
  heartChild7Position: {
    bottom: "1.89%",
    top: "89.77%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    height: "8.33%",
    position: "absolute",
  },
  heartChildPosition2: {
    bottom: "34.47%",
    top: "57.2%",
  },
  heartChildPosition1: {
    bottom: "23.11%",
    top: "68.56%",
    left: "77.19%",
    right: "-10.53%",
    width: "33.33%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    height: "8.33%",
    position: "absolute",
  },
  heartChildPosition: {
    bottom: "11.74%",
    top: "79.92%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    height: "8.33%",
    position: "absolute",
  },
  kwhTypo1: {
    top: 130,
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  kwhPosition: {
    top: 244,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  kwhTypo: {
    top: 220,
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  kwh6Position: {
    top: 158,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  heartChildLayout: {
    backgroundColor: Color.colorCadetblue_100,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    left: "80.12%",
    right: "-16.37%",
    width: "36.26%",
    height: "8.33%",
    position: "absolute",
  },
  sleepShadowBox: {
    height: 92,
    width: 169,
    top: 503,
    borderRadius: Border.br_8xs,
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
  status: {
    left: 14,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    top: 8,
  },
  state: {
    top: 610,
    width: 379,
    height: 120,
    backgroundColor: Color.style01,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    left: 6,
    position: "absolute",
    overflow: "hidden",
  },
  welcomeBack: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_500,
    fontSize: FontSize.size_xl,
    left: 16,
    top: 126,
    textAlign: "left",
    position: "absolute",
  },
  hiAnisSabordeen: {
    top: 151,
    left: 17,
    color: Color.colorGray_200,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  menuBarIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home1: {
    color: Color.colorGray_600,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  image1Icon: {
    marginTop: -20,
    marginLeft: -20,
    borderRadius: Border.br_xl,
    height: 40,
    width: 40,
  },
  image3Icon: {
    left: 0,
    borderRadius: Border.br_81xl,
    height: 40,
    width: 40,
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
    left: "50%",
    marginLeft: -195,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    backgroundColor: Color.style01,
    position: "absolute",
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
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    backgroundColor: Color.colorSlateblue_100,
    width: 390,
    left: "50%",
    marginLeft: -195,
    overflow: "hidden",
  },
  groupChild: {
    marginLeft: -36,
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
  dateInner: {
    marginLeft: -150,
  },
  date: {
    top: 173,
    width: 356,
    height: 38,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    backgroundColor: Color.style01,
    position: "absolute",
    left: 16,
    borderRadius: Border.br_3xs,
    elevation: 8,
    shadowRadius: 8,
  },
  month1: {
    marginLeft: -18,
    width: 80,
    color: Color.colorGray_400,
    marginTop: -234,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  year: {
    marginLeft: 98,
  },
  today: {
    marginLeft: -128,
  },
  floatSensor: {
    top: 16,
    left: 50,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  walkIcon: {
    top: 6,
    left: 6,
  },
  active: {
    marginLeft: -30.5,
    top: 41,
    fontWeight: "700",
    fontSize: FontSize.subHeading1Medium_size,
  },
  state1: {
    left: 16,
  },
  active1: {
    marginLeft: -23.5,
    top: 41,
    fontWeight: "700",
    fontSize: FontSize.subHeading1Medium_size,
  },
  state2: {
    left: 205,
  },
  totalElectricUsage: {
    marginLeft: -65.5,
    top: 14,
    width: 166,
  },
  heartChild: {
    backgroundColor: Color.colorSlateblue_200,
    bottom: "68.56%",
    top: "23.11%",
  },
  heartItem: {
    backgroundColor: "rgba(85, 70, 175, 0.96)",
    bottom: "57.2%",
    top: "34.47%",
    left: "77.19%",
    right: "-10.53%",
    width: "33.33%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    height: "8.33%",
    position: "absolute",
  },
  heartInner: {
    width: "23.39%",
    right: "9.36%",
    left: "67.25%",
    backgroundColor: Color.colorSlateblue_500,
  },
  rectangleView: {
    backgroundColor: "rgba(85, 70, 175, 0.91)",
    left: "77.19%",
    right: "-10.53%",
    width: "33.33%",
  },
  heartChild1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    left: "80.12%",
    right: "-16.37%",
    width: "36.26%",
    height: "8.33%",
    position: "absolute",
    backgroundColor: Color.colorSlateblue_100,
  },
  heartChild2: {
    backgroundColor: "rgba(85, 70, 175, 0.86)",
  },
  heartChild3: {
    width: "8.77%",
    right: "38.6%",
    left: "52.63%",
    backgroundColor: Color.colorSlateblue_800,
  },
  kwh: {
    top: 69,
    fontSize: FontSize.size_7xs,
    left: 142,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  kwh1: {
    top: 100,
    fontSize: FontSize.size_7xs,
    left: 142,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  kwh2: {
    left: 123,
  },
  kwh3: {
    top: 189,
    left: 137,
    fontSize: FontSize.size_7xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  kwh4: {
    left: 138,
    fontSize: FontSize.size_7xs,
  },
  kwh5: {
    left: 97,
  },
  kwh6: {
    fontSize: FontSize.size_7xs,
    left: 142,
  },
  monday: {
    top: 67,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 6,
  },
  tuesday: {
    top: 96,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 6,
  },
  wednesday: {
    fontSize: FontSize.size_2xs,
    top: 126,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    left: 6,
    position: "absolute",
  },
  thursday: {
    fontSize: FontSize.size_2xs,
    left: 6,
  },
  friday: {
    top: 186,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 6,
  },
  saturday: {
    top: 216,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 6,
  },
  sunday: {
    fontSize: FontSize.size_2xs,
    left: 6,
  },
  heart: {
    left: 20,
  },
  heartChild4: {
    bottom: "68.56%",
    top: "23.11%",
  },
  heartChild5: {
    backgroundColor: "rgba(61, 173, 188, 0.96)",
    bottom: "57.2%",
    top: "34.47%",
    left: "77.19%",
    right: "-10.53%",
    width: "33.33%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorHotpink,
    borderStyle: "solid",
    height: "8.33%",
    position: "absolute",
  },
  heartChild6: {
    backgroundColor: "rgba(61, 173, 188, 0.7)",
    left: "77.19%",
    right: "-10.53%",
    width: "33.33%",
  },
  heartChild7: {
    width: "22.81%",
    right: "10.53%",
    left: "66.67%",
    backgroundColor: "rgba(61, 173, 188, 0.91)",
  },
  heartChild8: {
    bottom: "34.47%",
    top: "57.2%",
  },
  heartChild9: {
    backgroundColor: "rgba(61, 173, 188, 0.86)",
  },
  heartChild10: {
    width: "16.96%",
    right: "22.22%",
    left: "60.82%",
    backgroundColor: "rgba(61, 173, 188, 0.4)",
  },
  kwh9: {
    left: 142,
  },
  kwh11: {
    left: 121,
    fontSize: FontSize.size_7xs,
  },
  kwh12: {
    left: 110,
  },
  walkIcon3: {
    left: 9,
    top: 8,
  },
  heart1: {
    left: 203,
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
  walkIconShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    left: 3,
    top: 4,
    height: 30,
    width: 30,
    borderRadius: Border.br_9xs,
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
  electricCostPredicted: {
    marginLeft: -34.5,
    top: 10,
  },
  rs4500: {
    marginLeft: -28.5,
    top: 38,
  },
  september: {
    marginLeft: -22.5,
    top: 65,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_600,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  sleep: {
    left: 22,
  },
  sleep1: {
    left: 205,
  },
  home: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Home3;
