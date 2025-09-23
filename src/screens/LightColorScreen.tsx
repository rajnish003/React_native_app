// screens/LightControlScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";
import { ColorPicker } from "react-native-color-picker";
import Slider from '@react-native-community/slider';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type LightColorScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface Props {
  navigation: LightColorScreenNavigationProp;
}
const LightControlScreen: React.FC<Props> = ({navigation}) => {
  const [colorEnabled, setColorEnabled] = useState(true);
  const [brightness, setBrightness] = useState(0.75);
  const [temperature, setTemperature] = useState(0.5);
  const [selectedColor, setSelectedColor] = useState<string>("#ffffff");

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Living Room Light</Text>

      {/* Color Picker */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Colors</Text>
          <Switch value={colorEnabled} onValueChange={setColorEnabled} />
        </View>

        {colorEnabled && (
          <ColorPicker
            onColorSelected={(color) => setSelectedColor(color)}
            style={{ height: 200, width: "100%" }}
          />
        )}

        {/* Quick color presets */}
        <View style={styles.colorRow}>
          {["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF", "#0000FF"].map(
            (c, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.colorCircle, { backgroundColor: c }]}
                onPress={() => setSelectedColor(c)}
              />
            )
          )}
        </View>
      </View>

      {/* Brightness */}
     <View style={styles.card}>
  <Text style={styles.sectionTitle}>
    Brightness: {Math.round(brightness * 100)}%
  </Text>
  <Slider
    style={{ width: "100%" }}
    minimumValue={0}
    maximumValue={1}
    value={brightness}
    minimumTrackTintColor="#00AEEF"
    maximumTrackTintColor="#E0E0E0"  // Added for better visibility
    onValueChange={setBrightness}
  />
</View>

      {/* Temperature */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Temperature</Text>
        <Slider
          style={{ width: "100%" }}
          minimumValue={0}
          maximumValue={1}
          value={temperature}
          minimumTrackTintColor="#00AEEF"
          onValueChange={setTemperature}
        />
        <View style={styles.rowBetween}>
          <Text>Warm</Text>
          <Text>Cool</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => setBrightness(1)}
          >
            <Text style={styles.quickButtonText}>Max Brightness</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => setBrightness(0.5)}
          >
            <Text style={styles.quickButtonText}>50% Brightness</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LightControlScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#000",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  colorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  quickButton: {
    flex: 1,
    backgroundColor: "#00AEEF",
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
  },
  quickButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
});
