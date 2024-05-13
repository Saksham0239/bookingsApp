import { View, Text, Image } from "react-native";
import { productCardStyles } from "./ProductCard.styles";
import SampleImage from "../../assets/images/img_sample.webp";
import CustomButton from "../CustomButton/CustomButton";
import { Colors } from "../../constants/commonConstants";
import StarRating from "../StarRating/StarRating";

const ProductCard = () => {
  return (
    <View style={productCardStyles?.container}>
      <View style={productCardStyles?.leftContainer}>
        <Image source={SampleImage} style={productCardStyles?.image} />
      </View>
      <View style={productCardStyles?.rightContainer}>
        <Text style={productCardStyles?.titleText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Text>
        <View style={productCardStyles?.ratingSection}>
          <Text style={productCardStyles?.currentRating}>4.2</Text>
          <StarRating rating={3.8} />
          <Text
            style={productCardStyles?.numberOfPeopleRated}
          >{`(9,200)`}</Text>
        </View>
        <Text style={productCardStyles?.boughtText}>
          400+ Bought in past month
        </Text>
        <View style={productCardStyles?.priceSection}>
          <Text style={productCardStyles?.discountedPrice}>{`₹2,799`}</Text>
          <View style={productCardStyles?.actualPriceSection}>
            <Text style={productCardStyles?.actualPrice}>{`M.R.P:`}</Text>
            <Text style={productCardStyles?.actualPriceValue}>{`₹6,999`}</Text>
            <Text style={productCardStyles?.actualPriceValueOff}>{`60%`}</Text>
          </View>
        </View>
        <Text style={productCardStyles?.cardText}>
          Delivery in 2 working days
        </Text>
        <CustomButton
          bg={Colors?.ivory}
          title="Add to cart"
          textStyles={productCardStyles?.buttonTextStyles}
          containerStyles={productCardStyles?.buttonContainerStyles}
        />
      </View>
    </View>
  );
};

export default ProductCard;
