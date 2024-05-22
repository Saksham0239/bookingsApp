import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CarouselData from "../../data/CarouselData";
import DynamicCarouselItem from "./DynamicCarouselItem";

const DynamicCarousel = ({ caraouselImages }) => {
  const carouselItemWidth = Dimensions.get("window").width;
  console.log("caraouselImages", caraouselImages);
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        mode="parallax"
        width={carouselItemWidth}
        height={carouselItemWidth / 2}
        autoPlay={true}
        data={caraouselImages ? caraouselImages : CarouselData}
        renderItem={DynamicCarouselItem}
      />
    </View>
  );
};

export default DynamicCarousel;
