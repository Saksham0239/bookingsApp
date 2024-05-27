import { Text, View } from "react-native";
import { productHeaderStyles } from "./ProductHeader.styles";
import StarRating from "../../../../../components/StarRating/StarRating";

const ProductHeader = () => {
  return (
    <View style={productHeaderStyles?.container}>
      <View style={productHeaderStyles?.topContainer}>
        <Text style={productHeaderStyles?.brandText}>Brand:Sprite</Text>
        <View style={productHeaderStyles?.ratingContainer}>
          <StarRating rating={4.2} />
          <Text>600</Text>
        </View>
      </View>
      <View style={productHeaderStyles?.bottomContainer}>
        <Text style={productHeaderStyles?.bottomContainerText}>
          Sprite Lemon-Lime Flavoured Cold-Drink | Refreshing Taste | Clear Soft
          Drink with No added colors| Recyclable PET bottle , 1L
        </Text>
      </View>
    </View>
  );
};

export default ProductHeader;
