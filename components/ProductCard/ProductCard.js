import { View, Text, Image, Pressable } from "react-native";
import { productCardStyles } from "./ProductCard.styles";
import StarRating from "../StarRating/StarRating";

const ProductCard = ({
  imgSrc,
  productName,
  rating,
  numberRated,
  productDetails,
  percentageDiscount,
  discountedPrice,
  originalPrice,
  deliveryTime,
}) => {
  return (
    <Pressable
      onPress={() => console.log("clicked")}
      style={productCardStyles?.container}
    >
      <View style={productCardStyles?.leftContainer}>
        <Image
          source={{ uri: imgSrc }}
          resizeMode="contain"
          style={productCardStyles?.image}
        />
      </View>
      <View style={productCardStyles?.rightContainer}>
        <Text style={productCardStyles?.titleText}>{productName}</Text>
        <View style={productCardStyles?.ratingSection}>
          <Text style={productCardStyles?.currentRating}>{rating}</Text>
          <StarRating rating={rating} />
          <Text
            style={productCardStyles?.numberOfPeopleRated}
          >{`${numberRated}`}</Text>
        </View>
        <Text style={productCardStyles?.boughtText}>{productDetails}</Text>
        <View style={productCardStyles?.priceSection}>
          <Text
            style={productCardStyles?.discountedPrice}
          >{`₹${discountedPrice}`}</Text>
          <View style={productCardStyles?.actualPriceSection}>
            <Text style={productCardStyles?.actualPrice}>{`M.R.P:`}</Text>
            <Text
              style={productCardStyles?.actualPriceValue}
            >{`₹${originalPrice}`}</Text>
            <Text
              style={productCardStyles?.actualPriceValueOff}
            >{`${percentageDiscount}%`}</Text>
          </View>
        </View>
        <Text style={productCardStyles?.cardText}>
          {`Delivery in ${deliveryTime}`}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
