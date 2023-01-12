
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { AssetSvg } from '../utils/AssetSvg';
function SampleSeven(props) {
    const [isPhoneSelected, onPhoneSelected] = React.useState(true);
    const [isShowPassword, onSetShowPassword] = React.useState(false);
    function setShowPassword() {
        onSetShowPassword(!isShowPassword);
    }
    return (
        <View style={styles.scaffold}>
            <ScrollView>
                <SafeAreaView style={{ margin: 16 }}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Welcome</Text>
                        <Text style={styles.subTitle}>Login to access your account</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <SwitchButton isSelected={isPhoneSelected} onPress={() => onPhoneSelected(true)}>Phone Number</SwitchButton>
                        <SwitchButton isSelected={!isPhoneSelected} onPress={() => onPhoneSelected(false)}>Email</SwitchButton>
                    </View>
                    <View>
                        {isPhoneSelected && <TextFieldComponent label='Phone Number' />}
                        {!isPhoneSelected && <TextFieldComponent label='Email' />}
                        <TextFieldComponent label='Password'
                            secureTextEntry={!isShowPassword}
                            trail={
                                <TouchableOpacity onPress={setShowPassword}>
                                    <Feather style={{ fontSize: 20, fontWeight: "thin" }} name={isShowPassword ? "eye" : "eye-off"} />
                                </TouchableOpacity>
                            }
                        />
                    </View>
                    <View style={{ height: 8 }}></View>
                    <TouchableOpacity>
                        <View style={styles.loginButtonContainer}>
                            <Text style={styles.loginButton}>{isPhoneSelected ? "Request OTP" : "Login"}</Text>
                        </View>
                    </TouchableOpacity>
                    <OrSignIn />
                    <View style={{ flexDirection: "row" }}>
                        <Button icon={<AssetSvg.google width={20} />}
                            onPress={() => console.log("Google")}>
                            Google
                        </Button>
                        <View style={{ width: 16 }}></View>
                        <Button icon={<AssetSvg.facebook width={20} />}
                            onPress={() => { console.log("Facebook"); }}>
                            Facebook
                        </Button>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 32, justifyContent: "center" }}>
                        <Text style={{ fontSize: 12, color: "#888888", marginRight: 8 }}>Don’t have an account?</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: "#21BDCA", fontWeight: "bold" }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View >
    );
    function Button(props) {
        return (
            <TouchableOpacity style={{
                flex: 1,
                backgroundColor: "#F5F5F5",
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 8,
            }}
                onPress={props.onPress}
            >
                {props.icon}
                <View style={{ width: 8 }}></View>
                <Text style={{ color: "#222222" }}>{props.children}</Text>
            </TouchableOpacity>
        );
    }
    function OrSignIn() {
        return (
            <View style={styles.orSignInContainerStyle}>
                <View style={styles.ruler}></View>
                <Text style={styles.orSignInText}>Or Sign In With</Text>
                <View style={styles.ruler}></View>
            </View>
        );
    }
    function TextFieldComponent({ label = "", trail, secureTextEntry }) {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={styles.labelStyle}>{label}</Text>
                <View style={styles.containerTextInputStyle}>
                    <TextInput style={{ flex: 1, height: 50 }} secureTextEntry={secureTextEntry} />
                    {trail != null && trail}
                </View>
            </View>
        );
    }
    function SwitchButton(props) {
        return (
            <TouchableOpacity style={{
                flex: 1,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: props.isSelected ? "#FFFFFF" : "",
                borderRadius: 8,
                margin: 4,
            }}
                onPress={props.onPress}
            >
                <Text style={{
                    fontSize: 16,
                    color: "#646464"
                }}>{props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    scaffold: {
        backgroundColor: "white",
        height: "100%",
    },
    headerContainer: {
        marginVertical: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#222222",
    },
    subTitle: {
        color: "#888888",
        marginTop: 8,
    },
    switchContainer: {
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        borderRadius: 8,
    },
    labelStyle: {
        fontSize: 12,
        color: "#888888",
    },
    containerTextInputStyle: {
        borderColor: "#888888",
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    loginButtonContainer: {
        backgroundColor: "#21BDCA",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    loginButton: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    orSignInContainerStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    ruler: {
        height: 1,
        borderColor: "#F2F2F2",
        borderBottomWidth: 1,
        flex: 1,
        marginVertical: 16,
    },
    orSignInText: {
        color: "#888888",
        marginHorizontal: 16,
        fontSize: 12,
    },
})

export default SampleSeven;