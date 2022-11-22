import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { BlurView } from "@react-native-community/blur";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AssetImage } from "../utils/AssetImage";
import Background from './components/Background'
function SampleThree() {
    return (
        <View style={styles.scaffold}>
            <Background title="Hello">
                <ScrollView>
                    <SafeAreaView>
                        <View style={styles.body}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.welcome}>Welcome</Text>
                                <Text style={styles.login}>Login to access your account</Text>
                            </View>
                            <TextFieldComponent label="Email Address" />
                            <TextFieldComponent label="Phone Number" />
                            <TextFieldComponent label="Password"
                                trail={
                                    <TouchableOpacity>
                                        <FontAwesome style={{ fontSize: 20, fontWeight: "thin" }} name='eye-slash' />
                                    </TouchableOpacity>
                                }
                                secureTextEntry={true}
                            />
                            <TouchableOpacity>
                                <Text style={styles.forgot}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={styles.loginContainer}>
                                    <Text style={styles.loginButton}>Login</Text>
                                </View>
                            </TouchableOpacity>
                            <OrSignIn />
                            <TouchableOpacity>
                                <View style={styles.loginSocailContainer}>
                                    <Image style={{ width: 25, height: 25, }} source={AssetImage.google} />
                                    <Text style={styles.loginSocailLabel}>Google</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.bottomContainer}>
                                <Text style={styles.account}>Don’t have an account?</Text>
                                <TouchableOpacity>
                                    <Text style={styles.signUp}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </Background>
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
    function TextFieldComponent({ label = "", trail, secureTextEntry }) {
        return (
            <View style={{ marginVertical: 8 }}>
                <Text style={styles.labelStyle}>{label}</Text>
                <View style={styles.containerTextInputStyle}>
                    <TextInput style={{ flex: 1, height: 50 }} secureTextEntry={secureTextEntry} />
                    {trail != null && trail}
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    scaffold: {
        height: "100%",
    },
    body: {
        padding: 16,
    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
        marginTop: 16,
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 24,
    },
    login: {
        color: "#888888",
        marginTop: 16,
    },
    labelStyle: {
        fontSize: 12,
        color: "#888888",
    },
    containerTextInputStyle: {
        borderColor: "#888888",
        borderWidth: 1,
        borderRadius: 25,
        height: 50,
        marginVertical: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    forgot: {
        textAlign: "right",
        color: "red",
        marginBottom: 30,
    },
    loginContainer: {
        backgroundColor: "#283FB1",
        borderRadius: 6,
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
        marginVertical: 25,
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
    loginSocailContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    loginSocailLabel: {
        fontSize: 16,
        marginLeft: 16,
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 32,
    },
    account: {
        color: "#888888",
        marginRight: 8,
        fontSize: 12,
    },
    signUp: {
        color: "#283FB1",
        fontWeight: "bold",
        fontSize: 12,
    }
})
export default SampleThree;