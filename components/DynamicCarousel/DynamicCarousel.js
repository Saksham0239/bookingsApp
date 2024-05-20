import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ITEM_WIDTH } from "../../constants/commonConstants";
import CarouselData from "../../data/CarouselData";
import DynamicCarouselItem from "./DynamicCarouselItem";

const DynamicCarousel = () => {
  const carouselItemWidth = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        mode="parallax"
        width={carouselItemWidth}
        height={carouselItemWidth / 2}
        autoPlay={true}
        // data={[...CarouselData.keys()]}
        data={CarouselData}
        renderItem={DynamicCarouselItem}
      />
    </View>
  );
};

export default DynamicCarousel;
