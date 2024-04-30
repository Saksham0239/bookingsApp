import {  TouchableOpacity, Image, Text } from "react-native";
import { caraouselCardItemStyles } from "./CarouselCardItem.styles";


const CarouselCardItem = ({ item, index }) => {

    return (
        <TouchableOpacity style={caraouselCardItemStyles?.container} key={index}>
            <Image source={{ uri: item.imgUrl }} style={caraouselCardItemStyles?.image} />
            <Text style={caraouselCardItemStyles?.header}>{item.title}</Text>
             {/* <Text style={caraouselCardItemStyles?.body}>{item.body}</Text> */}
        </TouchableOpacity>
    )
}

export default CarouselCardItem;