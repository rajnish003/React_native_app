import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchControl from "../components/SwitchControl";

type ConnectedDevicesNavProp = NativeStackNavigationProp<RootStackParamList>;
type Props = { navigation: ConnectedDevicesNavProp };

const ConnectedDevicesScreen: React.FC<Props> = ({ navigation }) => {

    return (
        <>
            <SafeAreaView style={{ backgroundColor: "#08B7F6" }} />
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
                    <Text style={styles.headerText}> Connected Devices</Text>
                </View>

                <View style={styles.cardConatiner}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../assets/icons/wifi_icon.png')}
                                style={{ width: 18, height: 18, tintColor: '#ffffff' }}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Home Network</Text>
                            <Text style={styles.subTitle}>SmartHome_5g (Connected)</Text>
                        </View >
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={{ borderColor: '#04DE3B', borderWidth: 2, padding: 6, borderRadius: 50, }}>
                                <Text style={{ color: '#04DE3B' }}>Strong Signal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text>All Devices</Text>
                    <View style={styles.cardConatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={[styles.imageContainer, { backgroundColor: '#FFB325' }]}>
                                <Image
                                    source={require('../../assets/icons/light-bulb.png')}
                                    style={{ width: 18, height: 18, tintColor: '#ffffff' }}
                                />
                            </View>
                            <View>
                                <Text style={styles.title}>Living Room Light</Text>
                                <Text style={styles.subTitle}>Lighting</Text>
                                <Text>Last Seen: Just Now</Text>
                            </View>
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
    )
};

export default ConnectedDevicesScreen;

const styles = StyleSheet.create({
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

    cardConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        gap: 15,
        marginVertical: 20,
    },

    imageContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#50E876',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,

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
});