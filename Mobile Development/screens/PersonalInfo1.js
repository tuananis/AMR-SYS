import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Navbar1 from "../components/Navbar1";
import Top1 from "../components/Top1";
import Top2 from "../components/Top2";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const PersonalInfo1 = () => {
  return (
    <View style={styles.personalInfo}>
      <Navbar1 profile={require("../assets/profile1.png")} />
      <View style={[styles.calories, styles.heartShadowBox]}>
        <Image
          style={styles.walkIcon}
          contentFit="cover"
          source={require("../assets/walk-icon1.png")}
        />
        <Text style={[styles.calories1, styles.textFlexBox]}>Calories</Text>
        <Text style={[styles.kcal, styles.kcalTypo]}>Kcal</Text>
        <Text style={[styles.text, styles.textFlexBox]}>1293</Text>
      </View>
      <View style={[styles.heart, styles.heartShadowBox]}>
        <Image
          style={styles.walkIcon}
          contentFit="cover"
          source={require("../assets/walk-icon2.png")}
        />
        <Text style={[styles.heart1, styles.textFlexBox]}>Heart</Text>
        <Text style={[styles.kcal, styles.kcalTypo]}>8PM</Text>
        <Text style={[styles.text, styles.textFlexBox]}>125</Text>
        <Image
          style={[styles.heartChild, styles.heartChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-8.png")}
        />
        <Image
          style={[styles.heartItem, styles.heartPosition]}
          contentFit="cover"
          source={require("../assets/vector-91.png")}
        />
        <Image
          style={[styles.heartInner, styles.heartChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-111.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.heartChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-131.png")}
        />
        <Image
          style={[styles.heartChild1, styles.heartChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-151.png")}
        />
        <Image
          style={[styles.heartChild2, styles.heartChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-172.png")}
        />
        <Image
          style={[styles.heartChild3, styles.heartChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-191.png")}
        />
        <Image
          style={[styles.heartChild4, styles.heartChildPosition1]}
          contentFit="cover"
          source={require("../assets/vector-101.png")}
        />
        <Image
          style={[styles.heartChild5, styles.heartChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-121.png")}
        />
        <Image
          style={[styles.heartChild6, styles.heartChildPosition2]}
          contentFit="cover"
          source={require("../assets/vector-141.png")}
        />
        <Image
          style={[styles.heartChild7, styles.heartChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-161.png")}
        />
        <Image
          style={[styles.heartChild8, styles.heartPosition]}
          contentFit="cover"
          source={require("../assets/vector-91.png")}
        />
        <Image
          style={[styles.heartChild9, styles.heartChildPosition1]}
          contentFit="cover"
          source={require("../assets/vector-201.png")}
        />
      </View>
      <View style={[styles.walk, styles.walkShadowBox]}>
        <Image
          style={styles.circleIcon}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={styles.walkIcon}
          contentFit="cover"
          source={require("../assets/walk-icon3.png")}
        />
        <Text style={[styles.walk1, styles.textFlexBox]}>Walk</Text>
        <Text style={[styles.steps, styles.kcalTypo]}>Steps</Text>
        <Text style={[styles.text2, styles.textFlexBox]}>3500</Text>
      </View>
      <View style={[styles.sleep, styles.walkShadowBox]}>
        <Image
          style={styles.walkIcon}
          contentFit="cover"
          source={require("../assets/walk-icon.png")}
        />
        <Text style={[styles.sleep1, styles.kgPosition]}>Sleep</Text>
        <Text style={[styles.kcal, styles.kcalTypo]}>Hours</Text>
        <Text style={[styles.text, styles.textFlexBox]}>08:45</Text>
      </View>
      <Text style={styles.today}>Today</Text>
      <View style={styles.info}>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <Text style={styles.choudaryAoun}>Choudary Aoun</Text>
        <Text style={styles.choudaryaoun121gmailcom}>
          choudaryaoun121@gmail.com
        </Text>
        <Image
          style={styles.infoChild}
          contentFit="cover"
          source={require("../assets/vector-33.png")}
        />
        <View style={styles.totalCalcutaions}>
          <View style={styles.parentShadowBox}>
            <Text style={[styles.weight, styles.ageTypo]}>Weight</Text>
            <Text style={[styles.kg, styles.textTypo]}>80kg</Text>
          </View>
          <View style={styles.parentShadowBox}>
            <Text style={[styles.height, styles.ageTypo]}>Height</Text>
            <Text style={[styles.text4, styles.agePosition]}>97”</Text>
          </View>
          <View style={styles.parentShadowBox}>
            <Text style={[styles.age, styles.agePosition]}>Age</Text>
            <Text style={[styles.text5, styles.textTypo]}>20</Text>
          </View>
        </View>
        <Image
          style={styles.menuDotsVertical1Icon}
          contentFit="cover"
          source={require("../assets/menudotsvertical-1.png")}
        />
      </View>
      <Top1 yourActivities="Profile" />
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <Top2 signal={require("../assets/signal1.png")} textColor="#f7f7f7" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heartShadowBox: {
    width: 171,
    backgroundColor: Color.style01,
    borderRadius: Border.br_8xs,
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  kcalTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  heartChildPosition2: {
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  heartPosition: {
    height: 50,
    marginTop: -25,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  heartChildPosition1: {
    marginTop: -17,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  heartChildPosition: {
    height: 58,
    marginTop: -29,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  walkShadowBox: {
    top: 314,
    width: 171,
    backgroundColor: Color.style01,
    borderRadius: Border.br_8xs,
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
  kgPosition: {
    marginLeft: -15.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  ageTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    marginTop: -12.5,
    fontFamily: FontFamily.robotoRegular,
  },
  textTypo: {
    marginTop: 4.5,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_700,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  agePosition: {
    marginLeft: -10.5,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  walkIcon: {
    top: 6,
    left: 6,
    width: 30,
    height: 30,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  calories1: {
    marginLeft: -23.5,
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    top: 17,
    left: "50%",
  },
  kcal: {
    bottom: 32,
    left: 7,
  },
  text: {
    bottom: 7,
    fontSize: FontSize.subHeading1Medium_size,
    left: 7,
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
  },
  calories: {
    top: 540,
    height: 123,
    left: 203,
  },
  heart1: {
    marginLeft: -16.5,
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    top: 17,
    left: "50%",
  },
  heartChild: {
    marginTop: -19,
    left: 12,
    height: 37,
  },
  heartItem: {
    left: 24,
  },
  heartInner: {
    marginTop: -34,
    left: 48,
    height: 67,
  },
  vectorIcon: {
    marginTop: -23,
    left: 71,
    height: 46,
  },
  heartChild1: {
    marginTop: -40,
    left: 96,
    height: 80,
  },
  heartChild2: {
    marginTop: -45,
    left: 121,
    height: 89,
  },
  heartChild3: {
    marginTop: -21,
    left: 144,
    height: 42,
  },
  heartChild4: {
    left: 36,
    height: 34,
  },
  heartChild5: {
    left: 60,
  },
  heartChild6: {
    marginTop: -35,
    left: 83,
    height: 69,
  },
  heartChild7: {
    left: 108,
  },
  heartChild8: {
    left: 132,
  },
  heartChild9: {
    left: 157,
    height: 33,
  },
  heart: {
    top: 455,
    height: 208,
    left: 16,
  },
  circleIcon: {
    top: 66,
    left: 21,
    width: 130,
    height: 130,
    position: "absolute",
  },
  walk1: {
    marginLeft: -14.5,
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    top: 17,
    left: "50%",
  },
  steps: {
    marginLeft: -13.5,
    top: 111,
    left: "50%",
  },
  text2: {
    marginLeft: -22.5,
    top: 132,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
  },
  walk: {
    height: 208,
    left: 203,
  },
  sleep1: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    top: 17,
  },
  sleep: {
    left: 16,
    height: 123,
  },
  today: {
    marginTop: -143,
    fontSize: 15,
    color: Color.colorGray_700,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    marginLeft: -177,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  avatarIcon: {
    top: 7,
    left: 11,
    borderRadius: Border.br_6xl,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  choudaryAoun: {
    fontSize: FontSize.size_sm,
    left: 63,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray_600,
    top: 17,
    position: "absolute",
  },
  choudaryaoun121gmailcom: {
    top: 33,
    color: Color.colorSilver,
    left: 63,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  infoChild: {
    marginLeft: -157,
    top: 57,
    maxHeight: "100%",
    width: 315,
    left: "50%",
    position: "absolute",
  },
  weight: {
    marginLeft: -18.5,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  kg: {
    marginLeft: -15.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  parentShadowBox: {
    height: 43,
    width: 101,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    elevation: 15,
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    overflow: "hidden",
  },
  height: {
    marginLeft: -17.5,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  text4: {
    marginTop: 4.5,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_700,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  age: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    marginTop: -12.5,
    fontFamily: FontFamily.robotoRegular,
  },
  text5: {
    marginLeft: -7.5,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  totalCalcutaions: {
    top: 67,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_lg,
    flexDirection: "row",
    marginLeft: -177,
    left: "50%",
    position: "absolute",
  },
  menuDotsVertical1Icon: {
    left: 327,
    width: 24,
    height: 24,
    top: 17,
    position: "absolute",
    overflow: "hidden",
  },
  info: {
    marginLeft: -179,
    top: 116,
    width: 358,
    height: 124,
    elevation: 15,
    shadowRadius: 15,
    left: "50%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.style01,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.09)",
    position: "absolute",
    overflow: "hidden",
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

export default PersonalInfo1;
