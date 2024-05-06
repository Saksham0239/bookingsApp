import { Text, View, ScrollView } from "react-native";
import { cartScreenStyles } from "./CartScreen.styles";
import CardSection from "../../../components/CardSection/CardSection";

const CartScreen = () => {
  return (
    <ScrollView style={cartScreenStyles?.container}>
      <Text style={cartScreenStyles?.text}>Welcome to cart</Text>
      <CardSection />
      <CardSection />
      <CardSection />
      <CardSection />
    </ScrollView>
  );
};

export default CartScreen;
