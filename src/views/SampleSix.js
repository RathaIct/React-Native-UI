import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import BackBackground from './components/BackBackground'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
function SampleSix() {
    return (
        <BackBackground>
            <View style={{ height: "100%" }}>
                <View style={styles.header}>
                    <AntDesign style={styles.icon} name='left' />
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Login</Text>
                    </View>
                    <View style={{ width: 50 }}></View>
                </View>
                <View style={{ flex: 1, height: "100%" }}>
                    <ScrollView>
                        <View style={styles.body}>
                            <TextFieldComponent placeholder="Email" icon="envelope" />
                            <TextFieldComponent placeholder="Password" icon="lock" />
                            <View style={{ height: 32 }}></View>
                            <TouchableOpacity>
                                <LinearGradient style={styles.loginContainer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3574EF', '#152E5E']} >
                                    <Text style={styles.login}>Login Now</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={styles.bottomContainer}>
                                <FontAwesome style={{ fontSize: 30, color: "#727272", marginRight: 8, }}
                                    name="square-o" />
                                <Text style={styles.bottomText}>Accept all the requirements that we have provided</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </BackBackground >
    );
    function TextFieldComponent({ placeholder, secureTextEntry, icon }) {
        return (
            <View style={{ marginVertical: 8 }}>
                <View style={styles.containerTextInputStyle}>
                    <EvilIcons style={{ fontSize: 30, color: "#727272", marginRight: 8, }}
                        name={icon} />
                    <TextInput style={{ flex: 1, height: 50, color: "white" }}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        placeholderTextColor="#727272" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
    },
    icon: {
        width: 50,
        fontSize: 25,
        color: "white",
        padding: 8,
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    labelStyle: {
        fontSize: 12,
        color: "#888888",
    },
    containerTextInputStyle: {
        borderRadius: 25,
        height: 50,
        marginVertical: 4,
        justifyContent: "center",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111111",
    },
    body: {
        padding: 8,
        marginTop: 200,
    },
    loginContainer: {
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    login: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    bottomContainer: {
        flexDirection: "row",
        marginVertical: 16,
        alignItems: "center",
    },
    bottomText: {
        color: "#727272",
    }
})


export default SampleSix;