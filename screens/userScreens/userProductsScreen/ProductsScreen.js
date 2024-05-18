//all the products will be rendered here
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { productScreenStyles } from "./ProductsScreen.styles";
import { ApplicationContext } from "../../../AppContext/appContextProvider";
import { useContext } from "react";
import useProductScreen from "../../../hooks/user/useProductScreen";

const ProductsScreen = () => {
  const { params } = useRoute();
  const { searchString } = params;
  useProductScreen({ searchString });
  const { appState } = useContext(ApplicationContext);
  const { productScreenFilteredData } = appState;

  return (
    <ScrollView style={productScreenStyles?.container}>
      {productScreenFilteredData &&
        productScreenFilteredData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              productName={product.productName}
              imgSrc={product.productImageUri}
              rating={product.rating}
              numberRated={product.numberOfPeopleRated}
              productDetails={product.productDetails}
              percentageDiscount={product.percentageDiscount}
              discountedPrice={product.discountedPrice}
              originalPrice={product.originalPrice}
              deliveryTime={product.deliveryTime}
              precentageDiscount={product.precentageDiscount}
            />
          );
        })}
    </ScrollView>
  );
};

export default ProductsScreen;
