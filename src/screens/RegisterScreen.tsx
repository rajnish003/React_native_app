import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



interface Storage {
  setItem(key: string, value: string): void;
  getItem(key: string): string | null;
  // ... other methods
}



const RegisterScreen =({ navigation }: { navigation: any })  => {
  const [fullname, setFullname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);

      // call REGISTER API (replace with your backend endpoint)
      // const response = await axios.post("http://10.0.2.2:4000/v1/auth/signup", {
      //   fullname,
      //   phoneNo,
      //   email,
      //   password,
      // });

  
    //  await AsyncStorage.setItem('takeEmail', 'email');

    //   console.log("Register Success:", response.data);
    //   Alert.alert("Success", "Registration successful!");

      // Navigate to OTP screen (or Login)
      navigation.navigate("Otp");
    } catch (error: any) {
      if (error.response) {
        console.error("Register Error:", error.response.data);
        Alert.alert("Error", JSON.stringify(error.response.data));
      } else {
        console.error("Register Error:", error.message);
        Alert.alert("Error", "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Homeasy</Text>
      <Text style={styles.subtitle}>Smart Living, Made Simple</Text>

      {/* Full Name */}
      <TextInput
        placeholder="Enter Full Name"
        value={fullname}
        onChangeText={setFullname}
        style={styles.input}
      />

      {/* Mobile Number */}
      <TextInput
        placeholder="Enter Mobile No"
        value={phoneNo}
        onChangeText={setPhoneNo} // fixed
        style={styles.input}
        keyboardType="phone-pad"
      />

      {/* Email */}
      <TextInput
        placeholder="mail@gmail.com"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Terms */}
      <Text style={styles.terms}>
        By Clicking Register I Agree With{" "}
        <Text style={styles.link}>Terms & Conditions</Text>
      </Text>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerBtn}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.registerText}>
          {loading ? "Registering..." : "Register"}
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Social Buttons */}
      <TouchableOpacity style={styles.socialBtn}>
        <Icon name="logo-facebook" size={20} color="#1877F2" />
        <Text style={styles.socialText}>Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn}>
        <Icon name="logo-google" size={20} color="#DB4437" />
        <Text style={styles.socialText}>Login with Google</Text>
      </TouchableOpacity>

      {/* Login link */}
      <View style={styles.loginContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    // marginTop: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#53CDF9",
    textAlign: "center",
    marginTop: 50,
    fontFamily: "Inter",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "600",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 15,
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  terms: {
    fontSize: 12,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
  },
  link: {
    color: "#53CDF9",
    fontWeight: "500",
  },
  registerBtn: {
    backgroundColor: "#53CDF9",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 25,
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 8,
    color: "#666",
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 14,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
  },
});
