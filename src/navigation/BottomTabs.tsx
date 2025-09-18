import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import { View, Text ,Image } from "react-native";

const AnalyticsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>📊 Analytics</Text>
  </View>
);
const SecurityScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>🔒 Security</Text>
  </View>
);
const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>⚙️ Settings</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
   <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, size }) => {
      let iconSource;

      if (route.name === "Home") {
        iconSource = require("../../assets/icons/home.png");
      } else if (route.name === "Analytics") {
        iconSource = require("../../assets/icons/analysis.png");
      } else if (route.name === "Security") {
        iconSource = require("../../assets/icons/security.png");
      } else if (route.name === "Settings") {
        iconSource = require("../../assets/icons/settings.png");
      }

      return (
        <Image
          source={iconSource}
          style={{
            width: size,
            height: size,
            tintColor: focused ? "#0288D1" : "#555", // ✅ tint image like icon
          }}
          resizeMode="contain"
        />
      );
    },
    tabBarActiveTintColor: "#0288D1",
    tabBarInactiveTintColor: "#555",
  })}
>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Security" component={SecurityScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
