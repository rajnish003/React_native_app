import React, { useCallback , useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useFocusEffect } from '@react-navigation/native';

// Screens
import HomeScreen from "../screens/HomeScreen";

type NavProp = NativeStackNavigationProp<RootStackParamList>;
type Props = { navigation: NavProp };

const AnalyticsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>📊 Analytics</Text>
  </View>
);

const SecurityScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    navigation.navigate("Setting");
  }, [navigation]);

  return null; // Don't render UI here
};

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      // Navigate to 'Setting' screen whenever this tab gains focus
      navigation.navigate('Setting');
    }, [navigation])
  );

  return null; // Nothing to render
};

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
                tintColor: focused ? "#0288D1" : "#555",
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
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent the default tab navigation behavior
            e.preventDefault();
            // Navigate to the 'Setting' screen in the stack
            navigation.navigate('Setting');
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
