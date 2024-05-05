import { TouchableOpacity, Image, Text } from "react-native";
import { caraouselCardItemStyles } from "./CarouselCardItem.styles";

const CarouselCardItem = ({ item, index }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("item pressed")}
      style={caraouselCardItemStyles?.container}
      key={index}
    >
      <Image
        source={{ uri: item.imgUrl }}
        style={caraouselCardItemStyles?.image}
        resizeMode="stretch"
      />
      {item.title && (
        <Text style={caraouselCardItemStyles?.header}>{item.title}</Text>
      )}
      {item.body && (
        <Text style={caraouselCardItemStyles?.body}>{item.body}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CarouselCardItem;
