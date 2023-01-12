import { View } from "react-native";
import MyText from "../../components/MyText";

function SectionComponent(props) {
    return (
        <View style={{
            marginVertical: 16,
        }}>
            <MyText style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 16,
            }}>{props.title}</MyText>
            {props.children}
        </View>
    )
}

export default SectionComponent;