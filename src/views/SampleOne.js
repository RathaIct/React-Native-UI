import {
    Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from "react-native";
import { AssetImage } from "../utils/AssetImage"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function SampleOne(props) {
    return (
        <View style={{ backgroundColor: "#D9D9D9" }}>
            <ScrollView >
                <SafeAreaView >
                    <View style={styles.headSectionStyle}>
                        <Text style={styles.headTextStyle}>Calashop</Text>
                    </View>
                </SafeAreaView>
                <SafeAreaView>
                    <View style={styles.bodyStyle}>
                        <Text style={styles.loginTextStyle}>Login Account</Text>
                        <Text style={styles.contentStyle}>Hello, you must login first to be able to use the application and enjoy all the features in Calashop</Text>
                        <TextFieldComponent label="Email Address" />
                        <TextFieldComponent label="Password" trail={
                            <TouchableOpacity>
                                <FontAwesome style={{ fontSize: 20, fontWeight: "thin" }} name='eye-slash' />
                            </TouchableOpacity>
                        } />
                        <TouchableOpacity>
                            <Text style={styles.forgotStyle}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.signInContainerStyle}>
                                <Text style={styles.signInTextStyle}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <OrSignIn />
                        <View style={styles.buttonContainer}>
                            <ButtonComponent
                                icon={AssetImage.google}
                                title="Google"
                                onPress={() => {
                                    console.log("Google Press");
                                }}
                            />
                            <View style={{ width: 16 }}></View>
                            <ButtonComponent
                                icon={AssetImage.facebook}
                                title="Facebook"
                                onPress={() => {
                                    console.log("Facebook Press");
                                }}
                            />
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.dontHaveStyle}>Don’t have an account?</Text>
                            <Text style={styles.jiontUs}>Join Us</Text>
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
    function ButtonComponent({ icon, title = "", onPress }) {
        return (
            <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FAFAFA",
                borderRadius: 25,
                height: 40,
                flex: 1,
            }}
                onPress={onPress}
            >
                <Image style={{
                    width: 25,
                    height: 25,
                    marginRight: 16,
                }} source={icon} />
                <Text>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    headSectionStyle: {
        height: 180,
        display: "flex",
        backgroundColor: "#D9D9D9",
        justifyContent: "center",
    },
    headTextStyle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
    bodyStyle: {
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    loginTextStyle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    contentStyle: {
        color: "#888888",
        marginBottom: 16,
    },
    labelStyle: {
        fontSize: 12,
        color: "#888888",
    },
    containerTextInputStyle: {
        borderColor: "#888888",
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        marginVertical: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    forgotStyle: {
        textAlign: "right",
        color: "#EA9459",
    },
    signInContainerStyle: {
        backgroundColor: "#F8623A",
        marginVertical: 16,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    signInTextStyle: {
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
        color: "#888888",
        marginHorizontal: 16,
        fontSize: 12,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    footerContainer: {
        flexDirection: "row",
        paddingVertical: 16,
    },
    dontHaveStyle: {
        color: "#888888",
        fontSize: 12,
    },
    jiontUs: {
        color: "#EA9459",
        fontSize: 12,
        fontWeight: "bold",
    }
})

export default SampleOne;