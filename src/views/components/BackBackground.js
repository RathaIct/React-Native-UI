import { BlurView } from "@react-native-community/blur";
import { SafeAreaView, View } from "react-native";



function BackBackground(props) {
    return (
        <View style={{
            height: "100%",
            position: "relative",
            backgroundColor: "#060606",
        }}>
            <View style={{
                height: 200,
                width: 200,
                backgroundColor: "#8FB5FF",
                position: "absolute",
                left: 50,
                top: 100,
                borderRadius: 100,
            }}></View>
            <View style={{
                height: 120,
                width: 120,
                backgroundColor: "#8FB5FF",
                position: "absolute",
                bottom: 0,
                right: 50,
                borderRadius: 100,
            }}></View>
            <BlurView style={{ backgroundColor: "rgba(0,0,0,0.3)", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, }} blurType="dark" blurAmount={80} />
            <SafeAreaView>
                {props.children}
            </SafeAreaView>
        </View>
    );
}

export default BackBackground;