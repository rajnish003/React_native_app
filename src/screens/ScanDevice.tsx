// screens/ScanDevice.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Alert
} from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { Bar } from "react-native-progress"; //  Correct import
// import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { PermissionsAndroid, Platform } from "react-native";

async function requestCameraPermission() {
  if (Platform.OS === "android") {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission",
        message: "App needs access to your camera to scan QR codes",
        buttonPositive: "OK",
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true; // iOS permissions handled automatically
}



type ScanDeviceNavProp = NativeStackNavigationProp<
  RootStackParamList>;

type Props = { navigation: ScanDeviceNavProp };

const ScanDevice: React.FC<Props> = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [hasPermission, setHasPermission]= useState<boolean>(false);

// call the requestCameraPermission function
useEffect(()=>{
(async()=>{
  const granted = await requestCameraPermission();
  setHasPermission(granted);
})();
}, []);

const gotoScanner= async()=>{
     if(hasPermission){
      navigation.navigate("ScanQR");
     }else{
      Alert.alert("Permission dennied ! Camera access is required !");
     }
}


  // Simulate scanning
  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev + 0.02;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Navigate when scan complete
  // useEffect(() => {
  //   if (progress >= 1) {
  //     navigation.navigate("Home");
  //   }
  // }, [progress, navigation]);

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scanning for Devices</Text>
        <TouchableOpacity 
         style={styles.closeButton} 
        onPress={() => navigation.goBack()}>
          <Image
          style={styles.closeIcon}
          source={require('../../assets/icons/closeIcon.png')}
          ></Image>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Auto-discovering nearby devices</Text>

      {/* Icon + Progress */}
      <View style={styles.scanBox}>
        <View style={styles.searchIconContainer}>
        <Image 
        style={styles.searchIcon}
        source={require("../../assets/icons/searchIcon.png")}></Image>
        </View>
        <Text style={styles.scanText}>Scanning Network</Text>
        <Text style={styles.scanDesc}>
          Looking for smart devices in your area...
        </Text>

        {/* Spinner */}
        <ActivityIndicator size="large" color="#00AEEF" style={{ marginTop: 10 }} />

        {/* Progress Bar */}
        {/* <Bar
          progress={progress}
          width={250}
          color="#00AEEF"
          unfilledColor="#e0e0e0"
          borderWidth={0}
          height={8}
          style={{ marginTop: 20 }}
        /> */}
        <Text style={styles.percent}>
          {Math.round(progress * 100)}% Complete
        </Text>
      </View>

      {/* Tips */}
      <View style={styles.tips}>
        <Text style={styles.tipTitle}>Search Tips</Text>
        <Text style={styles.tip}>
          • Make sure devices are powered on and in pairing mode
        </Text>
        <Text style={styles.tip}>
          • Ensure devices are connected to your WiFi Network
        </Text>
        <Text style={styles.tip}>• Keep your phone close to the device</Text>
        <Text style={styles.tip}>• This process may take up to 30 seconds</Text>
      </View>

      {/* Footer */}
      <TouchableOpacity onPress={() => setProgress(0)}>
        <Text style={styles.footerText}>
          Not able to find your device?{" "}
          <Text style={styles.scanNow}>Scan Again</Text>
        </Text>
      </TouchableOpacity>

      {/* Qr code Scanner */}
      <View style={styles.ScanQRcontainerMain}>
        <TouchableOpacity 
        style={styles.ScanQRcontainer}
        onPress={gotoScanner}>
           <Text style= {styles.QRText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default ScanDevice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
  flexDirection: "row",
  justifyContent: "center", // space between title and icon
  alignItems: "center",
  marginTop: 40,
  position: "relative",
},
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
closeButton:{
  position: "absolute",
  right: 0,
  padding: 10, // optional for touch area
},
  closeIcon:{
    width:20,
    height:20,
    marginBottom:50,
   
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 4,
  },

  scanBox: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 60,

  },

  searchIconContainer:{
      backgroundColor:'#08B7F6',
      padding:41,
      borderRadius:100,
  },

  searchIcon:{
      width:51,
      height:51,
      tintColor:'#FFFFFF' 
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
    //  alignItems: "center",
    // justifyContent: "center",
    marginLeft:20,
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
  
  ScanQRcontainerMain:{
      alignItems:'center',
  },

  ScanQRcontainer:{
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    backgroundColor:'#00AEEF',
    borderRadius:20,
    width:200,
  },
  QRText:{
    alignItems:'center',
    padding:15,
    color:'#FFFFFF',
    fontWeight:"600",

  }
});
