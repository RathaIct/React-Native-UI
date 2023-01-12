import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AssetSvg } from "../../../utils/AssetSvg";
import Feather from 'react-native-vector-icons/Feather';
function ProductItem({ model, props }) {
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Detail", model);
        }}
            activeOpacity={0.7}
        >
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ padding: 16 }}>
                        <View style={styles.row}>
                            <AssetSvg.king_icon style={{ marginRight: 8 }} />
                            <Text style={{
                                fontWeight: "600",
                            }}>top of the week</Text>
                        </View>
                        <Text style={styles.title}>{model.title}</Text>
                        <Text style={styles.weight}>{model.weight}</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.addContainer}>
                                <Text>+</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.row, { paddingHorizontal: 16 }]}>
                            <Feather style={{ fontSize: 18, marginRight: 8 }} name="star" />
                            <Text>5.0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: model.image }} resizeMode="contain" />
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        backgroundColor: "white",
        marginBottom: 16,
        flexDirection: "row",
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOpacity: 0.5,
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        marginTop: 16,
        fontWeight: "600",
        color: "#313234"
    },
    weight: {
        color: "#C4C4C4",
        fontSize: 12,
    },
    addContainer: {
        width: 90,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5CA48",
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    imageContainer: {
        width: "50%",
        position: "relative",
        overflow: "hidden",
    },
    image: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        right: "-30%",
    }
})

export default ProductItem;