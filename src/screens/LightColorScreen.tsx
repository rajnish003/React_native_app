import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import ColorPicker from 'react-native-wheel-color-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type ScanDeviceNavProp = NativeStackNavigationProp<RootStackParamList>;
type Props = { navigation: ScanDeviceNavProp };

const LightColorScreen: React.FC<Props> = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [brightness, setBrightness] = useState(75);
  const [temperature, setTemperature] = useState(50);
  const [color, setColor] = useState('#00BCD4');

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#08B7F6' }} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.arrowImage}
              source={require('../../assets/icons/back_arrow.png')}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}> Living Room Light</Text>
        </View>

        {/* Colors */}
        <View style={styles.MainCardContainer}>
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image
                  source={require('../../assets/icons/color_palette.png')}
                  style={{ width: 18, height: 18, tintColor: '#03A9F4' }}
                />
                <Text style={styles.sectionTitle}>Colors</Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>
            <ColorPicker
              color={color}
              onColorChangeComplete={newColor => setColor(newColor)}
              thumbSize={20}
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
        </View>

        {/* Brightness */}
        <View style={styles.card2}>
          <View style={styles.sectionHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image
              source={require('../../assets/icons/brightness_icon.png')}
              style={{ width: 18, height: 18, tintColor: '#03A9F4' }}
            />
            <Text style={styles.sectionTitle}>Brightness</Text>
            </View>
            <Text style={styles.valueText}>{Math.round(brightness)}%</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={brightness}
            onValueChange={(value: number) => setBrightness(value)} // number type
            minimumTrackTintColor="#03A9F4"
            maximumTrackTintColor="#D3D3D3"
            thumbTintColor="#03A9F4"
          />
        </View>
          {/* Temperature */}
          <View style={styles.card3}>
            <View style={styles.sectionHeader}>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image
              source={require('../../assets/icons/temprature_moon.png')}
              style={{ width: 18, height: 18, tintColor: '#03A9F4' }}
            />
            <Text style={styles.sectionTitle}>Temperature</Text>
            </View>
              <Text style={styles.valueText}>{Math.round(temperature)}%</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={temperature}
              onValueChange={(value: any) => setTemperature(value)}
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
          <View style={styles.card4}>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FCFF' },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    padding: 15,
    backgroundColor: '#08B7F6',
    flexDirection: 'row',
    gap: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },
  arrowImage: { width: 24, height: 24, tintColor: '#FFF' },
  headerText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },

  MainCardContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  card: { backgroundColor: '#FFF', padding: 15 },
  card2: {
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 20,
    marginBottom: 15,
  },
  card3: {
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 20,
    marginBottom: 15,
  },
  card4: {
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 20,
    marginBottom: 15,
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
