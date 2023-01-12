import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
function DetailScreen({ navigation, route }) {
    const model = route.params
    return (
        <View style={styles.scaffold}>
            <SafeAreaView>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 16,
                }}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Feather style={{
                            fontSize: 20,
                            padding: 8,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: "#CDCDCD",
                        }} name="chevron-left" />
                    </TouchableOpacity>
                    <View style={{
                        padding: 8,
                        borderRadius: 8,
                        backgroundColor: "#F5CA48",
                    }}>
                        <Feather style={{ fontSize: 20, color: "white" }} name="star" />
                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ padding: 16 }}>
                        <Text style={{
                            color: "#313234",
                            fontSize: 32,
                            fontWeight: "700",
                        }}>{model.title}</Text>
                        <Text style={{
                            color: "#E4723C",
                            fontSize: 32,
                            fontWeight: "600",
                            paddingVertical: 10,
                        }}>{model.price}</Text>
                        <View style={{ position: "relative", height: 180 }}>
                            <View style={{ position: "absolute" }}>
                                <LabelSection title="Size" content={model.size} />
                                <LabelSection title="Crust" content={model.crust} />
                                <LabelSection title="Delivery in" content={model.delivery} />
                            </View>
                            <View style={{
                                position: "absolute",
                                width: "80%",
                                right: "-20%",
                            }}>
                                <Image style={{
                                    aspectRatio: 16 / 9,
                                }} source={{ uri: model.image }} resizeMode="contain" />
                            </View>
                        </View>
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 16,
                        }}>Ingredients</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        {model.options.map(item =>
                            <View style={{
                                shadowColor: "black",
                                shadowOpacity: 0.2,
                                shadowRadius: 8,
                                shadowOffset: {},
                                paddingVertical: 16,
                                paddingLeft: 16,
                            }}>
                                <Image style={{
                                    width: 120,
                                    aspectRatio: 4 / 3,
                                    borderRadius: 16,
                                }} source={{ uri: item.image }} />
                            </View>
                        )}
                    </ScrollView>

                </ScrollView>
                <View style={{
                    paddingHorizontal: 16,
                }}>
                    <View style={{
                        flexDirection: "row",
                        height: 50,
                        backgroundColor: "#F5CA48",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 25,
                    }}>
                        <Text style={{
                            fontWeight: "700",
                        }}>Place an order</Text>
                        <Feather style={{ fontSize: 20 }} name="chevron-right" />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
    function LabelSection({ title = "", content = "" }) {
        return (
            <View>
                <Text style={{
                    color: "#CDCDCD",
                }}>{title}</Text>
                <Text style={{
                    fontWeight: "600",
                    fontSize: 16,
                }}>{content}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    scaffold: {
        height: "100%",
    }
})
export default DetailScreen;