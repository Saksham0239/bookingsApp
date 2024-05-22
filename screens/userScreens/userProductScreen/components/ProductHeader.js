import { Text, View } from "react-native";
import { productHeaderStyles } from "./ProductHeader.styles";

const ProductHeader = () => {
  return (
    <View style={productHeaderStyles?.container}>
      <View style={productHeaderStyles?.topContainer}>
        <Text>Hello</Text>
        <Text>World</Text>
      </View>
      <View style={productHeaderStyles?.bottomContainer}>
        <Text>Product Title</Text>
      </View>
    </View>
  );
};

export default ProductHeader;
