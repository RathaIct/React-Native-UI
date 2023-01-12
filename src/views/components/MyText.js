import { Text } from 'react-native';

function MyText(props) {
    return (
        <Text style={[{ fontFamily: "Montserrat" }, props.style]}>{props.children}</Text>
    );
}

export default MyText;