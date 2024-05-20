import { ScrollView, Text } from "react-native";
import { productScreenStyles } from "./ProductScreen.styles";
import { useRoute } from "@react-navigation/native";
import DynamicCarousel from "../../../components/DynamicCarousel/DynamicCarousel";

const ProductScreen = () => {
  const { params } = useRoute();
  return (
    <ScrollView style={productScreenStyles?.container}>
      {/* <Text>Product Screen for product {params?.productId}</Text> */}
      <DynamicCarousel />
    </ScrollView>
  );
};

export default ProductScreen;
