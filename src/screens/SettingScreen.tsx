import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { View, Text, Image, StyleSheet, ScrollView, Switch ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type SettingNavProp = NativeStackNavigationProp<RootStackParamList>;
type Props = { navigation: SettingNavProp };

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const [pushEnabled, setPushEnabled] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);
    const [autoConnect, setAutoConnect] = React.useState(true);

    // const toggleSwitch = () => setIsEnabled(prev => !prev);

    return (
        <>
            <SafeAreaView style={styles.safeAreaTop} />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={require('../../assets/icons/user_icon.png')}
                            style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Rajnish Kumar</Text>
                        <Text style={styles.profileEmail}>rajnish@homeasy.io</Text>
                    </View>
                </View>

                {/* Quick Settings Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Quick Settings</Text>
                    </View>
                    <View style={styles.sectionItems}>
                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={require('../../assets/icons/notification_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Push Notification</Text>
                                    <Text style={styles.itemSubtitle}>Get alerts for device changes</Text>
                                </View>
                            </View>
                            <Switch
                                value={pushEnabled}
                                onValueChange={() => setPushEnabled(prev => !prev)}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={pushEnabled ? "#53CDF9" : "#f4f3f4"}
                            />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer, { backgroundColor: '#6718F0' }]}>
                                    <Image
                                        source={require('../../assets/icons/temprature_moon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Dark Mode</Text>
                                    <Text style={styles.itemSubtitle}>Switch to Dark Theme</Text>
                                </View>
                            </View>
                            <Switch
                                value={darkMode}
                                onValueChange={() => setDarkMode(prev => !prev)}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={darkMode ? "#6718F0" : "#f4f3f4"}
                            />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer, { backgroundColor: '#50E876' }]}>
                                    <Image
                                        source={require('../../assets/icons/wifi_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Auto Connect Devices</Text>
                                    <Text style={styles.itemSubtitle}>Automatically connect new devices</Text>
                                </View>
                            </View>
                            <Switch
                                value={autoConnect}
                                onValueChange={() => setAutoConnect(prev => !prev)}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={autoConnect ? "#50E876" : "#f4f3f4"}
                            />
                        </View>
                    </View>
                </View>

                {/* Account & Privacy Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Account & Privacy</Text>
                    </View>
                    <View style={styles.sectionItems}>
                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer]}>
                                    <Image
                                        source={require('../../assets/icons/user_icon_black.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <TouchableOpacity style={styles.itemText} onPress={() => navigation.navigate('ProfileSetting')}>
                                    <Text style={styles.itemTitle}>Profile Settings</Text>
                                    <Text style={styles.itemSubtitle}>Manage your personal information</Text>
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>

                        <TouchableOpacity style={styles.itemRow}  onPress={() => navigation.navigate('SecuritySetting')}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer, { backgroundColor: '#F32A2A' }]}>
                                    <Image
                                        source={require('../../assets/icons/lock_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Security & Privacy</Text>
                                    <Text style={styles.itemSubtitle}>Password, biometrics, data privacy</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer, { backgroundColor: '#50E876' }]}>
                                    <Image
                                        source={require('../../assets/icons/phone_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Connected Devices</Text>
                                    <Text style={styles.itemSubtitle}>Manage paired smart devices</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>
                    </View>
                </View>

                {/* Preferences Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Preferences</Text>
                    </View>
                    <View style={styles.sectionItems}>
                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer, { backgroundColor: '#FFA600' }]}>
                                    <Image
                                        source={require('../../assets/icons/paint_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Theme & Appearance</Text>
                                    <Text style={styles.itemSubtitle}>Customize your experience</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer, { backgroundColor: '#04DE3B' }]}>
                                    <Image
                                        source={require('../../assets/icons/webBrowser_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Language & Region</Text>
                                    <Text style={styles.itemSubtitle}>English (US), San Francisco</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>
                    </View>
                </View>

                {/* Support Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Support</Text>
                    </View>
                    <View style={styles.sectionItems}>
                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={require('../../assets/icons/questionMark_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Help & Support</Text>
                                    <Text style={styles.itemSubtitle}>FAQ’s, contact support</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <View style={[styles.imageContainer, { backgroundColor: '#FF0000' }]}>
                                    <Image
                                        source={require('../../assets/icons/logout_icon.png')}
                                        style={styles.itemIcon}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={[styles.itemTitle, { color: '#FF0000' }]}>Sign Out</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    safeAreaTop: {
        backgroundColor: '#08B7F6',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    scrollContent: {
        paddingBottom: 30,
    },
    profileSection: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#08B7F6',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 12,
    },
    profileImageContainer: {
        marginLeft: 4,
        backgroundColor: '#e0e9ee84',
        padding: 10,
        borderRadius: 50,
    },
    profileImage: {
        width: 40,
        height: 40,
        tintColor: '#FFFFFF',


    },
    profileInfo: {
        alignItems: 'flex-start',
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    section: {
        marginTop: 20,
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionHeader: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1D1B20',
    },
    sectionItems: {
        paddingHorizontal: 20,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    imageContainer: {
        backgroundColor: '#08B7F6',
        padding: 6,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        width: 32,
        height: 32
    },
    itemIcon: {
        width: 16,
        height: 16,
        tintColor: '#FFFFFF',
        // marginRight: 12,
    },
    itemText: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1D1B20',
        marginBottom: 2,
    },
    itemSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    arrowIcon: {
        width: 18,
        height: 18,
        tintColor: '#1D1B20',
    },
});

export default SettingsScreen;