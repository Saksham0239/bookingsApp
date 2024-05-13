//all the products will be rendered here
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { productScreenStyles } from "./ProductsScreen.styles";

const ProductsScreen = () => {
  const { params } = useRoute();
  const { searchString } = params;
  console.log(searchString);
  return (
    <View style={productScreenStyles?.container}>
      <ProductCard />
    </View>
  );
};

export default ProductsScreen;
