import { Text, View } from "react-native";
import { cartScreenStyles } from "./CartScreen.styles";
import CardSection from "../../../components/CardSection/CardSection";

const CartScreen = () => {
  return (
    <View style={cartScreenStyles?.container}>
      <Text style={cartScreenStyles?.text}>Welcome to cart</Text>
      <CardSection />
    </View>
  );
};

export default CartScreen;
