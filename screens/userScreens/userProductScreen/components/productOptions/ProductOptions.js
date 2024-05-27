import { Text, View } from "react-native";
import { productOptionsStyles } from "./ProductOptions.styles";
import TypeOptions from "./TypeOptions";

const ProductOptions = () => {
  return (
    <View style={productOptionsStyles?.container}>
      <Text
        style={productOptionsStyles?.boughtText}
      >{`7k+ brought in last month`}</Text>
      <View style={productOptionsStyles?.borderGrey} />
      <TypeOptions />
      <View style={productOptionsStyles?.borderGrey} />
    </View>
  );
};

export default ProductOptions;
