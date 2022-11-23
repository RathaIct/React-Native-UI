
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AssetSvg } from '../utils/AssetSvg';
function SampleFive(props) {
    return (
        <View style={styles.scaffold}>
            <View style={styles.body}>
                <ScrollView>
                    <SafeAreaView>
                        <Text style={styles.welcome}>Welcome Back</Text>
                        <Text style={styles.subWelcome}>Welcome back to Estero. Have a good time</Text>
                        <View style={styles.loginContainer}>
                            <TextFieldComponent icon="user" placeholder="Your email/ID" />
                            <View style={{ borderBottomWidth: 0.5, borderBottomColor: "rgba(38,38,38,0.58)" }}></View>
                            <TextFieldComponent icon="lock" placeholder="Your password" />
                        </View>
                        <Text style={styles.forgot}>Forgot password?</Text>
                        <TouchableOpacity style={{ marginTop: 32 }}>
                            <View style={styles.loginButton}>
                                <Text style={styles.loginTextButton}>Login</Text>
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
                        <View style={styles.registerContainer}>
                            <Text style={styles.account}>Don’t have an account?</Text>
                            <TouchableOpacity>
                                <Text style={styles.register}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
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
    function ButtonComponent(props) {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    paddingVertical: 8,
                    paddingHorizontal: 32,
                    borderRadius: 8,
                    borderWidth: 0.5,
                    borderColor: "rgba(38,38,38,0.58)",
                }}>
                    {props.children}
                </View>
            </TouchableOpacity>
        );
    }
    function TextFieldComponent({ label, placeholder, icon }) {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
            }}>
                <FontAwesome style={{
                    fontSize: 20,
                    color: "rgba(38,38,38,0.58)"
                }} name={icon} />
                <TextInput style={{
                    marginLeft: 8,
                    height: 50,
                    flex: 1,
                }} placeholder={placeholder} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    scaffold: {
        backgroundColor: "#D9D9D9",
        position: "relative",
        height: "100%",
    },
    body: {
        backgroundColor: "white",
        position: "absolute",
        height: "90%",
        width: "100%",
        bottom: 0,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 16,
    },
    welcome: {
        color: "#121212",
        fontWeight: "bold",
        fontSize: 32,
    },
    subWelcome: {
        marginVertical: 16,
        color: "#888888",
    },
    loginContainer: {
        borderWidth: 0.5,
        borderColor: "rgba(38,38,38,0.58)",
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    forgot: {
        color: "rgba(38,38,38,0.58)",
    },
    loginButton: {
        backgroundColor: "#7D00D0",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    loginTextButton: {
        color: "white",
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
    groupButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    registerContainer: {
        flexDirection: "row",
        marginVertical: 32,
        justifyContent: "center",
    },
    account: {
        color: "grey",
        marginRight: 8,
    },
    register: {
        color: "#7D00D0"
    }
})
export default SampleFive;