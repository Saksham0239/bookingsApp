import { Image, View } from "react-native";
import { dynamicCarouselStyles } from "./DynamicCarousel.styles";

const DynamicCarouselItem = (props) => {
  return (
    <View style={dynamicCarouselStyles?.container} key={props.index}>
      <Image
        source={{ uri: props.item.imgUrl }}
        style={dynamicCarouselStyles?.image}
        resizeMode="center"
      />
    </View>
  );
};

export default DynamicCarouselItem;
