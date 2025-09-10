// LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // fixed path
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://10.0.2.2:8080/auth/login", {
        email: email,
        password: password,
      });

      console.log("Login Success:", response.data);

      Alert.alert("Success", JSON.stringify(response.data));

      //  Navigate only after success
      navigation.navigate("ScanDevice");
    } catch (error: any) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <ActivityIndicator style={styles.loader} size="large" color="#00AEEF" />
      )}

      {/* Title */}
      <Text style={styles.title}>Homeasy</Text>
      <Text style={styles.subtitle}>Smart Living, Made Simple</Text>

      {/* Email Input */}
      <TextInput
        placeholder="mail@gmail.com"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Password Input */}
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
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
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

      {/* Register Link */}
      <View style={styles.registerContainer}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#53CDF9",
    textAlign: "center",
    marginTop: 50,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
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
    marginBottom: 8,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#777",
    fontSize: 12,
  },
  loginBtn: {
    backgroundColor: "#53CDF9",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 25,
  },
  loginText: {
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
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 15,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 14,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  registerText: {
    color: "#53CDF9",
    fontWeight: "600",
  },
  loader: {
    marginBottom: 20,
  },
});
