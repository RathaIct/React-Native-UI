
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function SampleTwo() {
    return (
        <View style={styles.scaffold}>
            <View style={styles.body}>
                <Text style={styles.hallo}>Hallo</Text>
                <Text style={styles.welcome}>Welcome back to Estero. Have a good time</Text>
                <TextFieldComponent icon='user' hint='Your email / ID' />
                <TextFieldComponent icon='lock' hint='Password' secureTextEntry={true} />
                <TouchableOpacity style={styles.loginContainer}>
                    <LinearGradient style={styles.loginContainer} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#014ABF', '#0168E9']} >
                        <Text style={styles.login}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.textBottom}>If you are having trouble, for assistance please contact</Text>
                <View style={{ flexDirection: "row", marginVertical: 16 }}>
                    <PhoneLabel icon="phone" label="023-240-240" />
                    <View style={{ width: 20 }}></View>
                    <PhoneLabel icon="telegram" label="01894714744" />

                </View>
            </View>
        </View>
    );
    function PhoneLabel({ icon, label }) {
        return (
            <View style={{
                flexDirection: "row",

            }}>
                <FontAwesome style={{
                    color: "white",
                    fontSize: 20,
                    marginRight: 8,
                }} name={icon} />
                <Text style={{
                    color: "white"
                }}>{label}</Text>
            </View>
        );
    }
    function TextFieldComponent({ icon = "", hint = "", secureTextEntry }) {
        return (
            <View style={styles.inputContainer}>
                <FontAwesome style={styles.icon} name={icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder={hint}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    scaffold: {
        backgroundColor: "#D9D9D9",
        height: "100%",
        justifyContent: "center",
    },
    body: {
        backgroundColor: "rgba(255, 255, 255, 0.1);",
        margin: 16,
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
    },
    hallo: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginVertical: 16,
    },
    welcome: {
        color: "white",
        marginBottom: 20,
    },
    labelStyle: {
        fontSize: 12,
        color: "#888888",
    },
    inputContainer: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        height: 50,
        paddingHorizontal: 16,
        marginVertical: 8,
        alignItems: "center",
        borderRadius: 25,
    },
    icon: {
        fontSize: 20,
        color: "rgba(58,58,58,0.56)"
    },
    textInput: {
        flex: 1,
        marginHorizontal: 16,
        height: 50,
    },
    loginContainer: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#283FB1",
        width: "100%",
        borderRadius: 25,
        marginVertical: 40,
    },
    login: {
        color: "white",
        fontSize: 16,
    },
    textBottom: {
        color: "white",
        textAlign: "center",
    },

})
export default SampleTwo;