const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home3 from "./screens/Home3";
import Activities from "./screens/Activities";
import PersonalInfo from "./screens/PersonalInfo";
import Aug from "./screens/Aug";
import Sleep1 from "./screens/Sleep1";
import LineChart from "./screens/LineChart";
import PersonalInfo1 from "./screens/PersonalInfo1";
import Rectangle from "./screens/Rectangle";
import July from "./screens/July";
import Sleep from "./screens/Sleep";
import WalkIcon from "./screens/WalkIcon";
import Heart1 from "./screens/Heart1";
import Water from "./screens/Water";
import Vector2 from "./screens/Vector2";
import TotalElectricUsageByDay from "./screens/TotalElectricUsageByDay";
import Calories from "./screens/Calories";
import LightPieChart from "./screens/LightPieChart";
import Sep from "./screens/Sep";
import DSwitch from "./screens/DSwitch";
import DSwitch1 from "./screens/DSwitch1";
import Stats from "./screens/Stats";
import Walk from "./screens/Walk";
import Home1 from "./screens/Home1";
import Vector1 from "./screens/Vector1";
import Vector from "./screens/Vector";
import Aug1 from "./screens/Aug1";
import Walk1 from "./screens/Walk1";
import NounCalories1166857 from "./screens/NounCalories1166857";
import DSwitch2 from "./screens/DSwitch2";
import Home2 from "./screens/Home2";
import Water1 from "./screens/Water1";
import Sep1 from "./screens/Sep1";
import Heart from "./screens/Heart";
import Active2 from "./components/Active2";
import Active from "./components/Active";
import Active3 from "./components/Active3";
import Active1 from "./components/Active1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home3"
              component={Home3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Activities"
              component={Activities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo"
              component={PersonalInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Aug"
              component={Aug}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sleep1"
              component={Sleep1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LineChart"
              component={LineChart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo1"
              component={PersonalInfo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="July"
              component={July}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sleep"
              component={Sleep}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalkIcon"
              component={WalkIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Heart1"
              component={Heart1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Water"
              component={Water}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vector2"
              component={Vector2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TotalElectricUsageByDay"
              component={TotalElectricUsageByDay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calories"
              component={Calories}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LightPieChart"
              component={LightPieChart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sep"
              component={Sep}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DSwitch"
              component={DSwitch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DSwitch1"
              component={DSwitch1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Stats"
              component={Stats}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Walk"
              component={Walk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vector1"
              component={Vector1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vector"
              component={Vector}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Aug1"
              component={Aug1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Walk1"
              component={Walk1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NounCalories1166857"
              component={NounCalories1166857}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DSwitch2"
              component={DSwitch2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Water1"
              component={Water1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sep1"
              component={Sep1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Heart"
              component={Heart}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
