import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AssetImage } from '../utils/AssetImage';
import { AssetSvg } from '../utils/AssetSvg';
function SampleFour(props) {
    return (
        <View style={styles.scaffold}>
            <ScrollView>
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Hallo!</Text>
                            <Text style={styles.headerContent}>Please login to get full access from us</Text>
                        </View>
                    </SafeAreaView>
                </View>
                <SafeAreaView>
                    <View style={styles.body}>
                        <View style={{ marginVertical: 16 }}>
                            <TextFieldComponent label='Username' />
                            <TextFieldComponent label='Password'
                                trail={
                                    <TouchableOpacity>
                                        <FontAwesome style={{ color: "#888888", fontSize: 20, fontWeight: "thin" }} name='eye-slash' />
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.loginContainer}>
                                <Text style={styles.login}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <OrSignIn />
                        <View style={styles.groupButtons}>
                            <ButtonComponent>
                                <AssetSvg.google width={30} height={30} />
                            </ButtonComponent>
                            <ButtonComponent>
                                <AssetSvg.apple width={30} height={30} />
                            </ButtonComponent>
                            <ButtonComponent>
                                <AssetSvg.twitter width={30} height={30} />
                            </ButtonComponent>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
    function OrSignIn() {
        return (
            <View style={styles.orSignInContainerStyle}>
                <View style={styles.ruler}></View>
                <Text style={styles.orSignInText}>Or Sign In With</Text>
                <View style={styles.ruler}></View>
            </View>
        );
    }
    function TextFieldComponent({ label = "", trail }) {
        return (
            <View style={{ marginTop: 8 }}>
                <Text style={styles.labelStyle}>{label}</Text>
                <View style={styles.containerTextInputStyle}>
                    <TextInput style={{ flex: 1 }} />
                    {trail != null && trail}
                </View>
            </View>
        );
    }
    function ButtonComponent(props) {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    paddingVertical: 8,
                    paddingHorizontal: 32,
                    backgroundColor: "#111111",
                    borderRadius: 8,
                }}>
                    {props.children}
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    scaffold: {
        height: "100%",
        backgroundColor: "#000000",

    },
    header: {
        backgroundColor: "#D9D9D9",

    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 250,
    },
    headerTitle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
    headerContent: {
        color: "white",
        marginTop: 8,
    },
    body: {
        padding: 16,
    },
    labelStyle: {
        fontSize: 12,
        color: "#999999",
    },
    containerTextInputStyle: {
        backgroundColor: "#111111",
        borderRadius: 4,
        height: 50,
        marginVertical: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    loginContainer: {
        backgroundColor: "#7D00D0",
        marginVertical: 16,
        borderRadius: 4,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    login: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    orSignInContainerStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    ruler: {
        height: 1,
        borderColor: "#F2F2F2",
        borderBottomWidth: 1,
        flex: 1,
        marginVertical: 16,
    },
    orSignInText: {
        color: "white",
        marginHorizontal: 16,
        fontSize: 12,
    },
    groupButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
    }
});
export default SampleFour;