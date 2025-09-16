import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  // States for device toggles
  const [livingRoomLight, setLivingRoomLight] = useState(true);
  const [ceilingFan, setCeilingFan] = useState(false);
  const [ac, setAC] = useState(true);
  const [smartTV, setSmartTV] = useState(false);
  const [bedroomLight, setBedroomLight] = useState(false);
  const [securityCamera, setSecurityCamera] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.mainHeader}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good Evening, Rajnish</Text>
              <Text style={styles.date}>Friday, August 8</Text>
              <Text style={styles.Time}>17:16</Text>
            </View>
            <View style={styles.weather}>
              <View style={styles.temprature}>
                <Image
                  source={require('../../assets/icons/sunIcon.png')}
                  style={styles.sunIcon}
                />
                <Text style={styles.temp}>24°C</Text>
              </View>
              <View style={styles.Mainlocation}>
                <Icon name="location-outline" size={16} color="#F9F9F9" />
                <Text style={styles.location}>San Francisco</Text>
              </View>
            </View>
          </View>

          {/* Energy Card */}
          <View style={styles.card}>
            <View style={styles.lowerCard}>
              <View style={styles.Mainenergyimage}>
                <Image
                  source={require('../../assets/icons/energy.png')}
                  style={styles.energyimage}
                />
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Text style={styles.cardTitle}>Today's Energy</Text>
                  <Text style={styles.energyValue}>24.7 kWh</Text>
                </View>
                <View>
                  <Text style={styles.energySave}>12.5% saved</Text>
                  <Text style={styles.energySaveDay}>vs yesterday</Text>
                </View>
              </View>
            </View>
            <View style={styles.energyBar}>
              <View style={styles.energyProgress} />
            </View>
          </View>

          {/* Weather info */}
          <View style={styles.MainWeather}>
            <View>
              <Text style={styles.subInfo}>Sunny, feels like 26°C</Text>
              <Text style={styles.subInfo2}>Humidity: 65% Wind: 8km/hr</Text>
            </View>
            <View style={styles.MainsunImage}>
              <View>
                <Image
                  source={require('../../assets/icons/sunIcon2.png')}
                  style={styles.sunImage}
                />
                <Text style={styles.weatherText}>2 PM</Text>
              </View>

              <View>
                <Image
                  source={require('../../assets/icons/sunCloudyIcon.png')}
                  style={styles.sunImage}
                />
                <Text style={styles.weatherText}>4 PM</Text>
              </View>

              <View>
                <Image
                  source={require('../../assets/icons/cloudsIcon.png')}
                  style={styles.sunImage}
                />
                <Text style={styles.weatherText}>6 PM</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabs}
        >
          {['All', 'Living Room', 'Bedroom', 'Dining Room', 'Kitchen'].map(
            (tab, index) => (
              <TouchableOpacity key={index} style={styles.tab}>
                <Text style={styles.tabText}>{tab}</Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>

        {/* Device Controls */}
        <View style={styles.deviceGrid}>
          {[
            {
              label: 'Living Room Light',
              state: livingRoomLight,
              setter: setLivingRoomLight,
            },
            { label: 'Ceiling Fan', state: ceilingFan, setter: setCeilingFan },
            { label: 'Air Conditioner', state: ac, setter: setAC },
            { label: 'Smart TV', state: smartTV, setter: setSmartTV },
            {
              label: 'Bedroom Light',
              state: bedroomLight,
              setter: setBedroomLight,
            },
            {
              label: 'Security Camera',
              state: securityCamera,
              setter: setSecurityCamera,
            },
          ].map((device, i) => (
            <View key={i} style={styles.deviceCard}>
              <Text style={styles.deviceLabel}>{device.label}</Text>
              <Switch
                value={device.state}
                onValueChange={device.setter}
                thumbColor={device.state ? '#00BFFF' : '#ccc'}
              />
            </View>
          ))}
        </View>

        {/* Energy Analytics */}
        <View style={styles.analytics}>
          <View style={styles.analyticsHeader}>
            <Text style={styles.analyticsTitle}>Energy Analytics</Text>
            <TouchableOpacity>
              <Text style={styles.viewReport}>View Report</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.analyticsData}>This Week: 177.2 kWh</Text>
          <Text style={styles.analyticsData}>Peak Hour: 6-7 PM</Text>
          <Text style={styles.analyticsData}>Avg/Day: 25.3 kWh</Text>

          {/* Dummy Graph */}
          <View style={styles.graph}>
            <View style={[styles.graphBar, { height: 40 }]} />
            <View style={[styles.graphBar, { height: 70 }]} />
            <View style={[styles.graphBar, { height: 50 }]} />
            <View style={[styles.graphBar, { height: 30 }]} />
            <View style={[styles.graphBar, { height: 60 }]} />
            <View style={[styles.graphBar, { height: 40 }]} />
            <View style={[styles.graphBar, { height: 55 }]} />
          </View>

          {/* Energy Tip */}
          <Text style={styles.energyTip}>
            Your A/C is running efficiently! Consider raising temp by 1°C to
            save 6–8% more energy.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F9FF' },
  scroll: { padding: 0 },

  mainHeader: {
    backgroundColor: '#08B7F6',
    width: '100%',
    padding: 18,
  },
  sunIcon: {
    width: 25,
    height: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#08B7F6',
  },
  greeting: { color: '#F9F9F9', fontSize: 20, fontWeight: '600' },
  date: { color: '#F9F9F9', fontSize: 12 },
  Time: { color: '#F9F9F9', fontSize: 12, fontWeight: '600' },
  weather: { flexDirection: 'column' },
  temp: { color: '#F9F9F9', marginLeft: 6, fontSize: 20 },
  location: { color: '#F9F9F9', marginLeft: 6, fontSize: 12 },
  temprature: { flexDirection: 'row' },
  Mainlocation: { flexDirection: 'row' },

  // card section
  card: {
    backgroundColor: '#08B7F6',
    borderRadius: 12,
    borderColor: '#F9F9F9',
    borderWidth: 1,
    padding: 16,
    marginTop: 16,
    width: '100%',
    height: 97,
  },
  lowerCard: {
    flexDirection: 'row',
  },

  mainCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Mainenergyimage: {
    marginRight: 4,
  },
  energyimage: {
    height: 38,
    width: 38,
  },

  cardTitle: { color: '#F9F9F9', fontSize: 12, fontWeight: '500' },
  energyValue: {
    color: '#F9F9F9',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  energySave: { fontSize: 12, color: '#4DE600' },
  energySaveDay: { fontSize: 12, color: '#F9F9F9' },
  energyBar: {
    height: 8,
    backgroundColor: '#B3E5FC',
    borderRadius: 4,
    marginTop: 10,
    overflow: 'hidden',
  },
  energyProgress: {
    width: '60%',
    height: '100%',
    backgroundColor: '#B7E600',
  },
  MainWeather: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  MainsunImage: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    gap: 30,
  },

  sunImage: {
    width: 32,
    height: 32,
  },

  weatherText: {
    color: '#f9f9f9',
  },

  subInfo: { fontSize: 13, color: '#f9f9f9', marginTop: 8, fontWeight: 400 },
  subInfo2: { fontSize: 13, color: '#f9f9f9', marginTop: 2, fontWeight: 400 },
  tabs: { marginTop: 16 },
  tab: {
    backgroundColor: '#D6F0FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 10,
  },
  tabText: { fontSize: 14 },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  deviceCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  deviceLabel: { fontSize: 14, marginBottom: 8 },
  analytics: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  analyticsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  analyticsTitle: { fontSize: 16, fontWeight: '600' },
  viewReport: { color: '#0288D1', fontSize: 13 },
  analyticsData: { fontSize: 13, marginTop: 4 },
  graph: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    height: 80,
    alignItems: 'flex-end',
  },
  graphBar: {
    width: 10,
    backgroundColor: '#0288D1',
    borderRadius: 4,
  },
  energyTip: {
    marginTop: 12,
    fontSize: 13,
    color: '#00796B',
    backgroundColor: '#E0F2F1',
    padding: 10,
    borderRadius: 8,
  },
});
