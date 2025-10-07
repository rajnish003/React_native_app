import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

type ProfileSettingNavProp = NativeStackNavigationProp<RootStackParamList>
type Props = { navigation: ProfileSettingNavProp };

const ProfileSettingScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.safeAreaTop} />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/icons/back_arrow.png')}
                        style={{ width: 22, height: 22, marginLeft: 20, tintColor: '#ffffff' }}
                    />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Profile Settings</Text>
                </View>

                <View style={styles.profileCard}>

                    <View style={{ position: 'relative' }}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../assets/icons/user_icon_black.png')} // replace with your avatar icon
                                style={styles.profileImage}
                            />
                        </View>
                        <TouchableOpacity style={{
                            position: 'absolute', width: 40, height: 40, 
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#08B7F6',
                            top: 95, left: 90,
                            borderRadius: 30,
                        }}>
                            <Image
                               
                                source={require('../../assets/icons/camera_icon.png')} // replace with your camera icon
                                style={{ width: 20, height: 20, position: 'absolute', tintColor: '#ffffff' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.profileName}>Alex Johnson</Text>
                    <Text style={styles.profileRole}>Software Engineer</Text>
                </View>

                {/* Personal Information */}
                <View style={styles.infoContainer}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>

                    <View style={styles.inputRow}>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>First Name</Text>
                            <TextInput style={styles.input} value="Alex" editable={false} />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>Last Name</Text>
                            <TextInput style={styles.input} value="Johnson" editable={false} />
                        </View>
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput style={styles.input} value="alex@example.com" editable={false} />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput style={styles.input} value="+1 (555) 123-4567" editable={false} />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            value="123 Smart Home Lane, San Francisco, CA"
                            editable={false}
                        />
                    </View>

                    <View style={styles.inputRow}>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>Date of Birth</Text>
                            <TextInput style={styles.input} value="15/03/2003" editable={false} />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>Occupation</Text>
                            <TextInput style={styles.input} value="Software Engineer" editable={false} />
                        </View>
                    </View>
                </View>

                {/* Account Status */}
                <View style={styles.accountContainer}>
                    <Text style={styles.sectionTitle}>Account Status</Text>
                    <View style={styles.accountRow}>
                        <View>
                            <Text style={styles.basicText}>Basic Plan</Text>
                            <Text style={styles.upgradeText}>Upgrade to Premium</Text>
                        </View>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy Premium</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}
export default ProfileSettingScreen;

const styles = StyleSheet.create({
    safeAreaTop: {
        flex: 0,
        backgroundColor: '#08B7F6'
    },
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
    },
    scrollContent: {
        paddingBottom: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#08B7F6',
        paddingTop: 30,
        paddingBottom: 20,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginBottom: 20,
        marginLeft: 20,
        color: '#ffffff',
    },

    profileCard: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 25,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        marginBottom: 20,
    },

    imageContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#95CBDE',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
        tintColor: '#ffffff',
        // backgroundColor: '#E0E0E0',
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginTop: 5,
    },
    profileRole: {
        fontSize: 14,
        color: '#888',
    },
    infoContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 15,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#000',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    inputBox: {
        flex: 1,
        marginBottom: 12,
    },
    label: {
        fontSize: 13,
        color: '#666',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#F2F4F7',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        color: '#333',
    },
    accountContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 15,
    },
    accountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    basicText: {
        fontSize: 15,
        fontWeight: '500',
    },
    upgradeText: {
        fontSize: 13,
        color: '#03A9F4',
    },
    buyButton: {
        backgroundColor: '#03A9F4',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: '600',
    },

})
