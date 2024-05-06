import { Image, Text, View } from "react-native";
import { cardSectionStyles } from "./CardSection.styles";
import SampleImage from "../../assets/images/e-commerce-removebg-1.png";
import CardButton from "../CardButton/CardButton";

const CardSection = ({ inStock = true }) => {
  return (
    <View style={cardSectionStyles?.container}>
      <View style={cardSectionStyles?.upperContainer}>
        <View style={cardSectionStyles?.leftImageContainer}>
          <Image
            style={cardSectionStyles?.image}
            source={SampleImage}
            resizeMode="contain"
          />
        </View>
        <View style={cardSectionStyles?.rightTextContainer}>
          <Text style={cardSectionStyles?.productName}>Nivea Face Cream</Text>
          <Text style={cardSectionStyles?.productDetails}>
            100+ bought in past month
          </Text>
          <View style={cardSectionStyles?.offerSection}>
            <Text style={cardSectionStyles?.percentageDiscount}>22% off</Text>
            <Text style={cardSectionStyles?.offerText}>Great Summer Sale</Text>
          </View>
          <View style={cardSectionStyles?.priceSection}>
            <Text style={cardSectionStyles?.discountedPrice}>₹549</Text>
            <Text style={cardSectionStyles?.originalPrice}>
              M.R.P.: <Text style={cardSectionStyles?.priceCut}>₹700</Text>
            </Text>
          </View>
          {inStock && <Text style={cardSectionStyles?.inStock}>In stock</Text>}
          {!inStock && (
            <Text style={cardSectionStyles?.outOfStock}>Out of stock</Text>
          )}
        </View>
      </View>
      <View style={cardSectionStyles?.middleContainer}>
        <CardButton amount={2} />
        <Text style={cardSectionStyles?.smallButton}>delete</Text>
        <Text style={cardSectionStyles?.smallButton}>Add to wishlist</Text>
      </View>
      <View style={cardSectionStyles?.lowerContainer}>
        <Text style={cardSectionStyles?.smallButton}>share</Text>
        <Text style={cardSectionStyles?.smallButton}>show more like this</Text>
      </View>
    </View>
  );
};

export default CardSection;
