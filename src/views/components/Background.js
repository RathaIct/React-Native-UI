import { BlurView } from "@react-native-community/blur";
import { View } from "react-native";

import React from 'react';

function Background(props) {
    return (
        <View style={{ position: "relative", height: "100%", }}>
            <View style={{ position: "absolute", backgroundColor: "red", width: 280, height: 280, borderRadius: 300, left: -100, top: -100 }} ></View>
            <View style={{ position: "absolute", backgroundColor: "blue", width: 300, height: 300, borderRadius: 300, left: -100, top: 350 }} ></View>
            <View style={{ position: "absolute", backgroundColor: "blue", width: 400, height: 400, borderRadius: 300, right: -200, bottom: -150 }} ></View>
            <View style={{ position: "absolute", backgroundColor: "red", width: 200, height: 200, borderRadius: 300, right: 50, bottom: -50 }} ></View>
            <BlurView style={{ backgroundColor: "rgba(255,255,255,0.7)", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, }} blurType="light" blurAmount={50} />
            {props.children}
        </View>
    );
}

export default Background;




