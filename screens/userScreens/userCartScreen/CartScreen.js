import { Text, ScrollView, View } from "react-native";
import { cartScreenStyles } from "./CartScreen.styles";
import CardSection from "../../../components/CardSection/CardSection";
import { prepareCartScreenData } from "../../../data/CartScreenData";
import CustomButtom from "../../../components/CustomButton/CustomButton";
import { Colors } from "../../../constants/commonConstants";
import { Entypo } from '@expo/vector-icons';

const CartScreen = () => {
  const data = prepareCartScreenData();
  return (
    <>
      <ScrollView style={cartScreenStyles?.container}>
        <Text key='sample' style={cartScreenStyles?.text}>Welcome to cart <Entypo name="shopping-cart" size={30} color="black" /></Text>

        {data.map((data) => {
          return (
            <CardSection
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
            />
          );
        })}
      </ScrollView>
      <View style={cartScreenStyles?.fixedContainer}>
        <Text style={cartScreenStyles?.amountText}>Subtotal: <Text style={{fontFamily:'roboto-bold'}}>{`₹500`}</Text></Text>
        <CustomButtom bg={Colors?.ivory} title={`Checkout with ${5} items`}clickHandler={() => console.log('clicked')} containerStyles={cartScreenStyles?.checkOutButtonStyles} />
      </View>
    </>
  );
};

export default CartScreen;
