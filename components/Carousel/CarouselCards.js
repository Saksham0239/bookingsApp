import { useRef, useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
// import Carousel from 'react-native-reanimated-carousel';
import CarouselData from "../../data/CarouselData";
import CarouselCardItem from "./CarouselCardItem";
import { SLIDER_WIDTH, ITEM_WIDTH, Colors } from "../../constants/commonConstants";


const CarouselCards = () => {

    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <View style={styles?.container}>
            <Carousel
                // autoplay={true}
                // loop={true}
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data={CarouselData}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
            />

            {/* <Pagination
                dotsLength={CarouselData?.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                activeOpacity={0.8}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            /> */}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    }
})

export default CarouselCards;