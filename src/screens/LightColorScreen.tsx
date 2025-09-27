import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import ColorPicker from 'react-native-wheel-color-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const LightColorScreen = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [brightness, setBrightness] = useState(75);
  const [temperature, setTemperature] = useState(50);
  const [color, setColor] = useState('#00BCD4');

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#08B7F6' }} />

      {/* Header */}
      <View style={styles.header}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require('../../assets/icons/facebook_Icon.png')}
        />      
        <Text style={styles.headerText}> Living Room Light</Text>
      </View>

      {/* Colors */}
      <View style={styles.card}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Colors</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
        <ColorPicker
          color={color}
          onColorChangeComplete={newColor => setColor(newColor)}
          thumbSize={30}
          sliderSize={30}
          noSnap={true}
          row={false}
          swatches={true}
          swatchesLast={true}
          swatchesData={[
            '#F44336',
            '#FF9800',
            '#FFEB3B',
            '#4CAF50',
            '#00BCD4',
            '#E91E63',
            '#9C27B0',
          ]}
        />
      </View>

      {/* Brightness */}
      <View style={styles.card}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Brightness</Text>
          <Text style={styles.valueText}>{Math.round(brightness)}%</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={brightness}
          onValueChange={value => setBrightness(value)}
          minimumTrackTintColor="#03A9F4"
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#03A9F4"
        />
      </View>

      {/* Temperature */}
      <View style={styles.card}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Temperature</Text>
          <Text style={styles.valueText}>{Math.round(temperature)}%</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={temperature}
          onValueChange={value => setTemperature(value)}
          minimumTrackTintColor="#03A9F4"
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#03A9F4"
        />
        <View style={styles.tempLabels}>
          <Text style={styles.tempText}>Warm</Text>
          <Text style={styles.tempText}>Cool</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.card}>
        <Text style={[styles.sectionTitle, { marginBottom: 10 }]}>
          Quick Actions
        </Text>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setBrightness(100)}
          >
            <Text style={styles.buttonText}>Max Brightness</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTemperature(100)}
          >
            <Text style={styles.buttonText}>Max Cool</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FCFF', padding: 15 },
  header: {
    padding: 15,
    backgroundColor: '#08B7F6',
    marginBottom: 15,
  },
  headerText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, color: '#03A9F4', fontWeight: '600' },
  slider: { width: '100%', height: 40 },
  valueText: { color: '#333', fontWeight: '500' },
  tempLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  tempText: { color: '#666', fontSize: 12 },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    flex: 1,
    padding: 12,
    backgroundColor: '#E0F2FF',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: { color: '#03A9F4', fontWeight: '600' },
});

export default LightColorScreen;
