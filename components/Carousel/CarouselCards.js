import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
// import Carousel from 'react-native-reanimated-carousel';
import CarouselData from "../../data/CarouselData";
import CarouselCardItem from "./CarouselCardItem";
import { SLIDER_WIDTH, ITEM_WIDTH } from "../../constants/commonConstants";

const CarouselCards = () => {
  return (
    <View style={styles?.container}>
      <Carousel
        autoplay={true}
        loop={true}
        layout="default"
        layoutCardOffset={9}
        data={CarouselData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:Colors?.offWhite,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});

export default CarouselCards;
