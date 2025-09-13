import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  
} from "react-native";

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: any;
};

const OtpScreen: React.FC<Props> = ({ navigation }) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("")
  const inputs = useRef<(TextInput | null)[]>([]); //  store refs

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return; // restrict to 1 digit

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus(); //  move to next
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          const newOtp = [...otp];
          newOtp[index - 1] = ""; // Optional: clear previous input
          setOtp(newOtp);
          inputs.current[index - 1]?.focus();
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = ""; // Clear current input
        setOtp(newOtp);
      }
    }
  
};


useEffect(()=>{
      const loadEmail = async () => {
      const storedEmail = await AsyncStorage.getItem("takeEmail");
      if (storedEmail) {
        setEmail(storedEmail);
      } else {
        // fallback: navigate back or ask again
        navigation.goBack();
      }
    };
    loadEmail();
},[])

  const handleVerify = async () => {
    const code = otp.join("");
    // console.log("Entered OTP:", code);
    try {
  const response = await axios.post("http://172.22.208.1:8080/auth/registration/verifyOTP", {
   email,
   otp: code,
   });  

    } catch (error:any) {
      console.error(error.response.data);
      Alert.alert("Error", JSON.stringify(error.response.data));
    }


    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Homeasy</Text>
      <Text style={styles.subtitle}>Smart Living, Made Simple</Text>

      <Text style={styles.label}>Verify Your Email</Text>
      <Text style={styles.description}>
        We’ve sent a 6-digit verification code to{"\n"}******@gmail.com
      </Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)} // ✅ assign ref
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)} // ✅ handle backspace
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify Code</Text>
      </TouchableOpacity>

      {/* Links */}
      <TouchableOpacity>
        <Text style={styles.resend}>Resend Verification Code</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        Didn’t receive the code? Check your messages or{" "}
        <Text style={styles.link}>Contact Support</Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#53CDF9",
    textAlign: "center",
    marginTop: 100,
    fontFamily: "Inter",
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    marginBottom: 30,
    fontWeight: "600",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
    marginTop: 40,
  },
  otpInput: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },
  verifyButton: {
    backgroundColor: "#00AEEF",
    width: "85%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  verifyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resend: {
    color: "#000",
    textDecorationLine: "underline",
    marginBottom: 10,
    marginTop: 20,
  },
  footer: {
    fontSize: 13,
    color: "#444",
    textAlign: "center",
    marginTop: 40,
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});
