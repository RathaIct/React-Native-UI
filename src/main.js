import React from 'react';
import SampleOne from './views/SampleOne';
import { Text, TouchableOpacity, View } from 'react-native'
import SampleTwo from './views/SampleTwo';
import SampleThree from './views/SampleThree';
import SampleFour from './views/SampleFour';
import SampleFive from './views/SampleFive';
import SampleSix from './views/SampleSix';
import SampleSeven from './views/SampleSeven';
import HomeScreen from './views/foodui/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './views/foodui/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FilterScreen from './views/foodui/FilterScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function main() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>

    );
    function StackNavigator() {
        return (
            <Stack.Navigator
                initialRouteName="Drawer"
                screenOptions={{
                    headerShown: false,
                    animation: "fade"
                }}>
                <Stack.Screen name="Drawer" component={DrawerNavigator} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Filter" component={FilterScreen} />
            </Stack.Navigator>
        )
    }
    function DrawerNavigator() {
        return (
            <Drawer.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false,
                drawerPosition: "right",
                // drawerType: "front",
                drawerStyle: {
                    width: 240,
                },
            }} >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="test" component={HomeScreen} />
            </Drawer.Navigator>
        )
    }
}

export default main;