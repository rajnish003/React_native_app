import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";


const QRScanScreen = ({ onScanSuccess }:any) => {
  return (
    <View style={{ flex: 1 }}>
      <QRCodeScanner
        onRead={onScanSuccess}
        showMarker
        reactivate
        reactivateTimeout={3000}
        topContent={<Text style={styles.centerText}>Scan your device QR code</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: { fontSize: 16, textAlign: "center", margin: 20 },
});

export default QRScanScreen;
