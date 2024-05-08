import { Text, ScrollView, View } from "react-native";
import { cartScreenStyles } from "./CartScreen.styles";
import CardSection from "../../../components/CardSection/CardSection";
import CustomButtom from "../../../components/CustomButton/CustomButton";
import { Colors } from "../../../constants/commonConstants";
import { Entypo } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../cartContext/cartContextProvider";

const CartScreen = () => {
  const { useCartContext } = useContext(CartContext);
  const cartContextHooks = useCartContext();
  const { cartData, loadCartData, totalProducts, totalPrice } =
    cartContextHooks;
  useEffect(() => {
    loadCartData();
  }, []);
  return (
    <>
      <ScrollView style={cartScreenStyles?.container}>
        <Text key="sample" style={cartScreenStyles?.text}>
          Welcome to cart{" "}
          <Entypo name="shopping-cart" size={30} color="black" />
        </Text>

        {cartData &&
          cartData.map((data) => {
            return (
              <CardSection
                id={data.id}
                key={data.id}
                inStock={data.inStock}
                productName={data.productName}
                productDetails={data.productDetails}
                productImageUri={data.productImageUri}
                percentageDiscount={data.percentageDiscount}
                saleName={data.saleName}
                discountedPrice={data.discountedPrice}
                originalPrice={data.originalPrice}
                quantity={data.quantity}
                cartContextHooks={cartContextHooks}
              />
            );
          })}
      </ScrollView>
      <View style={cartScreenStyles?.fixedContainer}>
        <Text style={cartScreenStyles?.amountText}>
          Subtotal:{" "}
          <Text style={{ fontFamily: "roboto-bold" }}>{`₹${totalPrice}`}</Text>
        </Text>
        <CustomButtom
          bg={Colors?.ivory}
          title={`Checkout with ${totalProducts} items`}
          clickHandler={() => console.log("clicked")}
          containerStyles={cartScreenStyles?.checkOutButtonStyles}
        />
      </View>
    </>
  );
};

export default CartScreen;
