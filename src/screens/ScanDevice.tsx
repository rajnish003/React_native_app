import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // npm install react-native-vector-icons
import * as Progress from "react-native-progress"; // npm install react-native-progress
import { SafeAreaView } from "react-native-safe-area-context";

const ScanDevice:React.FC = ({ navigation }: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev + 0.02; // progress increases
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scanning for Devices</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Auto-discovering nearby devices</Text>

      {/* Icon + Progress */}
      <View style={styles.scanBox}>
        <Icon name="search" size={80} color="#00AEEF" />
        <Text style={styles.scanText}>Scanning Network</Text>
        <Text style={styles.scanDesc}>
          Looking for smart devices in your area...
        </Text>

        {/* Progress bar */}
        <Progress.Bar
          progress={progress}
          width={250}
          color="#00AEEF"
          unfilledColor="#e0e0e0"
          borderWidth={0}
          height={8}
          style={{ marginTop: 20 }}
        />
        <Text style={styles.percent}>{Math.round(progress * 100)}% Complete</Text>
      </View>

      {/* Tips */}
      <View style={styles.tips}>
        <Text style={styles.tipTitle}>Search Tips</Text>
        <Text style={styles.tip}>• Make sure devices are powered on and in pairing mode</Text>
        <Text style={styles.tip}>• Ensure devices are connected to your WiFi Network</Text>
        <Text style={styles.tip}>• Keep your phone close to the device</Text>
        <Text style={styles.tip}>• This process may take up to 30 seconds</Text>
      </View>

      {/* Footer */}
      <TouchableOpacity>
        <Text style={styles.footerText}>
          Not able to find your device? <Text style={styles.scanNow}>Scan Now</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScanDevice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 4,
  },
  scanBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scanText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
  },
  scanDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  percent: {
    marginTop: 8,
    fontSize: 13,
    color: "#333",
  },
  tips: {
    marginBottom: 20,
  },
  tipTitle: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 6,
  },
  tip: {
    fontSize: 13,
    color: "#444",
    marginBottom: 4,
  },
  footerText: {
    fontSize: 13,
    color: "#444",
    textAlign: "center",
    marginBottom: 15,
  },
  scanNow: {
    color: "#00AEEF",
    textDecorationLine: "underline",
  },
});
