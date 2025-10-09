import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import SwitchControl from '../components/SwitchControl';

type SecurityNavProp = NativeStackNavigationProp<RootStackParamList>;
type Props = { navigation: SecurityNavProp };

const SecurityScreen: React.FC<Props> = ({ navigation }) => {
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [newPassword, setNewPassword] = React.useState('');
    // const [showNewPassword, setShowNewPassword] = React.useState(false);
    return (
        <>
            <SafeAreaView style={styles.safeAreaTop} />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../assets/icons/back_arrow.png')}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}> Security & Privacy</Text>
                </View>

                {/* You can add your main content below */}
                <View>
                    <View style={styles.body}>
                        <Text style={styles.placeholder}>Password & Authentication</Text>
                    </View>

                    <View style={styles.body}>
                        <Text style={{ marginBottom: 10, }}>Change Password</Text>
                        <View style={styles.changeinput}>
                            <TextInput
                                placeholder="Current Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                style={{ width: '85%' }}

                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            >

                                <Image
                                    source={showPassword
                                        ? require('../../assets/icons/view_eye_icon.png')
                                        : require('../../assets/icons/hide_eye_icon.png')}
                                    style={styles.eyeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* New password section */}
                    <View style={styles.body}>
                        <Text style={{ marginBottom: 10, }}>New Password</Text>
                        <View style={styles.changeinput}>
                            <TextInput
                                placeholder="Confirm New Password"
                                value={newPassword}
                                onChangeText={setNewPassword}
                                style={{ width: '85%' }}

                            />

                        </View>
                    </View>


                    {/* button Section */}
                    <TouchableOpacity style={{
                        backgroundColor: '#08B7F6',
                        padding: 15,
                        borderRadius: 8,
                        marginTop: 30,
                        marginBottom: 20,
                        marginHorizontal: 20,
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Update Password</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.line}></View>

                {/* Card Biometric finger Section */}
                <View style={styles.cardConatiner}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../assets/icons/fingerprint_icon.png')}
                                style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                            />
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Biometric Authentication</Text>
                            <Text style={styles.subTitle}>Use fingerprint</Text>
                        </View >
                    </View>
                    <View>
                        <SwitchControl
                            value={true}
                            onValueChange={(val: boolean) => val}
                        />
                    </View>
                </View>

                {/*  Card Biometric face Section */}
                <View style={styles.cardConatiner}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <View style={[styles.imageContainer, { backgroundColor: '#03A9F4' }]}>
                            <Image
                                source={require('../../assets/icons/user_icon_black.png')}
                                style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                            />
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Biometric Authentication</Text>
                            <Text style={styles.subTitle}>Use face ID</Text>
                        </View >
                    </View>
                    <View>
                        <SwitchControl
                            value={true}
                            onValueChange={(val: boolean) => val}
                        />
                    </View>
                </View>

                {/*  Card Two-Factor Authentication Section */}
                <View style={styles.cardConatiner}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <View style={[styles.imageContainer, { backgroundColor: '#FFA600' }]}>
                            <Image
                                source={require('../../assets/icons/phone_icon.png')}
                                style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                            />
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Two-Factor Authentication</Text>
                            <Text style={styles.subTitle}>Extra security via SMS or app</Text>
                        </View >
                    </View>
                    <View>
                        <SwitchControl
                            value={true}
                            onValueChange={(val: boolean) => val}
                        />
                    </View>
                </View>

                {/* Privacy Setting Section */}
                <View>
                    <Text style={styles.privacy_text}>Privacy Setting</Text>

                    {/*  Card Data Sharing Section */}
                    <View style={styles.cardConatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={[styles.imageContainer, { backgroundColor: '#5A15CF' }]}>
                                <Image
                                    source={require('../../assets/icons/security.png')}
                                    style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                                />
                            </View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Data Sharing</Text>
                                <Text style={styles.subTitle}>Share usage data for improvements</Text>
                            </View >
                        </View>
                        <View>
                            <SwitchControl
                                value={true}
                                onValueChange={(val: boolean) => val}
                            />
                        </View>
                    </View>

                    {/*  Card ocation tracking Section */}
                    <View style={styles.cardConatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={[styles.imageContainer, { backgroundColor: '#F32A2A' }]}>
                                <Image
                                    source={require('../../assets/icons/location.png')}
                                    style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                                />
                            </View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Location Tracking</Text>
                                <Text style={styles.subTitle}>Use location for automation</Text>
                            </View >
                        </View>
                        <View>
                            <SwitchControl
                                value={true}
                                onValueChange={(val: boolean) => val}
                            />
                        </View>
                    </View>

                    {/*  Card Analytics collection Section */}
                    <View style={styles.cardConatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={[styles.imageContainer, { backgroundColor: '#08B7F6' }]}>
                                <Image
                                    source={require('../../assets/icons/analysis.png')}
                                    style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                                />
                            </View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Analytics Collection</Text>
                                <Text style={styles.subTitle}>Help improve app performance</Text>
                            </View >
                        </View>
                        <View>
                            <SwitchControl
                                value={true}
                                onValueChange={(val: boolean) => val}
                            />
                        </View>
                    </View>

                    {/*  Card Device Access Section */}
                    <View style={styles.cardConatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={[styles.imageContainer, { backgroundColor: '#50E876' }]}>
                                <Image
                                    source={require('../../assets/icons/phone_icon.png')}
                                    style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                                />
                            </View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Device Access</Text>
                                <Text style={styles.subTitle}>Allow camera and microphone access</Text>
                            </View >
                        </View>
                        <View>
                            <SwitchControl
                                value={true}
                                onValueChange={(val: boolean) => val}
                            />
                        </View>
                    </View>

                    {/*  Card Device Access Section */}
                    <View style={styles.cardConatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={[styles.imageContainer, { backgroundColor: '#7F9684' }]}>
                                <Image
                                    source={require('../../assets/icons/lock_icon.png')}
                                    style={{ width: 14, height: 14, tintColor: '#ffffff' }}
                                />
                            </View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Auto-Lock</Text>
                                <Text style={styles.subTitle}>Lock app when inactive</Text>
                            </View >
                        </View>
                        <View>
                            <SwitchControl
                                value={true}
                                onValueChange={(val: boolean) => val}
                            />
                        </View>
                    </View>

                </View>

            </ScrollView>
        </>
    );
};

export default SecurityScreen;

const styles = StyleSheet.create({
    safeAreaTop: {
        backgroundColor: '#08B7F6',
        flex: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    header: {
        backgroundColor: '#08B7F6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
    },
    backIcon: {
        width: 22,
        height: 22,
        marginLeft: 20,
        tintColor: '#ffffff',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
    },
    body: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    placeholder: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600',
    },
    changeinput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        // paddingHorizontal: 10,
        paddingVertical: 5,
        width: '95%',
    },
    eyeIcon: {
        width: 29,
        height: 21,
        resizeMode: 'contain',
        tintColor: '#ccc'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
    },
    cardConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        gap: 15,
        marginBottom: 20,
    },

    imageContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#50E876',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,

    },
    titleContainer: {

    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 14,
        color: '#666',

    },

    privacy_text: {
        fontSize: 16,
        color: '#000000',       
        fontWeight: '600',
        paddingHorizontal: 20,
        marginBottom: 18,
    },

});
