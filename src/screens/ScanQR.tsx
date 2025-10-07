import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Camera, useCameraDevices,CodeScanner,Code as VisionCameraCode } from "react-native-vision-camera";

// type Code = {
//   value: string;
//   type: string;
// };

type QRScanScreenProps = {
  onScanSuccess: (code: string) => string | void ;
};

// type CameraPermissionResult = {
//   status: CameraPermissionStatus;
// };

const QRScanScreen: React.FC<QRScanScreenProps> = ({ onScanSuccess }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const camera = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    const initializeCamera = async () => {
      try {
        // Request camera permissions
        const cameraPermission = await Camera.requestCameraPermission();
        setHasPermission(cameraPermission === 'granted');

        // Check if camera is available
        const availableCameras = await Camera.getAvailableCameraDevices();
        console.log('Available cameras:', availableCameras);
      } catch (error) {
        console.error('Failed to initialize camera:', error);
        setHasPermission(false);
      }
    };

    initializeCamera();
  }, []);

  const handleBarCodeScanned = useCallback((codes: VisionCameraCode[], ) => {
    if (!codes?.length) return;

    setIsScanning((prev) => {
      if (prev) {
        const code = codes[0];
        if (code?.value) {
          try {
            onScanSuccess(code.value);
            Alert.alert(
              "Success!",
              `QR Code scanned: ${code.value.substring(0, 20)}${
                code.value.length > 20 ? "..." : ""
              }`,
              [
                { text: "Scan Again", onPress: () => setIsScanning(true) },
                { text: "Done", style: "cancel" },
              ]
            );
            return false;
          } catch (error) {
            console.error("Error handling scanned code:", error);
          }
        }
      }
      return prev;
    });
  }, [onScanSuccess]);

  const codeScanner: CodeScanner = {
    codeTypes: ['qr'],
    onCodeScanned: handleBarCodeScanned
  };


  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>Loading camera...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>
          Camera permission is required to scan QR codes
        </Text>
        <Text style={styles.subText}>Please enable camera access in settings</Text>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>No camera device found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={isScanning ? codeScanner : undefined}
        enableZoomGesture
      />
      <View style={styles.overlay}>
        <View style={styles.scanArea}>
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
        </View>
        <Text style={styles.instructionText}>Scan your device QR code</Text>
        {!isScanning && (
          <Text style={[styles.subInstructionText, { color: "green" }]}>
            ✓ Code scanned successfully!
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  cornerTopLeft: {
    position: "absolute",
    top: -2,
    left: -2,
    width: 24,
    height: 24,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: "#fff",
  },
  cornerTopRight: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 24,
    height: 24,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: "#fff",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: -2,
    left: -2,
    width: 24,
    height: 24,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#fff",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 24,
    height: 24,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#fff",
  },
  instructionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 8,
  },
  subInstructionText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
  },
  centerText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 15,
    borderRadius: 8,
    margin: 20,
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: "rgba(255,255,255,0.7)",
    marginTop: 10,
  },
});

export default QRScanScreen;
