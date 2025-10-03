import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { View, Text, Image, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type SettingNavProp = NativeStackNavigationProp<RootStackParamList>;
type Props = { navigation: SettingNavProp };

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = React.useState(true);

    const toggleSwitch = () => setIsEnabled(prev => !prev);

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
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Push Notification</Text>
                                    <Text style={styles.itemSubtitle}>Get alerts for device changes</Text>
                                </View>
                            </View>
                            <Switch onValueChange={toggleSwitch} value={isEnabled} />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Dark Mode</Text>
                                    <Text style={styles.itemSubtitle}>Switch to Dark Theme</Text>
                                </View>
                            </View>
                            <Switch onValueChange={toggleSwitch} value={isEnabled} />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Auto Connect Devices</Text>
                                    <Text style={styles.itemSubtitle}>Automatically connect new devices</Text>
                                </View>
                            </View>
                            <Switch onValueChange={toggleSwitch} value={isEnabled} />
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
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Profile Settings</Text>
                                    <Text style={styles.itemSubtitle}>Manage your personal information</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>Security & Privacy</Text>
                                    <Text style={styles.itemSubtitle}>Password, biometrics, data privacy</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/icons/arrow_right.png')}
                                style={styles.arrowIcon}
                            />
                        </View>

                        <View style={styles.itemRow}>
                            <View style={styles.itemLeft}>
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
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
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
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
                                <Image
                                    source={require('../../assets/icons/wifi_icon.png')}
                                    style={styles.itemIcon}
                                />
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
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: '#F5FCFF',
    },
    profileImageContainer: {
        marginBottom: 16,
    },
    profileImage: {
        width: 100,
        height: 100,
        tintColor: '#03A9F4',
        borderRadius: 50,
    },
    profileInfo: {
        alignItems: 'center',
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1D1B20',
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        marginBottom: 20,
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
    itemIcon: {
        width: 18,
        height: 18,
        tintColor: '#03A9F4',
        marginRight: 12,
    },
    itemText: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
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