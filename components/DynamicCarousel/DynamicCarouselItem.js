import { Image, View } from "react-native";
import { dynamicCarouselStyles } from "./DynamicCarousel.styles";

const DynamicCarouselItem = (props) => {
  console.log(props);
  return (
    <View style={dynamicCarouselStyles?.container} key={props.index}>
      <Image
        source={{ uri: props.item.imgUrl }}
        style={dynamicCarouselStyles?.image}
        resizeMode="stretch"
      />
    </View>
  );
};

export default DynamicCarouselItem;
