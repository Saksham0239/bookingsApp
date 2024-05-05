import { Text,TouchableOpacity,ImageBackground,View } from "react-native";
import { cardItemStyles } from "./CardItem.styles";

const CardItem = ({imageUri,textLabel}) => {

    return (
        <TouchableOpacity style={cardItemStyles?.container}>
            <ImageBackground
                source={{
                    uri:imageUri,
                }}
                resizeMode='cover'
                style={cardItemStyles.img}>
                <Text style={cardItemStyles.text} >{textLabel}</Text>
                <View style={cardItemStyles?.overlayView} />
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default CardItem;