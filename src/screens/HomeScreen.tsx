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
import { StackNavigationProp } from '@react-navigation/stack'; // For navigation typing
import { RootStackParamList } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface Props {
  navigation: HomeScreenNavigationProp;
 
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // States for device toggles
  const [livingRoomLight, setLivingRoomLight] = useState<number>(50);
  const [ceilingFan, setCeilingFan] = useState<number>(50);
  const [ac, setAC] = useState<boolean>(true);
  const [smartTV, setSmartTV] = useState<boolean>(false);
  const [bedroomLight, setBedroomLight] = useState<number>(50);
  const [securityCamera, setSecurityCamera] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('All');
  const [livingRoomBrightness, setLivingRoomBrightness] = useState<number>(50);
  const [ceilingFanBrightness, setCeilingFanBrightness] = useState<number>(50);
  const [acTemp, setAcTemp] = useState<string>("22°C"); // Changed to number
  const [smartTvBrightness, setSmartTvBrightness] = useState<boolean>(true); // Changed to number
  const [bedroomBrightness, setBedroomBrightness] = useState<number>(50); // Changed to number
  const [cameraBrightness, setCameraBrightness] = useState<number>(50); // Changed to number

  // Get current date and time
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const timeString = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });


  return (
  
  // <SafeAreaView style={{flex: 0, backgroundColor: '#08B7F6'}}/>
  // <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>       
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.mainHeader}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good Evening, Rajnish</Text>
              <Text style={styles.date}>{dateString}</Text>
              <Text style={styles.Time}>{timeString}</Text>
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
                {/* <Ionicons name="location-outline" size={16} color="#F9F9F9" /> */}
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
                  <Text style={styles.energySave}>12.5% Saved</Text>
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
              <TouchableOpacity
                key={index}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>

        <View style={styles.DeviceControll}>
          <Text>Device Controls</Text>

          <TouchableOpacity onPress={() => navigation.navigate("ScanDevice")}>
          <Text style={styles.addDeviceText}>+ Add Devices</Text>
        </TouchableOpacity>
        </View>

        {/* Device Controls */}
        <View style={styles.deviceGrid}>
          {[
            {
              label: 'Living Room Light',
              state: livingRoomLight,
              setter: setLivingRoomLight,
              brightness: livingRoomBrightness,
              setBrightness: setLivingRoomBrightness,
              image: require('../../assets/icons/light-bulb.png'),
              color: '#FFB325',
              desc: 'Brightness :',
              flag:1,
            },
            {
              label: 'Ceiling Fan',
              state: ceilingFan,
              setter: setCeilingFan,
              brightness: ceilingFanBrightness,
              setBrightness: setCeilingFanBrightness,
              image: require('../../assets/icons/fan.png'),
              color: '#08B7F6',
              desc: 'Speed :',
              flag:1,
            },
            {
              label: 'Air Conditioner',
              state: ac,
              setter: setAC,
              brightness: acTemp,
              setBrightness: setAcTemp,
              image: require('../../assets/icons/air-conditioner.png'),
              color: '#08B7F6',
              desc: 'Temprature :',
              flag:1,
            },
            {
              label: 'Smart TV',
              state: smartTV,
              setter: setSmartTV,
              image: require('../../assets/icons/tv.png'),
              color: '#F3439E',
              desc:'ON',
            },
            {
              label: 'Bedroom Light',
              state: bedroomLight,
              setter: setBedroomLight,
              brightness: bedroomBrightness,
              setBrightness: setBedroomBrightness,
              image: require('../../assets/icons/light-bulb.png'),
              color: '#FFB325',
              desc: 'Brightness :',
              flag:1,
            },
            {
              label: 'Security Camera',
              state: securityCamera,
              setter: setSecurityCamera,
              brightness: cameraBrightness,
              setBrightness: setCameraBrightness,
              image: require('../../assets/icons/cctv-camera.png'),
              color: '#F3439E',
              desc: 'ON'
            },
          ].map((device, i) => (
            <View key={i} style={styles.deviceCard}>
              <View style={styles.maindeviceHeader}>
                <View
                  style={{
                    backgroundColor: device.state ? device.color : '#D9D9D9',
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    source={device.image}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: '#FFFFFF',
                      opacity: device.state ? 2 : 0.5,
                      borderRadius: 10,
                      padding: 10,
                    }}
                    resizeMode="contain"
                  />
                </View>
                <Switch
                  value={
                    typeof device.state === 'boolean'
                      ? device.state
                      : device.state > 0
                  }
                  onValueChange={value =>
                    typeof device.state === 'boolean'
                      ? device.setter(value)
                      : device.setter(value ? 50 : 0)
                  }
                  thumbColor={
                    typeof device.state === 'boolean'
                      ? device.state
                        ? '#00BFFF'
                        : '#ccc'
                      : device.state > 0
                      ? '#00BFFF'
                      : '#ccc'
                  }
                />
              </View>
              <View style={styles.deviceHeader}>
                <Text style={styles.deviceLabel}>{device.label}</Text>
              </View>
              {(
                typeof device.state === 'boolean'
                  ? device.state
                  : device.state > 0
              ) ? (
                <View style={styles.brightnessContainer}>
                  <Text style={styles.brightnessText}>
                    {device.desc} {(device.flag === 1 ? `${device.brightness}` : '')}
                  </Text>

                </View>
              ) : (
                <View style={styles.brightnessContainer}>
                  <Text style={styles.brightnessText}>OFF</Text>
                </View>
              )}
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

          <Text style={styles.energyTip}>
            Your A/C is running efficiently! Consider raising temp by 1°C to
            save 6-8% more energy.
          </Text>
        </View>
      </ScrollView>
      </View>
  

// </SafeAreaView>
// </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'#08B7F6',
    backfaceVisibility:'hidden',
  },
  container: { flex:1, backgroundColor: '#fff' },

  scroll: { padding: 0 },
  mainHeader: {
    backgroundColor: '#08B7F6', //08B7F6
    width: '100%',
    padding: 18,
    paddingTop: 60,
  },
  sunIcon: { width: 25, height: 25 },
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
  lowerCard: { flexDirection: 'row' },
  mainCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Mainenergyimage: { marginRight: 4 },
  energyimage: { height: 38, width: 38 },
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
  sunImage: { width: 32, height: 32 },
  weatherText: { color: '#f9f9f9' },
  subInfo: { fontSize: 13, color: '#f9f9f9', marginTop: 8, fontWeight: '400' },
  subInfo2: { fontSize: 13, color: '#f9f9f9', marginTop: 2, fontWeight: '400' },
  tabs: { marginTop: 16, marginLeft: 10 },
  tab: {
    backgroundColor: '#D6F0FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
  },
  tabText: { fontSize: 14 },
  activeTab: { backgroundColor: '#08B7F6' },
  activeTabText: { color: '#fff', fontWeight: '600' },
  DeviceControll: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Fixed alignment
    paddingHorizontal: 15,
    marginTop: 10,
  },
  addDeviceText: { fontWeight: '400', color: '#08B7F6' },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 15,
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
    elevation: 4,
    alignItems: 'center',
  },

  maindeviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },

  deviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  deviceLabel: { fontSize: 14, fontWeight: '500' },
  brightnessContainer: { marginTop: 10, width: '100%' },
  brightnessText: { fontSize: 12, color: '#555', marginBottom: 8 },
  analytics: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    margin: 15, // Adjusted margin
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
  viewReport: { color: '#08B7F6', fontSize: 13 },
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
    backgroundColor: '#08B7F6',
    borderRadius: 4,
  },
  energyTip: {
    marginTop: 12,
    fontSize: 13,
    color: '#34C759',
    backgroundColor: '#E0F2F1',
    padding: 10,
    borderRadius: 8,
    borderWidth:2,
    borderColor:'#34C759',
  },
});
