import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import WelcomeScreen from "../screens/WelcomeScreen";
import WelcomeScreen2 from "../screens/WelcomeScreen2";
import WelcomeScreen3 from "../screens/WelcomeScreen3";
import SetupScreen from "../screens/SetupScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OtpScreen from "../screens/OtpScreen";
// import ScanDevice from "../screens/ScanDevice";
// import HomeScreen from "../screens/HomeScreen"
import BottomTabs from "./BottomTabs"

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        {/* 👇 keep Welcome screen here */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Welcome2" component={WelcomeScreen2} />
        <Stack.Screen name="welcome3" component={WelcomeScreen3} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        {/* <Stack.Screen name="ScanDevice" component={ScanDevice} /> */}
          {/* Main App (after login) */}
        <Stack.Screen name="MainTabs" component={BottomTabs} />

        {/* If needed later */}
        {/* <Stack.Screen
          name="Setup"
          component={SetupScreen}
          options={{ title: "Device Setup" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
