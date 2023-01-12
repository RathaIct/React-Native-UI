import { Image, View } from "react-native";
import MyText from "../../components/MyText";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function CategoryItem({ model }) {
    return (
        <View style={{
            height: 200,
            width: 120,
            borderRadius: 25,
            backgroundColor: model.is_selected ? "#F5CA48" : "#FFFFFF",
            shadowColor: "#000",
            shadowOpacity: 0.10,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 16,
        }}>
            <Image style={{
                width: "100%",
            }} source={model.picture} resizeMode="contain" />
            <MyText
                style={{
                    fontWeight: "600",
                    marginVertical: 8,
                }} >{model.title}</MyText>
            <View style={{
                borderRadius: 20,
                padding: 8,
                backgroundColor: model.is_selected ? "white" : "#F26C68",
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <FontAwesome style={{ fontSize: 16 }} name="chevron-right" />
            </View>
        </View>
    )
}

export default CategoryItem;