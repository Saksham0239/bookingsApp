import { Image, Text, View } from "react-native";
import { cardSectionStyles } from "./CardSection.styles";
import CardButton from "../CardButton/CardButton";

const CardSection = ({
  inStock,
  productName,
  productImageUri,
  productDetails,
  percentageDiscount,
  saleName,
  discountedPrice,
  originalPrice,
  quantity,
}) => {
  return (
    <View style={cardSectionStyles?.container}>
      <View style={cardSectionStyles?.upperContainer}>
        <View style={cardSectionStyles?.leftImageContainer}>
          <Image
            style={cardSectionStyles?.image}
            source={{
              uri: productImageUri,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={cardSectionStyles?.rightTextContainer}>
          <Text style={cardSectionStyles?.productName}>{productName}</Text>
          <Text style={cardSectionStyles?.productDetails}>
            {productDetails}
          </Text>
          {percentageDiscount && (
            <View style={cardSectionStyles?.offerSection}>
              {percentageDiscount && (
                <Text
                  style={cardSectionStyles?.percentageDiscount}
                >{`${percentageDiscount}% off`}</Text>
              )}
              {saleName && (
                <Text style={cardSectionStyles?.offerText}>{saleName}</Text>
              )}
            </View>
          )}
          <View style={cardSectionStyles?.priceSection}>
            {discountedPrice && (
              <Text
                style={cardSectionStyles?.discountedPrice}
              >{`₹${discountedPrice}`}</Text>
            )}
            <Text style={cardSectionStyles?.originalPrice}>
              M.R.P.:{" "}
              <Text
                style={cardSectionStyles?.priceCut}
              >{`₹${originalPrice}`}</Text>
            </Text>
          </View>
          {inStock && <Text style={cardSectionStyles?.inStock}>In stock</Text>}
          {!inStock && (
            <Text style={cardSectionStyles?.outOfStock}>Out of stock</Text>
          )}
        </View>
      </View>
      <View style={cardSectionStyles?.middleContainer}>
        {inStock ? <CardButton amount={quantity} /> : <View></View>}
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
